

// pdf  ---->  pdf Storage  ---> text ---> llm ---> agent ---> promt ---> data ---> save mongoDb ---> redis -->pdf delete ---> resume data ( score , missing skills , recommen.)

import redis from "../../../shared/redis/redis.js";
import { resumeAgent } from "../agents/resume.agent.js";
import extractText from "../config/pdf.js";
import Resume from "../models/resume.model.js";
import fs from "fs";


export const uploadResume = async (req, res) => {

    let file = null;

    try {

        file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "Resume PDF is required"
            });
        }

        const userId = req.headers["x-user-id"];

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "UserId is required"
            });
        }

        console.log("File received:", file.path);
        console.log("User ID:", userId);

        // Extract text from PDF
        const resumeText = await extractText(file.path);

        console.log("PDF text extracted successfully");

        // Send resume text to AI
        const aiResponse = await resumeAgent(resumeText);

        console.log("AI response received:");
        console.log(aiResponse);

        // Convert AI response to JSON
        const resumeData = JSON.parse(aiResponse);

        console.log("AI response converted to JSON");

        // Find existing resume
        let resume = await Resume.findOne({ userId });

        if (resume) {

            Object.assign(resume, {
                ...resumeData,
                extractedText: resumeText
            });

            await resume.save();

            console.log("Existing resume updated");

        } else {

            resume = await Resume.create({
                userId,
                extractedText: resumeText,
                ...resumeData
            });

            console.log("New resume created");
        }

        // Save in Redis
        await redis.set(
            `resume:${userId}`,
            JSON.stringify(resume)
        );

        console.log("Resume saved in Redis");

        // Delete uploaded PDF
        if (file.path && fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
            console.log("PDF deleted");
        }

        return res.status(200).json({
            success: true,
            message: "Resume analyzed successfully",
            data: resume
        });

    } catch (error) {

        console.error("UPLOAD RESUME ERROR:");
        console.error(error);

        // Delete file if error occurs
        if (file?.path && fs.existsSync(file.path)) {
            try {
                fs.unlinkSync(file.path);
            } catch (deleteError) {
                console.error("File deletion error:", deleteError);
            }
        }

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export const getResume = async (req, res) => {

    try {

        const userId = req.headers["x-user-id"];

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "UserId is required"
            });
        }

        // Check Redis
        const cache = await redis.get(`resume:${userId}`);

        if (cache) {
            return res.status(200).json({
                success: true,
                source: "redis",
                data: JSON.parse(cache)
            });
        }

        // Check MongoDB
        const resume = await Resume.findOne({ userId });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        // Save MongoDB data to Redis
        await redis.set(
            `resume:${userId}`,
            JSON.stringify(resume)
        );

        return res.status(200).json({
            success: true,
            source: "mongoDb",
            data: resume
        });

    } catch (error) {

        console.error("GET RESUME ERROR:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
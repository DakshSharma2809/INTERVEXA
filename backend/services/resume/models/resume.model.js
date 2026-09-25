import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      index: true,
    },

    extractedText: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      default: 0,
    },

    summary: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    // Education
    education: {
      type: [
        {
          institution: {
            type: String,
            default: "",
          },

          degree: {
            type: String,
            default: "",
          },

          location: {
            type: String,
            default: "",
          },

          startDate: {
            type: String,
            default: "",
          },

          endDate: {
            type: String,
            default: "",
          },

          status: {
            type: String,
            default: "",
          },
        },
      ],
      default: [],
    },

    // Skills
    skills: {
      type: [String],
      default: [],
    },

    // Projects
    projects: {
      type: [
        {
          name: {
            type: String,
            default: "",
          },

          date: {
            type: String,
            default: "",
          },

          technologies: {
            type: [String],
            default: [],
          },

          description: {
            type: String,
            default: "",
          },
        },
      ],
      default: [],
    },

    // Work Experience
    experience: {
      type: [
        {
          company: {
            type: String,
            default: "",
          },

          role: {
            type: String,
            default: "",
          },

          type: {
            type: String,
            default: "",
          },

          startDate: {
            type: String,
            default: "",
          },

          endDate: {
            type: String,
            default: "",
          },

          responsibilities: {
            type: [String],
            default: [],
          },
        },
      ],
      default: [],
    },

    // Strengths
    strengths: {
      type: [String],
      default: [],
    },

    // Weaknesses
    weaknesses: {
      type: [String],
      default: [],
    },

    // Missing Skills
    missingSkills: {
      type: [String],
      default: [],
    },

    // Suggested Role
    suggestedRole: {
      type: String,
      default: "",
    },

    // Recommendations
    recommendations: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
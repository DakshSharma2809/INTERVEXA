import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

const llm = new ChatOpenAI({
  model: "gpt-5.6-luna",
  temperature: 1,
  maxTokens: 2500,
  maxRetries: 2,
});

export default llm;

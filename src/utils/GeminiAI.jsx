/* eslint-disable no-unused-vars */
import { GoogleGenerativeAI } from "@google/generative-ai";

// import { GEMINI_API } from "./Constant";

const key="AIzaSyCe5Lb6yVuQnSnjm4mS50q3hXx7G24JZhw"
console.log(key);
const genAI = new GoogleGenerativeAI({key})

export default genAI;

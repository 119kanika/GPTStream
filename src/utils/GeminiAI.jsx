/* eslint-disable no-unused-vars */
import { GoogleGenerativeAI } from "@google/generative-ai";

import { GEMINI_API } from "./Constant";

const key=GEMINI_API
console.log(key);
const genAI = new GoogleGenerativeAI({key})

export default genAI;

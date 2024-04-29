/* eslint-disable no-unused-vars */
import { GoogleGenerativeAI } from "@google/generative-ai";

import { GEMINI_API } from "./Constant";

const genAI = new GoogleGenerativeAI({key:GEMINI_API})

export default genAI;

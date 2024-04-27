import OpenAI from "openai";
// import {OPENAI_KEY} from "./Constant"
import conf from "./Conf/conf"

const openai = new OpenAI({
    apiKey: conf.gptapikey, // This is the default and can be omitted
    dangerouslyAllowBrowser: true
  });

export default openai;
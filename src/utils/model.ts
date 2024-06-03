import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StringOutputParser } from "@langchain/core/output_parsers";

export default async function (tokens: string) {
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-pro",
    maxOutputTokens: 1024,
  });

  const parser = new StringOutputParser();

  const chain = model.pipe(parser);

  const res = await chain.invoke([["human", tokens]]);
  return res;
}

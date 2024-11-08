import type { BaseLanguageModelInput } from "@langchain/core/language_models/base";
import { HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  configuration: {
    baseURL: process.env["OPENAI_BASE_URL"],
  },
  apiKey: process.env["OPENAI_API_KEY"],
  model: "gpt-4o-mini",
  temperature: 0,
});

const inputs: any[] = [
  [{ role: "user", content: "Hi im alice" }],
  [{ role: "user", content: "Hi im bob" }],
  [{ role: "user", content: "Hi im charlie" }],
  [{ role: "user", content: "Hi im dave" }],
  [{ role: "user", content: "Hi im eve" }],
  [{ role: "user", content: "Hi im fred" }],
  [{ role: "user", content: "Hi im gary" }],
  [{ role: "user", content: "Hi im hank" }],
];

const promises = inputs.map((input) => llm.invoke(input));
const outputs = await Promise.all(promises);

console.log(outputs.map((output) => output.content));

// output:
// [ "Hi Alice! How can I assist you today?", "Hi Bob! How can I assist you today?", "Hi Charlie! How can I assist you today?",
//   "Hi Dave! How can I assist you today?", "Hello, Eve! How can I assist you today?", "Hi Fred! How can I assist you today?",
//   "Hi Gary! How can I assist you today?", "Hi Hank! How can I assist you today?"
// ]

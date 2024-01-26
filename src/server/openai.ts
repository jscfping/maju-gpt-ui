import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai;

const envMaxTokens =
  Number(process.env.NEXT_PUBLIC_OPENAI_OPTION_MAX_TOKENS) || 512;

const maxMessages = Number(process.env.NEXT_PUBLIC_OPENAI_MAX_MESSAGES) || 8;

export async function sendUserCompletions(options: SendOptions) {
  const {
    messages,
    temperature,
    maxTokens,
    model,
    frequencyPenalty,
    presencePenalty,
  } = options;
  const chatCompletion = await openai.chat.completions.create({
    messages: messages.slice(-maxMessages) as any,
    model,
    max_tokens: Math.min(envMaxTokens, maxTokens),
    temperature,
    frequency_penalty: frequencyPenalty,
    presence_penalty: presencePenalty,
  });
  return chatCompletion;
}

interface Message {
  role: string; // 'user' | 'system' | 'assistant'
  content: string;
}

interface SendOptions {
  messages: Message[];
  temperature: number;
  maxTokens: number;
  model: string;
  frequencyPenalty: number;
  presencePenalty: number;
}
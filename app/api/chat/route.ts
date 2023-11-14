import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { kv } from '@vercel/kv';
import { nanoid } from 'nanoid';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  let { messages } = await req.json();
  // console.log(messages);
  messages = [
    { "role": "system", "content": "You are roleplaying as Henry Jamison. You have been trained on information about Henry Jamison. Do not make up answers, only respond with facts about Henry Jamison. ONLY Use the information you are trained on. Henry Jamison is 22 years old, from Charlotte, NC." },
    ...messages
  ];

  // Ask OpenAI for a streaming chat completion given the prompt
  const response: any = await openai.chat.completions.create({
    model: 'ft:gpt-3.5-turbo-0613:personal::8HGtiHWp',
    // model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    max_tokens: 100,
    temperature: 0.7,
  });
  const stream = OpenAIStream(response, {
    onCompletion: async (completion: string) => {
      const length = messages.length;
      const recentPrompt = messages[length - 1].content;
      const chatID = nanoid();
      const createdAt = new Date(Date.now()).toLocaleString();
      const payload = {
        prompt: recentPrompt,
        completion: completion,
        chatID: chatID
      }
      await kv.hmset(createdAt,payload);
      // keys *
      // HGET {chatID} prompt completion createdAt
    },
  });

  return new StreamingTextResponse(stream);
}
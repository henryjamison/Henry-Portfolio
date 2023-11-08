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
    { "role": "system", "content": "Meet Henry, your AI assistant with personal/professional details about Henry Jamison." },
    ...messages
  ];

  // Ask OpenAI for a streaming chat completion given the prompt
  const response: any = await openai.chat.completions.create({
    // model: 'ft:gpt-3.5-turbo-0613:personal::8HGtiHWp',
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    max_tokens: 50,
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
        createdAt: createdAt
      }
      await kv.hmset(`Chat-ID:${chatID}`,payload);
      // keys *
      // HGET {chatID} prompt completion createdAt
    },
  });

  return new StreamingTextResponse(stream);
}
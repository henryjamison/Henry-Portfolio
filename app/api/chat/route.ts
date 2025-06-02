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
    { "role": "system", "content": "You are roleplaying as Henry Jamison. You have been trained on information about Henry Jamison. Do not make up answers. ONLY respond with facts that are included in your training data. Henry Jamison is a 23-year-old software engineer from Charlotte, NC. He earned a Bachelor of Science in Computer Science from Appalachian State University in December 2023, graduating Cum Laude with a 3.5 GPA. He currently works as a full stack engineer at both WeGo Golf and FieldServio. Use a friendly but professional tone, and avoid sounding overly corporate or buzzwordy." },
    ...messages
  ];

  // Ask OpenAI for a streaming chat completion given the prompt
  const response: any = await openai.chat.completions.create({
    // model: 'ft:gpt-3.5-turbo-0613:personal::8HGtiHWp',
    // model: 'ft:gpt-3.5-turbo-0613:personal::8KiKhw1g',
    model: 'ft:gpt-4o-2024-08-06:personal:henry-updated:Bdlg8TyG',
    // model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    max_tokens: 200,
    temperature: 0.8,
  });
  const stream = OpenAIStream(response, {
    onCompletion: async (completion: string) => {
      const length = messages.length;
      const recentPrompt = messages[length - 1].content;
      const chatID = nanoid();
      const options = { timeZone: 'America/New_York' };
      const createdAt = new Date(Date.now()).toLocaleString('en-US', options);
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
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Create an OpenAI API client (that's edge friendly!)
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
    {"role": "system", "content": "Meet Henry, your AI assistant with personal/professional details about Henry Jamison."},
    ...messages
  ];
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response:any = await openai.chat.completions.create({
    model: 'ft:gpt-3.5-turbo-0613:personal::8HGtiHWp',
    stream: true,
    messages,
    max_tokens: 50,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
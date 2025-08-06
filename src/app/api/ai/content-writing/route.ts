import { NextResponse } from "next/server";
import OpenAI from 'openai';
// import { HttpsProxyAgent } from 'https-proxy-agent';
// const proxy = 'http://127.0.0.1:7890';
// const agent = new HttpsProxyAgent(proxy);

// Generate a story based on the prompt
export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      // httpAgent: agent,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
      temperature: 0.5,
      max_tokens: 1000,
    });

    return NextResponse.json({ content: response.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
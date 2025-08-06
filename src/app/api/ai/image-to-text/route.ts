import { NextResponse } from "next/server";
import OpenAI from 'openai';
// import { HttpsProxyAgent } from 'https-proxy-agent';
// const proxy = 'http://127.0.0.1:7890';
// const agent = new HttpsProxyAgent(proxy);

export async function POST(req: Request) {
  try {
    const { imageUrl, prompt } = await req.json();
    
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
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: {
                url: `${imageUrl}`
              }
            }
          ],
        },
      ],
      max_tokens: 300,
    });

    return NextResponse.json({ result: response.choices[0].message.content });

  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while processing the request" },
      { status: 500 }
    );
  }
} 
import { NextResponse } from "next/server";
import OpenAI from 'openai';

export async function POST(req: Request) {
  try {
    const { imageUrl, tone } = await req.json();
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Create prompt based on selected tone
    const tonePrompts = {
      fun: "Generate a fun and playful caption for this image. Make it engaging and entertaining.",
      joke: "Generate a humorous and witty caption for this image. Make it funny and clever.",
      funny: "Generate a funny caption for this image. Make it amusing and lighthearted.",
      happy: "Generate a positive and upbeat caption for this image. Make it cheerful and optimistic.",
      serious: "Generate a professional and serious caption for this image. Make it formal and thoughtful.",
      sad: "Generate a melancholic or touching caption for this image. Make it emotional and heartfelt.",
      angry: "Generate an intense or passionate caption for this image. Make it bold and strong.",
      ecstatic: "Generate an extremely excited and enthusiastic caption for this image. Make it energetic and thrilling.",
      curious: "Generate an intriguing and thought-provoking caption for this image. Make it mysterious and engaging.",
      informative: "Generate an educational and informative caption for this image. Provide useful details and context.",
      cute: "Generate an adorable and sweet caption for this image. Make it charming and endearing.",
      cool: "Generate a trendy and stylish caption for this image. Make it hip and modern.",
      controversial: "Generate a bold and debate-worthy caption for this image. Make it thought-provoking and edgy."
    };

    const prompt = tonePrompts[tone as keyof typeof tonePrompts] || tonePrompts.fun;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: `${prompt} Keep it concise and suitable for social media platforms like Instagram. Make it engaging and shareable.` },
            {
              type: "image_url",
              image_url: {
                url: imageUrl
              }
            }
          ],
        },
      ],
      max_tokens: 150,
      temperature: 0.8,
    });

    return NextResponse.json({ caption: response.choices[0].message.content });

  } catch (error) {
    console.error('Error generating caption:', error);
    return NextResponse.json(
      { error: "An error occurred while generating the caption" },
      { status: 500 }
    );
  }
}
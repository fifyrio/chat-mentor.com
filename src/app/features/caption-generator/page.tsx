import CaptionGenerator from '@/components/CaptionGenerator/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '100% Free AI Image Caption Generator - ChatMentor',
  description: 'Generate creative captions for any image using our AI-powered tool. No login required. Perfect for Instagram, ALT text, and social media posts. Choose from multiple tones to craft the perfect caption.',
  keywords: ['AI caption generator', 'image caption', 'social media captions', 'Instagram captions', 'AI writing tool', 'free caption generator'],
  alternates: {
    canonical: '/features/caption-generator',
  },
  openGraph: {
    title: '100% Free AI Image Caption Generator - ChatMentor',
    description: 'Generate creative captions for any image using our AI-powered tool. No login required. Perfect for Instagram, ALT text, and social media posts.',
    type: 'website',
    url: 'https://www.chat-mentor.com/features/caption-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: '100% Free AI Image Caption Generator - ChatMentor',
    description: 'Generate creative captions for any image using our AI-powered tool. No login required. Perfect for Instagram, ALT text, and social media posts.',
  }
};

export default function CaptionGeneratorPage() {
  return <CaptionGenerator />;
}
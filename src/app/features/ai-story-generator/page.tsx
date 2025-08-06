import Navbar from "@/components/OnlineBankingApp/Navbar";
import Footer from "@/components/OnlineBankingApp/Footer";
import StoryGenerator from "@/components/StoryGenerator/page";
import StoryGeneratorSeo from "@/components/StoryGenerator/seo";

export const metadata = {
  alternates: {
    canonical: '/features/ai-story-generator',
  },
  title: "Free AI Story Generator",
  description: "Free AI Story Generator",
  keywords: ['ai story generator'],
};

export default function AiStoryGeneratorPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4">
        <h1 className="text-center text-4xl font-bold mb-2">Free Perchance AI story | AI Story Generator</h1>        
        <p className="mb-6 text-center">
        Unleash the potential of AI story generators by discovering how to utilize AI to transform images into text prompts. Explore the top free tools available for this purpose.
        </p>

        <StoryGenerator />
        <StoryGeneratorSeo />
      </div>

      <Footer />
    </>
  );
}

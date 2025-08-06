import Navbar from "@/components/OnlineBankingApp/Navbar";
import Footer from "@/components/OnlineBankingApp/Footer";
import GeneratePrompt from "@/components/Image2Prompt/GeneratePrompt";
import Image2PromptSeo from "@/components/Image2Prompt/seo";

export const metadata = {
  alternates: {
    canonical: '/features/image-to-prompt',
  },
  title: "Free Image to Prompt Creator | AI Image to Text Prompt Generator",
  description: "Free Image to Prompt Creator | AI Image to Text Prompt Generator",
  keywords: ['ai image to text prompt generator'],
};

export default function ImageToPromptPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4">
        <h1 className="text-center text-4xl font-bold mb-2">Free Image to Prompt Creator | AI Image to Text Prompt Generator</h1>        
        <p className="mb-6 text-center">
        Unleash the potential of image to prompt generators by discovering how to utilize AI to transform images into text prompts. Explore the top free tools available for this purpose.
        </p>

        <GeneratePrompt />
        <Image2PromptSeo />
      </div>

      <Footer />
    </>
  );
}

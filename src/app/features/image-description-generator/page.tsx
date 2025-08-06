import Navbar from "@/components/OnlineBankingApp/Navbar";
import Footer from "@/components/OnlineBankingApp/Footer";
import ImageDescriptionGenerator from "@/components/ImageDescriptionGenerator/page";
import ImageDescriptionGeneratorSeo from "@/components/ImageDescriptionGenerator/seo";
export const metadata = {
  alternates: {
    canonical: '/features/image-description-generator',
  },
  title: "Free Image Description Generator | AI Image Description Generator",
  description: "Free Image Description Generator | AI Image Description Generator",
  keywords: ['ai image description generator'],
};

export default function ImageDescriptionGeneratorPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4">
        <h1 className="text-center text-4xl font-bold mb-2">Free Image Description Generator | AI Image Description Generator</h1>        
        <p className="mb-6 text-center">          
            Our AI-powered tool can describe any image. This tool is perfect for creating prompts to improve accessibility, create captions or understand image content. Ideal for social media, education, ecommerce and more!          
        </p>

        <ImageDescriptionGenerator />
        <ImageDescriptionGeneratorSeo />
      </div>

      <Footer />
    </>
  );
}

import Navbar from "@/components/OnlineBankingApp/Navbar";
import Footer from "@/components/OnlineBankingApp/Footer";
import PersonalityGenerator from "@/components/PersonalityGenerator/page";
import GenerateSeoContent from "@/components/PersonalityGenerator/seo";

export const metadata = {
  alternates: {
    canonical: '/features/ai-personality-generator',
  },
  title: "Free AI Personality Generator",
  description: "Free AI Personality Generator",
  keywords: ['ai personality generator'],
};

export default function AiPersonalityGeneratorPage() {  
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4">
        <h1 className="text-center text-4xl font-bold mb-2">Free AI Personality Generator</h1>                
        <PersonalityGenerator />
        <GenerateSeoContent />        
      </div>
      <Footer />
    </>
  );
}

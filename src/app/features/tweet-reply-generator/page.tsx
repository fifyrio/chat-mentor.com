import Navbar from "@/components/OnlineBankingApp/Navbar";
import Footer from "@/components/OnlineBankingApp/Footer";
import TweetReplyGenerator from "@/components/TweetReplyGenerator/page";
import GenerateSeoContent from "@/components/TweetReplyGenerator/seo";

export const metadata = {
  alternates: {
    canonical: '/features/tweet-reply-generator',
  },
  title: "Free AI Tweet Reply Generator",
  description: "Free AI Tweet Reply Generator",
  keywords: ['ai tweet reply generator'],
};

export default function AiPersonalityGeneratorPage() {  
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">AI Tweet Reply Generator (Free Tool)</h1>
      <p className="text-center mb-8">
        Generate engaging tweet replies instantly with our free AI tool. No sign-up needed — start crafting responses now 👇
      </p>
      <TweetReplyGenerator />
      <GenerateSeoContent />
      </div>
      <Footer />
    </>
  );
}

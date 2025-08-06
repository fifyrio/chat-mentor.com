import Navbar from "@/components/OnlineBankingApp/Navbar";
import Footer from "@/components/OnlineBankingApp/Footer";
import FortuneTeller from "@/components/FortuneTeller/page";
// import GenerateSeoContent from "@/components/FortuneTeller/seo";

export const metadata = {
  alternates: {
    canonical: '/features/ai-fortune-teller',
  },
  title: "Free AI Fortune Teller",
  description: "Free AI Fortune Teller",
  keywords: ['ai fortune teller'],
};

export default function AiFortuneTellerPage() {  
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4">
        <h1 className="text-center text-4xl font-bold mb-2">Free AI Fortune Teller</h1>                
        <FortuneTeller />
        {/* <GenerateSeoContent />         */}
      </div>
      <Footer />
    </>
  );
}

import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import FeaturesContent from "@/components/Features/FeaturesContent";
import Footer from "@/components/OnlineBankingApp/Footer";

export const metadata = {
  title: "Free AI Features | AI Features",
  description: "Free AI Features | AI Features",
  keywords: ['ai features'],
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Features"
        homeText="Home"
        homeUrl="/"
      />

      <FeaturesContent />

      <Footer />
    </>
  );
}

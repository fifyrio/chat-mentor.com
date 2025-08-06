import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import Footer from "@/components/OnlineBankingApp/Footer";
import FaqContent from "@/components/FAQ/FaqContent";

export const metadata = {
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="FAQ's"
        homeText="Home"
        homeUrl="/"
      />

      <FaqContent />

      <Footer />
    </>
  );
}

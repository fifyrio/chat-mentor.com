import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import TermsOfUseContent from "@/components/TermsOfUse/TermsOfUseContentEmmaAI";
import Footer from "@/components/OnlineBankingApp/Footer";

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Terms of Use"
        homeText="Home"
        homeUrl="/"
      />

      <TermsOfUseContent />

      <Footer />
    </>
  );
}

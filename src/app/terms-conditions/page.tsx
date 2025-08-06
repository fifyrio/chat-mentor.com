import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";
import Footer from "@/components/OnlineBankingApp/Footer";

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Terms & Conditions"
        homeText="Home"
        homeUrl="/"
      />

      <TermsConditionsContent />

      <Footer />
    </>
  );
}

import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import TermsOfUseContent from "@/components/TermsOfUse/TermsOfUseContent";
import Footer from "@/components/OnlineBankingApp/Footer";
export const metadata = {
  alternates: {
    canonical: '/terms-of-use',
  },
};
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

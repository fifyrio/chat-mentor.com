import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "@/components/OnlineBankingApp/Footer";

export const metadata = {
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Privacy Policy"
        homeText="Home"
        homeUrl="/"
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}

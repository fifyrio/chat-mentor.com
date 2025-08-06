import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContentQRCode";
import Footer from "@/components/OnlineBankingApp/Footer";

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

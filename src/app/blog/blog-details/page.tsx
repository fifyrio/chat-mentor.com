import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import Footer from "@/components/InnerPageLayout/Footer";

export default function BlogDetailsPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Blog Details"
        homeText="Home"
        homeUrl="/"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}

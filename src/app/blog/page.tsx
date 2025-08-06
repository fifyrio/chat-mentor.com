import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import BlogPost from "@/components/Blog/BlogPost";
import Footer from "@/components/InnerPageLayout/Footer";

export const metadata = {
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Blog"
        homeText="Home"
        homeUrl="/"
      />

      <BlogPost />

      <Footer />
    </>
  );
}

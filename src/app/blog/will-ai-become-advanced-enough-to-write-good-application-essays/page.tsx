import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import BlogDetails1 from "@/components/Blog/BlogDetails1";
import Footer from "@/components/InnerPageLayout/Footer";

const BlogData = {
    id: "1",
    image: "/images/blog/Academic-Writing.png", 
    category: "Academic Writing",
    title: "Will AI Become Advanced Enough to Write Good Application Essays?",
    previewLink: "/blog/will-ai-become-advanced-enough-to-write-good-application-essays",
    author: "Caleb S.",
    date: "15 Dec, 2024",
    aosDelay: "100",
    tags: ["AI", "Application Essays"]
  }
export const metadata = {
  alternates: {
    canonical: '/blog/will-ai-become-advanced-enough-to-write-good-application-essays/',
  },
};
export default function BlogDetailsPage() {    

  return (
    <>
      <Navbar />

      <PageBannerTitle
        title={BlogData.title}
        homeText="Home"
        homeUrl="/"
      />

      <BlogDetails1 
        title={BlogData.title} 
        date={BlogData.date} 
        author={BlogData.author} 
        tags={BlogData.tags}
      />

      <Footer />
    </>
  );
}

import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import BlogDetails1 from "@/components/Blog/BlogDetails1";
import Footer from "@/components/InnerPageLayout/Footer";

const BlogData = {
    id: "1",
    image: "/images/blog/Academic-Writing.png", 
    category: "Academic Writing",
    title: "Is It Ok to Use AI to Write Essays?",
    previewLink: "/blog/is-it-ok-to-use-ai-to-write-essays",
    author: "Caleb S.",
    date: "25 Dec, 2024",
    aosDelay: "100",
    tags: ["AI", "Application Essays"]
  }
export const metadata = {
  alternates: {
    canonical: '/blog/is-it-ok-to-use-ai-to-write-essays/',
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

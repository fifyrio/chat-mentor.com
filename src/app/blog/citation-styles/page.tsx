import Navbar from "@/components/OnlineBankingApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import BlogDetailsCitationStylesContent from "@/components/Blog/BlogDetailsCitationStyles";
import Footer from "@/components/InnerPageLayout/Footer";

const BlogData = {
    id: "1",
    image: "/images/blog/Academic-Writing.png", 
    category: "Academic Writing",
    title: "The Importance of Citing Sources in Academic Writing",
    previewLink: "/blog/citation-styles",
    author: "Caleb S.",
    date: "15 Nov, 2024",
    aosDelay: "100",
    tags: ["Citation Practices", "Plagiarism Prevention"]
  }
export const metadata = {
  alternates: {
    canonical: '/blog/citation-styles/',
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

      <BlogDetailsCitationStylesContent 
        title={BlogData.title} 
        date={BlogData.date} 
        author={BlogData.author} 
        tags={BlogData.tags}
      />

      <Footer />
    </>
  );
}

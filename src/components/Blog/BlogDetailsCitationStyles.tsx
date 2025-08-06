"use client";

import React from "react";
import Link from "next/link"; 
import CommentForm from "./CommentForm"; 
import Image from "next/image";

import BlogPost1 from "/public/images/blog/Academic-Writing.png"; 
import BlogPost2 from "/public/images/blog/blog-post4.jpg"; 
import BlogPost3 from "/public/images/blog/blog-post5.jpg"; 

import userImg1 from "/public/images/users/user4.jpg"; 
import userImg2 from "/public/images/users/user5.jpg"; 


// Social Links
const socialLinksData = [

  {
    id: "2",
    icon: "flaticon-twitter",
    link: "https://x.com/KiwiCoderWu",
  },  
];

interface BlogProps {
  title: string;
  date: string;
  author: string;
  tags: string[]
}

const BlogDetailsCitationStylesContent: React.FC<BlogProps> = ({title, date, author, tags}) => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container lg:max-w-[1000px] space-y-[30px] lg:pace-y-[50px]">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-block text-black-color font-semibold text-[16px] md:text-[18px] underline  underline-offset-1 transition duration-500 ease-in-out hover:text-primary-color"
            >
              Back to Home
            </Link>

            <Link
              href="/blog"
              className="inline-block text-black-color font-semibold text-[16px] md:text-[18px] underline  underline-offset-1 transition duration-500 ease-in-out hover:text-primary-color"
            >
              Back to Blog
            </Link>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-[15px] md:space-x-[30px] mb-[10px]">
                <div className="flex items-center space-x-[8px]">
                  <i className="flaticon-user-1"></i>
                  <p>{author}</p>
                </div>

                <div className="flex items-center space-x-[8px]">
                  <i className="flaticon-calendar"></i>
                  <p>{date}</p>
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <Image src={BlogPost1} alt="BlogPost" className="rounded-[20px] mb-[30px]" />
            {/* content -->*/}            
            <p className="mb-4">
                Citing sources is a foundational aspect of academic writing that serves several critical purposes:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Credit</strong>: Acknowledges the contributions of original authors.</li>
                <li><strong>Plagiarism Prevention</strong>: Ensures integrity by guarding against intellectual theft.</li>
                <li><strong>Evidence Support</strong>: Strengthens arguments by grounding them in established research.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Citation Styles Overview</h2>
            <p className="mb-4">
                Citation styles provide the rules for properly citing sources in your work. Choosing the correct citation style is typically influenced by your academic discipline and specific instructions from your instructor or publisher.
            </p>

            <h3 className="text-lg font-semibold mb-2">Types of In-Text Citation Formats</h3>
            <ol className="list-decimal list-inside mb-4">
                <li>
                    <em>Parenthetical Citations</em>: 
                    <ul className="list-disc list-inside mb-1">
                        <li>Common across many disciplines; citations placed after relevant sentences in brackets.</li>
                        <li>Example: (Smith &quot; & Johnson, 2019).</li>
                        <li>Styles: APA, MLA, Chicago (Author-Date), Harvard.</li>
                    </ul>
                </li>
                <li>
                    <em>Numerical Citations</em>: 
                    <ul className="list-disc list-inside mb-1">
                        <li>Each reference is numbered in the order it appears in the text.</li>
                        <li>Example: &quot;The scientific community continues to debate this phenomenon.3&quot;</li>
                        <li>Styles: CSE, IEEE, NLM, AMA.</li>
                    </ul>
                </li>
                <li>
                    <em>Note-Bibliography Citations</em>: 
                    <ul className="list-disc list-inside mb-1">
                        <li>Utilizes footnotes or endnotes linked by superscript numbers for citations.</li>
                        <li>Example: &quot;The concept of justice is multifaceted, with various philosophical perspectives shaping its interpretation.3&quot;</li>
                        <li>Style: Chicago (Note-Bibliography).</li>
                    </ul>
                </li>
            </ol>

            <h2 className="text-xl font-semibold mb-2">Common Citation Styles and Their Examples</h2>
            <ol className="list-decimal list-inside mb-4">
                <li>
                    <em>American Psychological Association (APA)</em>
                    <ul className="list-disc list-inside mb-1">
                        <li><strong>In-text example</strong>: (Smith &quot; & Johnson, 2019).</li>
                        <li><strong>Reference entry</strong>: Smith, A., &amp; Johnson, B. (2019). <em>Artificial Intelligence: Transforming Industries</em>. Publisher.</li>
                    </ul>
                </li>
                <li>
                    <em>Modern Language Association (MLA)</em>
                    <ul className="list-disc list-inside mb-1">
                        <li><strong>In-text example</strong>: (Doe 45).</li>
                        <li><strong>Reference entry</strong>: Doe, John. <em>Title of the Book</em>. Publisher, Year.</li>
                    </ul>
                </li>
                <li>
                    <em>Chicago Manual of Style</em>
                    <ul className="list-disc list-inside mb-1">
                        <li><strong>Author-Date</strong>: (Smith 2018); Reference: Smith, John. 2018. <em>The Innovators: A Journey in Technology</em>. TechBooks Publishing.</li>
                        <li><strong>Note-Bibliography</strong>: &quot;The Industrial Revolution had a profound impact…&quot;1;</li>
                        <li><strong>Reference</strong>: Smith, John. <em>The Age of Machinery</em>. Chicago: University of Chicago Press, 2018.</li>
                    </ul>
                </li>
                <li>
                    <em>Harvard Style</em>
                    <ul className="list-disc list-inside mb-1">
                        <li><strong>In-text example</strong>: (Smith, 2018).</li>
                        <li><strong>Reference entry</strong>: Smith, John. (2018). &quot;Advancements in Quantum Computing.&quot; <em>Quantum Journal</em>, 12(3), 45-58.</li>
                    </ul>
                </li>
                <li>
                    <em>Institute of Electrical and Electronics Engineers (IEEE)</em>
                    <ul className="list-disc list-inside mb-1">
                        <li><strong>In-text example</strong>: [1].</li>
                        <li><strong>Reference entry</strong>: [1] J. Smith et al., &quot;Advancements in Robotics,&quot; <em>Abbrev. Robotics J.</em>, vol. 10, no. 3, pp. 123-145, 2022.</li>
                    </ul>
                </li>
                <li>
                    <em>American Medical Association (AMA)</em>
                    <ul className="list-disc list-inside mb-1">
                        <li><strong>In-text example</strong>: The study found a significant correlation between diet and cardiovascular health.2</li>
                        <li><strong>Reference entry</strong>: 2. Johnson, Emily; Davis, Michael. &quot;Innovations in Sustainable Energy.&quot; <em>Renewable Energy Journal</em>. 2022; 8(4): 245-260.</li>
                    </ul>
                </li>
            </ol>

            <h2 className="text-xl font-semibold mb-2">Choosing the Right Citation Style</h2>
            <p className="mb-4">
                Your choice of citation style largely depends on:
            </p>
            <ol className="list-decimal list-inside mb-4">
                <li>
                    <em>Field Conventions</em>: Different disciplines favor specific styles.
                    <ul className="list-disc list-inside mb-1">
                        <li>Examples:</li>
                        <ul className="list-disc list-inside mb-1">
                            <li>Humanities: MLA</li>
                            <li>Social Sciences: APA</li>
                            <li>Sciences: CSE, IEEE</li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <strong>Instructor or Publisher Guidelines</strong>: 
                    <ul className="list-disc list-inside mb-1">
                        <li>Always check the requirements from your instructor or the specific journal/publisher. Adhering closely to these expectations is crucial.</li>
                    </ul>
                </li>
            </ol>

            <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
            <p className="mb-4">
                Citing sources accurately is vital to maintain academic integrity and bolster your credibility. Although the rules can be intricate, utilizing tools like citation machines can streamline the process. Always ensure that your citations are consistent and adhere to the required format to minimize the risk of rejection or penalties for plagiarism. If in doubt, seek clarification from your instructor or publisher regarding citation expectations.
            </p>

            <p className="mb-4">
                Our <a href="https://www.chat-mentor.com/" className="text-blue-500 hover:underline">citation machine</a> is kept up-to-date about various rules and guidelines for different citation styles. So whether you need to find relevant sources for your content or cite sources in a specific style, our citation tool can make it faster and more accurate. Try out our <a href="https://www.chat-mentor.com/" className="text-blue-500 hover:underline">AI essay writer</a> today!
            </p>


            {/*--> content */}

          </div>

          {/* Tags, Social share &  previous/next post*/}
          <div className="bg-[#F8F6F5] rounded-[10px] px-[30px] py-[25px]">
            <div className="sm:flex justify-between items-center space-y-[15px] sm:space-y-[0]">
              <div className="flex items-center space-x-[10px]">
                <div className="text-[20px]">
                  <i className="ri-price-tag-3-line"></i>
                </div>
                <ul className="list-none space-x-[15px]">
                  {tags.map((tag, index) => (
                    <li key={index} className="inline-block">
                      <Link
                        href={`/tags/${tag}`}
                        className="font-semibold text-13px text-black hover:text-primary-color"
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {socialLinksData && (
                <div className="inline-flex mt-15 sm:mt-0 sm:flex justify-center items-center">
                  <p className="text-15px mr-[10px]">Share</p>

                  <ul className="list-none space-x-[5px] md:space-x-[9px]">
                  {socialLinksData &&
                    socialLinksData.map((value, i) => (
                    <li className="inline-block" key={i}>
                      <a
                        href={value.link}
                        target="_blank"
                        className="bg-[#384179] w-[30px] h-[30px] leading-[30px] text-center rounded-full text-[14px] text-[#BFC3E1] inline-block transition duration-500 ease-in-out hover:bg-primary-color hover:text-white"
                      >
                        <i className={value.icon}></i>
                      </a>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsCitationStylesContent;

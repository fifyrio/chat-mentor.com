"use client";

import React from "react";
import Link from "next/link"; 
import Image from "next/image";

import BlogPost1 from "/public/images/blog/Academic-Writing.png"; 


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

const BlogDetails2: React.FC<BlogProps> = ({title, date, author, tags}) => {
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
            
            {/* 新内容开始 */}          
            <p className="mb-4">
              In our previous blog post, we explored how artificial intelligence (AI) can assist and supplement academic writing. While AI can be an extremely beneficial tool, not all forms of its usage will necessarily have positive outcomes without potential repercussions or penalties for academic integrity issues or penalties being issued by universities. Read on to discover what to avoid when employing this tool for maximum academic integrity and to reduce any potential penalties that might occur from its misuse.
            </p>

            <h2 className="text-xl font-semibold mb-2">1. Avoid Copying AI-Generated Text</h2>
            <p className="mb-4">
              AI can produce whole paragraphs or even an essay for you on demand, which might seem like an easy solution - however copying its output could get you in serious trouble with professors as AI has its own distinctive writing style that often appears sophisticated to professors detecting its use and penalising you accordingly.
            </p>

            <h2 className="text-xl font-semibold mb-2">2. Steer Clear of AI-Generated Bullet Point Lists</h2>
            <p className="mb-4">
              AI can generate bullet point lists in response to your queries that can assist in writing an essay; however, it&apos;s best not to include these directly as they could signal use of artificial intelligence - instead essays should always be written using your own words and analytical abilities in paragraph form.
            </p>

            <h2 className="text-xl font-semibold mb-2">3. Avoid AI-Generated Text Without Enhancement</h2>
            <p className="mb-4">
              Even if you choose to utilize AI-generated text responsibly, such as via paraphrasing rather than direct copying, there are still important things to keep in mind. As AI produces overly general and shallow content that needs improvement before using it as part of an argument; to truly show its applicability you should add your own insights and analysis on top of what was generated automatically by AI.
            </p>

            <h2 className="text-xl font-semibold mb-2">4. Avoid AI&apos;s American English</h2>
            <p className="mb-4">
              AI-generated text is typically in American English; therefore if your essay requires British English writing style then direct copying could cause suspicion among your professors that you have used artificial intelligence (AI). If this has always been your way of writing then suddenly switching to American English may create further suspicion in their minds that someone has used an artificial intelligence source like AI for your essay writing purposes.
            </p>

            <h2 className="text-xl font-semibold mb-2">5. Avoid AI&apos;s Short Paragraphs</h2>
            <p className="mb-4">
              Aside from bullet point lists, superficial content and American English, another hallmark of AI-generated text is short paragraphs. Professors might detect AI use when reviewing your essay; therefore it would be prudent not to include too many short paragraphs when utilizing artificial intelligence to generate content for your essay in order to avoid suspicion from professors.
            </p>

            <h2 className="text-xl font-semibold mb-2">Key Takeaways from this blog</h2>
            <p className="mb-4">
              This blog underscores that not all AI use is beneficial or legitimate. If you use AI-generated text as your essay source material, expect to produce essays featuring bullet point lists with little depth or specificity, written in American rather than British English, with multiple short paragraphs structured accordingly; all clear signs of AI use that could result in penalties being levied against it.
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

export default BlogDetails2;

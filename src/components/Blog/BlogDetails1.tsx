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

const BlogDetails1: React.FC<BlogProps> = ({title, date, author, tags}) => {
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
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="mb-4">
              Recent technological development has propelled Artificial Intelligence (AI), across sectors like health and finance. One area in particular that has experienced tremendous growth is natural language processing | NLP which allows the AI to recognize and synthesize human language. This has raised concerns as to whether this type of AI will become good enough to write application essays which require creative expression while providing cogent arguments - will AI become advanced enough?
            </p>

            <h2 className="text-xl font-semibold mb-2">AI Writing Today</h2>
            <p className="mb-4">
              Thanks to advances in machine learning and natural language processing (NLP), artificial intelligence writing tools have come a long way. Recently released models like OpenAI&apos;s GPT-3 can produce contextually accurate texts based on input stimuli, creating articles, developing content ideas and even mimicking human interaction.
            </p>

            <p className="mb-4">
              Learn About What Makes For the best learning experiences by clicking <a href="#" className="text-blue-500 hover:underline">here</a>.
            </p>

            <h2 className="text-xl font-semibold mb-2">Difficulties Related to Application Essay Writing</h2>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Customization</strong>: Personal statements should cover life experiences, goals and qualities unique to each applicant in order to accurately reflect his or her personality during admissions evaluation. AI models do not possess personal experiences nor the capacity for real self expression.</li>
              <li><strong>Creativity and Originality</strong>: Writing an exceptional application essay requires creativity and originality, something artificial intelligence (AI) often falls short in accomplishing. AI may succeed at producing unique texts but may struggle when it comes to crafting meaningful and personalized everyday content.</li>
              <li><strong>Coherent Arguing</strong>: Application essays cannot be unfocused and lack coherence; they must contain some kind of thesis and support it convincingly.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">AI as a Writing Assistant</h2>
            <p className="mb-4">AI can play an instrumental role in helping with various aspects of essay writing:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Idea Generation</strong>: AI can assist in the generation of unique ideas for essays as well as themes.</li>
              <li><strong>Drafting</strong>: AI technology can generate drafts of their work based on input provided by users.</li>
              <li><strong>Editor and Proofreading Tools</strong>: Grammerly and Hemingway Editor are both powerful editing and proofreading tools.</li>
              <li><strong>Structure and Organization</strong>: AI can assist the applicant by organizing his or her ideas into an essay&apos;s structure in an efficient manner.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Ethical Considerations</h2>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Authenticity</strong>: One of the primary risks posed by AI essays is reliability.</li>
              <li><strong>Fairness</strong>: Applications that utilize AI can give applicants with easy access to advanced technology an unfair edge.</li>
              <li><strong>Originality</strong>: When employing AI to produce content, care must always be taken to ensure its uniqueness.</li>
              <li><strong>Dependence</strong>: Without practicing proper writing techniques, misuse and abuse of various A.I tools could reduce one&apos;s writing skills significantly.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Artificial Intelligence in Essay Writing</h2>
            <p className="mb-4">Future improvements could increase the complexity of AI to produce texts which appear unique and coherent, and develop more advanced strategies to capture subjects&apos; views and feelings.</p>

            <p className="mb-4">Here are some potential developments:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Future Enhancement of Customization</strong>: Looking forward, input data will be tailored specifically to each person.</li>
              <li><strong>Increased Creativity</strong>: AI could learn to develop more creative or personalized content.</li>
              <li><strong>Contextual Understanding</strong>: AI develops a deeper understanding of context to enhance essay quality.</li>
              <li><strong>Ethical Frameworks</strong>: With AI technology continuing to advance, ethical codes of conduct will become even more vital.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
            <p className="mb-4">
              Natural Language Processing AI has made great advances, but writing the best application essays still requires an individual, creative and logical process. AI can provide value at every step in the writing process: writing content itself to proofreading and structuring - however its use in essay writing raises some ethical issues such as fake news, cheating plagiarism reliance.
            </p>

            <p className="mb-4">
              As AI advances in the future, one may find themselves writing more effective application essays. Applicants should strive to integrate AI into their essays despite efforts they take to make it individualistic; AI should also help augment business by helping applicants improve their writing while maintaining individuality in essays.
            </p>

            <p className="mb-4">
              At least, I hope that this article provides a clear and informative view of AI&apos;s potential to write excellent application essays! If any further inquiries or clarification is necessary, don&apos;t hesitate to ask.
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

export default BlogDetails1;

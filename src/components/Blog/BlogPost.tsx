"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";

export const BlogData = [
  {
    id: "1",
    image: "/images/blog/Academic-Writing.png", // Recommended image size 1270x900
    category: "Academic Writing",
    title: "The Importance of Citing Sources in Academic Writing",
    previewLink: "/blog/citation-styles",
    author: "Caleb S.",
    date: "15 Nov, 2024",
    aosDelay: "100",
    tags: ["Citation Practices", "Plagiarism Prevention"]
  },
  {
    id: "2",
    image: "/images/blog/Academic-Writing.png",
    category: "Academic Writing",
    title: "Will AI Become Advanced Enough to Write Good Application Essays?",
    previewLink: "/blog/will-ai-become-advanced-enough-to-write-good-application-essays",
    author: "Caleb S.",
    date: "15 Dec, 2024",
    aosDelay: "100",
    tags: ["AI", "Application Essays"]
  },
  {
    id: "3",
    image: "/images/blog/Academic-Writing.png",
    category: "Academic Writing",
    title: "Is It Ok to Use AI to Write Essays?",
    previewLink: "/blog/is-it-ok-to-use-ai-to-write-essays",
    author: "Caleb S.",
    date: "25 Dec, 2024",
    aosDelay: "100",
    tags: ["AI", "Application Essays"]
  }
];


const BlogPost: React.FC = () => {
  return (
    <>
      <div id="blog" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          {BlogData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {BlogData &&
                BlogData.map((value, i) => (
                  <div 
                    className="bg-[#F9F3EF] rounded-[20px] group"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <Link href={value.previewLink}>
                      <Image
                        src={value.image}
                        alt="blog"
                        className="rounded-t-[20px]"
                        width={1270}
                        height={900}
                      />
                    </Link>

                    <div className="bg-[#F9F3EF] rounded-[20px] py-[40px] px-[30px] relative mt-[-16px] transition duration-500 ease-in-out group-hover:bg-[#F7F1FF]">
                      <p className="text-primary-color uppercase text-[15px] mb-[10px]">
                        {value.category}
                      </p>

                      <h3 className="text-[20px] xl:text-[22px] leading-[32px] mb-[15px]">
                        <Link
                          href={value.previewLink}
                          className="transition duration-500 ease-in-out hover:text-primary-color"
                        >
                          {value.title}
                        </Link>
                      </h3>

                      <div className="flex items-center space-x-[15px] md:space-x-[30px]">
                        <div className="flex items-center space-x-[8px]">
                          <i className="flaticon-user-1"></i>
                          <p>{value.author}</p>
                        </div>

                        <div className="flex items-center space-x-[8px]">
                          <i className="flaticon-calendar"></i>
                          <p>{value.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default BlogPost;

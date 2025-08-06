"use client";

import Link from "next/link"; 
import CommentForm from "./CommentForm"; 
import Image from "next/image";

import BlogPost1 from "/public/images/blog/blog-post1.jpg"; 
import BlogPost2 from "/public/images/blog/blog-post4.jpg"; 
import BlogPost3 from "/public/images/blog/blog-post5.jpg"; 

import userImg1 from "/public/images/users/user4.jpg"; 
import userImg2 from "/public/images/users/user5.jpg"; 


// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "flaticon-facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: "2",
    icon: "flaticon-twitter",
    link: "https://www.twitter.com/",
  },
  {
    id: "3",
    icon: "flaticon-linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    id: "4",
    icon: "flaticon-instagram",
    link: "https://www.instagram.com/",
  },
];

const BlogDetailsContent = () => {
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

          <div className="space-y-[15px]">
            <div>
              <Image src={BlogPost1} alt="BlogPost" className="rounded-[20px] mb-[30px]" />

              <div className="flex items-center space-x-[15px] md:space-x-[30px] mb-[10px]">
                <div className="flex items-center space-x-[8px]">
                  <i className="flaticon-user-1"></i>
                  <p>Admin</p>
                </div>

                <div className="flex items-center space-x-[8px]">
                  <i className="flaticon-calendar"></i>
                  <p>20 May, 2023</p>
                </div>
              </div>
 
              <h1 className="font-semibold text-black text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-[32px] md:leading-[40px] lg:leading-[48px]">
                15 Time Management Tips that will Change your Life
              </h1>
            </div>

            <p>Welcome to the world of Paid Search Ads! If you are new to digital advertising and wondering how to effectively harness the power of search engines to drive targeted traffic and reach potential customers, you are in the right place. In this beginner guide, we will take you on a journey through the ins and outs of paid search ads, unraveling the complexities and providing you with essential tips to kickstart your successful advertising campaigns.</p>

            <p>In this chapter, we will lay the groundwork by explaining what paid search ads are and how they function. You will gain insights into popular advertising platforms like Google Ads and Bing Ads, and we will explore the numerous benefits these ads offer</p>

            <div className="flex space-x-[25px] py-[15px]">
              <div>
                <Image src={BlogPost2} alt="BlogPost" className="rounded-[20px]" />
              </div>
              <div>
                <Image src={BlogPost3} alt="BlogPost" className="rounded-[20px]" />
              </div>
            </div>
          
            <p>Unravel the components that make up a successful search ad in this chapter. From captivating headlines to compelling descriptions and strategically placed URLs, we will delve into the art of crafting ad copy that engages and resonates with your target audience. With a focus on relevant keywords and match types, you will learn how to optimize your ads for maximum impact and relevancy.</p>

            <p>Ready to create your first paid search ad campaign? This chapter will guide you through the process step-by-step. You will learn how to define your advertising goals, structure campaigns and ad groups effectively, and set appropriate budgets and bidding strategies. Armed with this knowledge, you will be ready to launch your campaign with confidence.</p>
          </div>

          {/* Tags, Social share &  previous/next post*/}
          <div className="bg-[#F8F6F5] rounded-[10px] px-[30px] py-[25px]">
            <div className="sm:flex justify-between items-center space-y-[15px] sm:space-y-[0]">
              <div className="flex items-center space-x-[10px]">
                <div className="text-[20px]">
                  <i className="ri-price-tag-3-line"></i>
                </div>
                <ul className="list-none space-x-[15px]">
                  <li className="inline-block">
                    <Link
                      href="#"
                      className="font-semibold text-13px text-black hover:text-primary-color"
                    >
                      Paid Advert
                    </Link>
                  </li> 
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

          {/* Comments List */}
          <div className="mb-[30px] md:mb-[40px] lg:mb-[70px]">
            <h2 className="text-black font-bold text-[20px] md:text-[22px] lg:text-[25px] mb-[20px] md:mb-[30px]">
              02 Comments
            </h2>
            <ul className="space-y-[20px] md:space-y-[30px]">
              <li className="relative md:pl-[125px]">
                <Image
                  src={userImg1}
                  className="mb-[20px] md:mb-0 md:absolute md:left-0 w-[100px] h-[100px] md:top-0 rounded-full"
                  alt="user"
                />
                <h4 className="text-black font-bold text-[17px] mb-[10px]">
                  Jonathon Ronan
                </h4>
                <p className="text-[14px] lg:text-[16px] mb-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Viverra elementum tellus odio at enim arcu
                  eget tristique sed. Tellus tellus ac orci id est
                  faucibus mattis ultrices gravida.
                </p>
                <Link
                  href="#"
                  className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
                >
                  Reply
                </Link>

                <ul className='mt-[20px] md:mt-[30px] space-y-[20px] md:space-y-[30px]'>
                  <li className="relative ml-[20px] md:ml-0 md:pl-[125px]">
                    <Image
                      src={userImg2}
                      className="mb-[20px] md:mb-0 md:absolute md:left-0 w-[100px] h-[100px] md:top-0 rounded-full"
                      alt="user"
                    />
                    <h4 className="text-black font-bold text-[14px] md:text-[15px] lg:text-[17px] mb-[10px]">
                      James Andy
                    </h4>
                    <p className="text-[14px] lg:text-[16px] mb-[15px]">
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Viverra elementum tellus
                      odio at enim arcu eget tristique sed. Tellus
                      tellus ac orci id est faucibus mattis
                      ultrices gravida.
                    </p>
                    <Link
                      href="#"
                      className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
                    >
                      Reply
                    </Link>
                  </li> 
                </ul>
              </li>

              <li className="relative md:pl-[125px]">
                <Image
                  src={userImg1}
                  className="mb-[20px] md:mb-0 md:absolute md:left-0 w-[100px] h-[100px] md:top-0 rounded-full"
                  alt="user"
                />
                <h4 className="text-black font-bold text-[14px] md:text-[15px] lg:text-[17px] mb-[10px]">
                  Angela Carter
                </h4>
                <p className="text-[14px] lg:text-[16px] mb-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Viverra elementum tellus odio at enim arcu
                  eget tristique sed. Tellus tellus ac orci id est
                  faucibus mattis ultrices gravida.
                </p>
                <Link
                  href="#"
                  className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
                >
                  Reply
                </Link>
              </li>
            </ul>
          </div>

          {/* CommentForm */}
          <CommentForm />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;

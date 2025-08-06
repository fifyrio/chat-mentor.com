"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroApp from "/public/images/online-banking-app/hero-app.png";
import bannerVector from "/public/images/online-banking-app/banner-vector.png";
import qrcodeImage from "/public/images/qrcode_appsflyer.png";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div
        id="home"
        className="relative overflow-hidden bg-white pt-[50px] pb-[50px] md:pb-[80px] lg:pb-[80px] xl:pb-[120px]"
      >
        <div
          id="home"
          className="container relative z-[1]"
        >
          <div className="grid gap-[30px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="space-y-[30px] md:space-y-[40px] sm:max-w-[570px] mx-auto xl:mx-0 text-center lg:text-start relative">
              <div>
                <div 
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mb-4 aos-init aos-animate" 
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <a href="https://www.producthunt.com/posts/ai-chatmentor?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;chatmentor" target="_blank">
                    <img className="mx-auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431255&theme=light" alt="AI&#0032;ChatMentor - ChatGPT&#0044;&#0032;AI&#0032;Writing&#0044;&#0032;AI&#0032;Email&#0032;reply | Product Hunt" width="250" height="54" />
                    </a>
                </div>
                <h1
                  className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[55px] leading-[40px] sm:leading-[46px] md:leading-[50px] xl:leading-[50px] 2xl:leading-[64px] mb-[20px] md:mb-[25px] lg:mb-[20px] xl:mb-[30px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Elevate Your Writing to Art with AI ChatMentor
                </h1>

                <p
                  className="text-[18px]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Transforming everyday experiences and enriching Christmas concepts through the innovative use of AI Chat mentor, using OpenAI ChatGPT API and the advanced GPT-4 model.
                </p>
              </div>

              <div              
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="flex items-center">
                  <Image src={qrcodeImage} alt="qrcode Banner" className="mx-auto h-40 w-40 my-8 " />                
                  <a
                    href="https://chatmentor.onelink.me/pWJk/sbvf0d5v"
                    target="_blank"
                    className="inline-block"
                  >
                    <div className="flex items-center space-x-[10px] bg-[#1ABC9C] py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-[#9870d1]">
                      <i className="flaticon-apple text-white text-[28px]"></i>
                      <div>
                        <p className="text-white text-[12px] leading-none mb-[6px]">
                          available on
                        </p>
                        <h4 className="text-white text-[15px] font-medium leading-none">
                          Apple Store
                        </h4>
                      </div>                      
                    </div>                    
                  </a>  
                </div>                 
              </div>
            </div>

            <div
              className="text-center xl:text-end"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image src={heroApp} alt="Hero Banner" className="inline-block" />
            </div>
          </div>
        </div>

        <Image
          src={bannerVector}
          alt="shape"
          className="absolute bottom-0 left-0 bg-[#fff] w-full"
        />
      </div>
    </>
  );
};

export default HeroBanner;

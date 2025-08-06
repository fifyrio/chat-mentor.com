"use client";

import React from "react";
import Link from "next/link";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-edit",
    title: "Your Email Ally for Rapid Responses!",
    shortText:
      "Revolutionize your email experience with our app, featuring AI-powered templates for sending and replying to emails. Effortlessly compose professional and personalized messages in seconds, simplifying your communication and enhancing productivity.",
    aosDelay: "100",
  },
  {
    id: "2",
    icon: "flaticon-cloud-computing",
    title: "Endless Stories, One AI - GPT-4!",
    shortText:
      "Unleash your storytelling potential with our app, powered by AI to offer diverse story templates. From thrilling adventures to heartwarming tales, effortlessly craft stories of any genre with our intuitive and creative template selection.",
    aosDelay: "200",
  },
  {
    id: "3",
    icon: "flaticon-translation",
    title: "Say goodbye to robotic translations",
    shortText:
      "Experience seamless communication across borders with our app's AI-driven rapid translation feature. Effortlessly translate text and speech between multiple languages, breaking language barriers and connecting you globally in an instant.",
    aosDelay: "300",
  },
  
];

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div
        id="features"
        className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]"
      >
        <div className="container">
          <div
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              Key Features
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              AI ChatMentor: Simplify your daily life
            </h2>
          </div>

          {featuresData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="bg-[#F5F6F7] rounded-[15px] text-center p-[30px] md:p-[40px] group hover:bg-primary-color"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <div 
                      className="text-white w-[75px] h-[75px] mx-auto leading-[75px] rounded-full text-center text-[40px] mb-[25px] group-hover:bg-white"
                      style={{
                        background: 'linear-gradient(180deg, #1ABC9C 0%, #45E68F 100%)'
                      }}
                    >
                      <i className={value.icon}></i>
                    </div>
                    <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white">
                      {value.title}
                    </h3>
                    <p className="group-hover:text-white">{value.shortText}</p>
                  </div>
                ))}
            </div>
          )}

          <div
            className="text-center mt-[30px] md:mt-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;

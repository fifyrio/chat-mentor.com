"use client";

import React from "react";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-cloud-storage",
    title: "Image to Prompt",
    url: "/features/image-to-prompt",
    shortText:
      "Unleash the potential of image to prompt generators by discovering how to utilize AI to transform images into text prompts.",
  },
  {
    id: "2",
    icon: "flaticon-edit",
    title: "AI Story Generator",
    url: "/features/ai-story-generator",
    shortText:
      "Generate captivating stories with AI, tailored to your preferences and interests.",
  },
  {
    id: "3",
    icon: "flaticon-user",
    title: "AI Personality Generator",
    url: "/features/ai-personality-generator",
    shortText:
      "Generate captivating stories with AI, tailored to your preferences and interests.",
  },
  {
    id: "4",
    icon: "flaticon-edit",
    title: "AI Tweet Reply Generator",
    url: "/features/tweet-reply-generator",
    shortText:
      "Generate engaging tweet replies instantly with our free AI tool.",
  },
  {
    id: "5",
    icon: "flaticon-cloud-storage",
    title: "AI Image Caption Generator",
    url: "/features/caption-generator",
    shortText:
      "Generate captivating captions for your images and social media posts with AI.",
  },
];

const FeaturesContent: React.FC = () => {
  return (
    <>
      <div id="features" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              Features
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              ChatMentor Free AI Features              
            </h2>
          </div>

          {featuresData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <a
                    href={value.url}
                    className="bg-[#F9F3EF] rounded-[15px] p-[30px] md:p-[40px] group hover:bg-primary-color block"
                    key={i}
                  >
                    <div className="bg-[#D4EDFF] text-primary-color w-[70px] h-[70px] leading-[70px] rounded-full text-center text-[40px] mb-[25px] group-hover:bg-white">
                      <i className={value.icon}></i>
                    </div>
                    <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white">
                      {value.title}
                    </h3>
                    <p className="group-hover:text-white">{value.shortText}</p>
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturesContent;

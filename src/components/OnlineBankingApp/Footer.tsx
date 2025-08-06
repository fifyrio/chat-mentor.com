"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/images/logo_white_small.svg";
import ShareLinkComponent from './ShareLinkComponent';


// navLinkData
const navLinkData = [  
  {
    id: "2",
    text: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: "3",
    text: "FAQ’s",
    link: "/faq",
  },
  {
    id: "4",
    text: "Terms of Use",
    link: "/terms-of-use/",
  },
  {
    id: "5",
    text: "Partnership",
    link: "https://chatmentortech.postaffiliatepro.com/affiliates",
  }
];

// Social Links
const socialLinksData = [
  // {
  //   id: "1",
  //   icon: "flaticon-facebook",
  //   link: "https://www.facebook.com/",
  // },
  {
    id: "2",
    icon: "flaticon-twitter",
    link: "https://x.com/KiwiCoderWu",
  },
  {
    id: "3",
    icon: "flaticon-reddit-logo",
    link: "https://www.reddit.com/r/AIChatMentor/",
  },
  // {
  //   id: "4",
  //   icon: "flaticon-instagram",
  //   link: "https://www.instagram.com/",
  // },
  {
    id: "5",
    icon: "flaticon-support",
    link: "https://discord.gg/Ub86P58T",
  },
  
];

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#181a20] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="grid gap-[20px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="text-center lg:text-start">
              <Link href="/">
                <Image src={logo} alt="logo" className="inline-block" />
              </Link>
            </div>

            <div className="lg:col-span-2 text-center lg:text-end">
              {navLinkData && (
                <ul className="space-y-[10px] space-x-[30px] md:space-x-[50px] xl:space-x-[80px] 2xl:space-x-[100px]">
                  {navLinkData &&
                    navLinkData.map((value, i) => (
                      <li
                        className="inline-block font-semibold text-[#BFC3E1] hover:text-primary-color"
                        key={i}
                      >
                        <Link href={value.link}>{value.text}</Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>          

          <hr className="border-[#384179] my-[30px] md:my-[50px]" />

          <div className="grid gap-[15px] items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="text-center md:text-start">
              <p className="text-[#BFC3E1]">
              Copyright © <span className="text-white">2025</span>. All Rights Reserved
                by{" ChatMentor"}                
              </p>
            </div>

            <div className="text-center md:text-end">
              {socialLinksData && (
                <ul className="space-x-[10px]">
                  {socialLinksData &&
                    socialLinksData.map((value, i) => (
                      <li className="inline-block" key={i}>
                        <a
                          href={value.link}
                          target="_blank"
                          className="
                          bg-[#384179]
                            w-[30px]
                            h-[30px]
                            leading-[30px]
                            text-center
                            rounded-full
                            text-[14px]
                            text-[#BFC3E1]
                            inline-block
                            transition duration-500 ease-in-out
                            hover:bg-primary-color
                            hover:text-white
                          "
                        >
                          <i className={value.icon}></i>
                        </a>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
          <ShareLinkComponent />
        </div>
      </footer>
    </>
  );
};

export default Footer;

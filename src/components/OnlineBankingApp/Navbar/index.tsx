"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "/public/images/logo_white_small.svg";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  // Sticky Navbar with glassmorphism effect
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("isSticky");
        // Add enhanced glassmorphism effect when sticky
        elementId?.classList.remove("bg-white/80", "shadow-sm");
        elementId?.classList.add("bg-white/70", "backdrop-blur-xl", "shadow-lg", "border-b-2", "border-primary-color/10");
      } else {
        elementId?.classList.remove("isSticky");
        // Return to original style
        elementId?.classList.remove("bg-white/70", "backdrop-blur-xl", "shadow-lg", "border-b-2", "border-primary-color/10");
        elementId?.classList.add("bg-white/80", "shadow-sm");
      }
    };
    
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar-area bg-white/80 backdrop-blur-md border-b border-gray-100/50 relative z-[999] py-[25px] lg:py-[20px] xl:py-[25px] transition-all duration-300 shadow-sm"
      >
        <div className="container mx-auto max-w-[1760px] xl:px-[30px]">
          <nav
            className={`navbar relative flex flex-wrap ${
              isActive ? "active" : ""
            }`}
          >
            <div className="flex items-center space-x-[20px] md:space-x-[30px] lg:space-x-[40px]">
              <Link href="/" className="flex items-center group">
                <Image 
                  src={logo} 
                  className="inline transition-transform duration-300 group-hover:scale-110" 
                  alt="logo" 
                />
                <span className="hidden md:inline-block ml-3 text-primary-color text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary-color to-teal-600 bg-clip-text text-transparent">
                  AI ChatMentor
                </span>
              </Link>
              
              {/* Navigation items next to logo */}
              <div className="hidden md:flex items-center space-x-[20px] lg:space-x-[25px] xl:space-x-[35px]">
                <div className="relative group">
                  <Link
                    href="/features"
                    className="text-[16px] md:text-[16px] lg:text-[18px] font-semibold transition-all duration-300 hover:text-primary-color flex items-center py-3 px-4 rounded-lg hover:bg-gray-50/80 backdrop-blur-sm"
                  >
                    Features <i className="ri-arrow-down-s-line ml-1 transition-transform duration-300 group-hover:rotate-180"></i>
                  </Link>
                  
                  {/* Invisible bridge to connect main button with dropdown */}
                  <div className="absolute left-0 top-full w-full h-[15px] invisible group-hover:visible"></div>
                  
                  <ul className="dropdown-menu absolute left-0 top-[calc(100%+15px)] w-[280px] bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl py-3 border border-gray-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0"
                      style={{
                        animation: 'fadeInUp 0.3s ease-out'
                      }}>
                    <li>
                      <Link
                        href="/features/image-to-prompt"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        Image to Prompt
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/image-description-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        Image Description Generator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/ai-story-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        AI Story Generator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/ai-personality-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        AI Personality Generator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/tweet-reply-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        AI Tweet Reply Generator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/caption-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        AI Image Caption Generator
                      </Link>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/blog/"
                  className={`text-[16px] md:text-[16px] lg:text-[18px] font-semibold transition-all duration-300 hover:text-primary-color py-3 px-4 rounded-lg hover:bg-gray-50/80 backdrop-blur-sm ${
                    currentRoute === "/blog/" ? "text-primary-color bg-primary-color/5" : ""
                  }`}
                >
                  Blog
                </Link>
              </div>
              
              <Link
                href="https://apps.apple.com/us/app/ai-essay-writer-write-for-me/id6471333944"
                className="inline-block md:hidden ml-4 px-4 py-2 bg-primary-color text-white rounded-lg text-[16px] font-medium hover:bg-primary-color/90 transition-all border border-primary-color"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download App
              </Link>
            </div>            
            
            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto right-0 top-[2px] md:hidden"
              type="button"
              onClick={handleToggleSearchModal}
            >
              <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
                <i className="ri-menu-line"></i>
              </span>
            </button>

            <div className="navbar-collapse flex self-center grow basis-auto md:hidden">
              <ul className="navbar-nav self-center flex-col w-full md:flex md:space-x-[15px] lg:space-x-[25px] xl:space-x-[35px] 2xl:space-x-[50px]">
                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="/features"
                    className="text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-primary-color flex items-center"
                  >
                    Features <i className="ri-arrow-down-s-line ml-1"></i>
                  </Link>
                  
                  <ul className="dropdown-menu absolute right-0 lg:left-0 top-[calc(100%-30px)] w-[250px] bg-gray-50 shadow-lg rounded-lg py-2 hidden group-hover:block z-50">
                    <li>
                      <Link
                        href="/features/image-to-prompt"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        Image to Prompt
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/image-description-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        Image Description Generator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/ai-story-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        AI Story Generator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/ai-personality-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        AI Personality Generator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/tweet-reply-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        AI Tweet Reply Generator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features/caption-generator"
                        className="block px-5 py-3 text-[15px] text-gray-700 font-medium hover:bg-primary-color/5 hover:text-primary-color transition-all duration-200 rounded-xl mx-2 flex items-center group"
                      >
                        AI Image Caption Generator
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="/blog/"
                    className={`text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-primary-color ${
                      currentRoute === "/blog/" ? "text-primary-color" : ""
                    }`}
                  >
                    Blog
                  </Link>
                </li>

              </ul>

             
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

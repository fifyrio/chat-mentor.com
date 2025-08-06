import 'remixicon/fonts/remixicon.css'
import '../../public/css/navbar.css'
import '../../public/fonts/flaticon_mycollection.css'
import 'swiper/css/bundle';
// Globals Styles
import "./globals.css";

import AosAnimation from '@/components/Layout/AosAnimation';
import BackToTop from '@/components/Layout/BackToTop';
import TosterProvider from '@/providers/TosterProvider';
import DemosSidebar from '@/components/Layout/DemosSidebar';
import GoogleTagManager from '@/components/Google/googleTagManager';

import { Mukta } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://www.chat-mentor.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'      
    },
  },
  keywords: ['write essay'],
  title:
    "AI ChatMentor-Powered by ChatGPT API & GPT-4",
  description:
    "AI ChatMentor, leveraging the ChatGPT API and GPT-4 technology, offers a sophisticated AI chat application with enhanced features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  

  return (
    <html lang="en">      
      <body className={mukta.className}>
        <TosterProvider />

        {children}

        {/* AosAnimation */}
        <AosAnimation />

        {/* BackToTop */}
        <BackToTop />

        {/* DemosSidebar */}
        {/* <DemosSidebar /> */}
        <SpeedInsights />
        <Analytics />
        <GoogleTagManager/>
      </body>
    </html>
  );
}
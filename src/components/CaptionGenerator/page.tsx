'use client';

import { useState } from 'react';
import Navbar from '@/components/OnlineBankingApp/Navbar';
import Footer from '@/components/OnlineBankingApp/Footer';
import MainTool from './MainTool';
import HowToUse from './HowToUse';
import SocialPlatforms from './SocialPlatforms';
import FAQ from './FAQ';
import UseCases from './UseCases';

export default function CaptionGenerator() {
  const [generatedCaption, setGeneratedCaption] = useState<string>('');

  const handleCaptionGenerated = (caption: string) => {
    setGeneratedCaption(caption);
  };

  return (
    <>
      <Navbar />
      
      {/* 1. 主要工具界面 - AI图片说明生成功能 */}
      <MainTool onCaptionGenerated={handleCaptionGenerated} />

      {/* 2. 使用说明 - "How to Use" 三步指南 */}
      <HowToUse />

      {/* 3. 社交平台 - 针对不同平台的说明创建指导 */}
      <SocialPlatforms />

      {/* 5. 使用案例 - 展示实际应用场景和价值 */}
      <UseCases />

      {/* 4. FAQ部分 - 解答用户常见疑问 */}
      <FAQ />
      
      <Footer />
    </>
  );
}
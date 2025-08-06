'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function ImageDescriptionGenerator() {  
  // image file name
  const [imageFileName, setImageFileName] = useState<string | null>(null);
  // image base64 string
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [prompt, setPrompt] = useState<string | null>(null);
  // 添加新的 state 来跟踪上次点击时间
  const [lastClickTime, setLastClickTime] = useState<number>(0);

  // 改进后的转换函数
  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFileName(e.target.files[0].name);
      try {
        const base64Image = await convertImageToBase64(e.target.files[0]);
        setImageUrl(base64Image);
      } catch (error) {
        toast.error('Failed to process image');
      }
    }
  };

  // 添加检查点击频率的函数
  const checkClickRate = (): boolean => {
    const now = Date.now();
    const timeDiff = now - lastClickTime;
    const minInterval = 10000; // 10秒
    
    if (timeDiff < minInterval) {
      const waitTime = Math.ceil((minInterval - timeDiff) / 1000);
      toast.error(`Please wait ${waitTime} seconds before trying again`);
      return false;
    }
    return true;
  };


  const generateDescription = async () => {
    if (!checkClickRate()) return;
        if (imageUrl) {
        setLastClickTime(Date.now());
        setGenerating(true);
        let prompt = "Describe this image in detail, focusing on visual elements, style, and key features. Use <p> tags for paragraphs and <strong> tags for headings.";
        try {
            const response = await fetch('/api/ai/image-to-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl, prompt }),
            });
            
            if (!response.ok) {
            throw new Error('Failed to generate description');
            }
            
            const data = await response.json();              
            setPrompt(data.result);
        } catch (err) {
            toast.error('Generate description error');              
        } finally {
            setGenerating(false);
        }
        } else {
        toast.error('Please upload an image first');
        }
  }

  return (
    <div className="w-full max-w-md">
      <Toaster position="top-center" />
      <div className="bg-white p-4 mb-4 text-center cursor-pointer h-[480px] rounded">
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          style={{ display: 'none' }}
          id="file-upload"
        />
        <label htmlFor="file-upload" className="h-full flex items-center justify-center border-dashed border-2 border-gray-300">
        {imageFileName ? imageFileName : 'Click here or drag an image file to upload (PNG, JPEG, JPG)'}
        </label>
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full disabled:bg-gray-400"
        onClick={generateDescription}
        disabled={ generating}
      >
        {generating ? 'Generating...' : 'Generate Description'}
      </button>
      {prompt && <div className="bg-white p-4 rounded-md shadow-md w-full mt-4">
        <span className="font-bold text-gray-800">Image Prompt:</span>
        <div className="mt-2 whitespace-pre-wrap text-gray-700" dangerouslySetInnerHTML={{ __html: prompt }} />
      </div>}
     
    </div>
  );
} 
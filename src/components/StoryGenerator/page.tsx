'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
export default function StoryGenerator() {
  const [script, setScript] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastClickTime, setLastClickTime] = useState<number>(0);

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

  const handleGenerateClick = async () => {
    if (!checkClickRate()) {
      toast.error('Please wait 10 seconds before trying again');
      return;
    }

    setLastClickTime(Date.now());
    if (!script.trim()) {
      toast.error('Please enter a description');
      return;
    }
    try {
      setIsLoading(true);
      let prompt = "Generate a story based on the prompt: " + script + ". Please use only English letters, numbers, and basic punctuation marks (.,!?). Avoid using any special characters, symbols, or non-English characters.";
      const response = await fetch('/api/ai/content-writing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      if (!response.ok) {        
        toast.error('generate story failed');
        return;
      }

      const data = await response.json();
      setResult(data.content);
    } catch (error) {
      toast.error('generate story failed');      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:w-3/4 sm:w-full mx-auto mt-6 px-4 md:px-6 py-6">      
      <p className="text-center mb-6">
        Discover endless possibilities with our AI story generator. Create captivating narratives effortlessly. Unleash your creativity today!
      </p>

      <div className="w-full bg-white shadow-md rounded-lg p-6">
        <label className="block text-sm font-medium mb-2">Generate about:</label>
        <textarea
          className="w-full h-32 border border-gray-300 rounded-md p-2 mb-4"
          placeholder="(Optional) What should the story be about? Write some keywords, or an overview, or starter for the story. You can also optionally include characters, plot, writing style, world lore, genre, reminders, etc."
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />

        <label className="block text-sm font-medium mb-2">Result:</label>
        <div className="w-full overflow-x-auto whitespace-pre-wrap mt-2 bg-white p-4 rounded shadow-sm border border-gray-300">
          {result}
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full disabled:bg-gray-400 mt-10"
          onClick={handleGenerateClick}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate'}
        </button>
      </div>
    </div>
  );
}

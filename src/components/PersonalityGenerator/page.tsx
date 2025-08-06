'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
export default function PersonalityGenerator() {
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
      return;
    }

    setLastClickTime(Date.now());
    if (!script.trim()) {
      toast.error('Please enter a description');
      return;
    }
    try {
      setIsLoading(true);
      const prompt = `Create a detailed character profile based on this description: ${script}
        Use <p> tags for paragraphs and <strong> tags for headings.
        Include the following sections:
        
        <p><strong>Character Overview:</strong></p>
        - Basic information including name, age, and appearance
        
        <p><strong>Personality Traits and Temperament:</strong></p>
        - Core personality traits
        - Emotional tendencies
        - Social behavior patterns
        
        <p><strong>Motivations and Goals:</strong></p>
        - Primary driving forces
        - Short and long-term objectives
        
        <p><strong>Strengths and Weaknesses:</strong></p>
        - Notable abilities and positive traits
        - Areas of difficulty or challenge
        
        <p><strong>Background Story:</strong></p>
        - Key life events and experiences
        - Formative moments
        
        <p><strong>Notable Habits and Quirks:</strong></p>
        - Distinctive behaviors
        - Unique mannerisms
        
        <p><strong>Social Interactions:</strong></p>
        - Typical behavior with others
        - Communication style
        - Relationship patterns

        Please ensure the response maintains proper HTML formatting throughout.`;

      const response = await fetch('/api/ai/content-writing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      if (!response.ok) {        
        toast.error('generate personality failed');
        return;
      }

      const data = await response.json();
      console.log(data);
      setResult(data.content);
    } catch (error) {
      toast.error('generate personality failed');      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:w-3/4 sm:w-full mx-auto mt-6 px-4 md:px-6 py-6 ">      
      <p className="text-center mb-6">
        Discover endless possibilities with our AI personality generator. Create captivating personalities effortlessly. Unleash your creativity today!
      </p>

      <div className="w-full bg-white shadow-md rounded-lg p-6">
        <label className="block text-sm font-medium mb-2">Describe the character in a few words:</label>
        <textarea
          className="w-full h-32 border border-gray-300 rounded-md p-2 mb-4"
          placeholder="(Optional) Describe the character in a few words... (e.g., Name: Orion Frost, a reserved former soldier skilled in cryomancy, seeking atonement for his past.)"
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />

        <label className="block text-sm font-medium mb-2">Result:</label>
        <div 
          className="w-full overflow-x-auto whitespace-pre-wrap mt-2 bg-white p-4 rounded shadow-sm border border-gray-300"
          dangerouslySetInnerHTML={{ __html: result }}
        />
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

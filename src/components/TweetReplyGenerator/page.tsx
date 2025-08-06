'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
export default function TweetReplyGenerator() {

  const [lastClickTime, setLastClickTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tweet, setTweet] = useState<string>('');
  const [replyInstructions, setReplyInstructions] = useState<string>('');
  const [writingStyle, setWritingStyle] = useState<string>('Casual');
  const [replyLength, setReplyLength] = useState<string>('shorter');
  const [numberOfVariations, setNumberOfVariations] = useState<number>(3);
  const [useEmojis, setUseEmojis] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
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
    if (!tweet.trim()) {
      toast.error('Please enter a tweet');
      return;
    }
    try {
      setIsLoading(true);
      let prompt = "Generate a tweet reply based on the tweet: " + tweet + " with the writing style: " + writingStyle + " and the reply instructions: " + replyInstructions + " and the reply length: " + replyLength + " and the use of emojis: " + useEmojis + ". Please use only English letters, numbers, and basic punctuation marks (.,!?). Avoid using any special characters, symbols, or non-English characters.";
      const response = await fetch('/api/ai/content-writing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResult(data.content);
    } catch (error) {
      toast.error('generate tweet reply failed');
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      toast.success('Copied to clipboard');
    } catch (err) {
      toast.error('Copy failed');
    }
  };

  return (    
    <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-3/4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Writing style</label>
        <select onChange={(e) => setWritingStyle(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">
          <option>Casual</option>
          <option>Formal</option>
          <option>Humorous</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Reply instructions (optional)</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
          placeholder="What I want to say is..."
          value={replyInstructions}
          onChange={(e) => setReplyInstructions(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Reply length</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input type="radio" name="length" value="shorter" className="mr-1" checked={replyLength === 'shorter'} onChange={(e) => setReplyLength(e.target.value)} /> Shorter
          </label>
          <label>
            <input type="radio" name="length" value="longer" className="mr-1" checked={replyLength === 'longer'} onChange={(e) => setReplyLength(e.target.value)} /> Longer
          </label>
        </div>
      </div>

      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Number of variations</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input type="radio" name="variations" value="1" className="mr-1" checked={numberOfVariations === 1} onChange={(e) => setNumberOfVariations(parseInt(e.target.value))} /> 1
          </label>
          <label className="mr-4">
            <input type="radio" name="variations" value="3" className="mr-1" checked={numberOfVariations === 3} onChange={(e) => setNumberOfVariations(parseInt(e.target.value))} /> 3
          </label>
          <label>
            <input type="radio" name="variations" value="5" className="mr-1" checked={numberOfVariations === 5} onChange={(e) => setNumberOfVariations(parseInt(e.target.value))} /> 5
          </label>
        </div>
      </div> */}

      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" checked={useEmojis} onChange={(e) => setUseEmojis(e.target.checked)} /> Use emojis
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What&apos;s the tweet you&apos;re replying to?</label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
          placeholder="Add your tweet here..."
          rows={4}
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
      </div>

      <button
        onClick={handleGenerateClick}
        className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700">
        {isLoading ? 'Generating...' : 'Generate reply'}
      </button>

      {result && (
        <div className="mt-4 relative">
          <p className="text-gray-800 mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
            {result}
          </p>    
          <button
            onClick={handleCopy}
            className="absolute bottom-2 right-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md"
          >
            Copy
          </button>
        </div>
      )}
    </div>    
  );
}
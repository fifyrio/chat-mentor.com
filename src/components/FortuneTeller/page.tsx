'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function FortuneTeller() {  
  const [message, setMessage] = useState('');

  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        AI Fortune Teller
      </h1>
      
      <p className="text-white text-center mb-8">
        Need a quick answer to any question on your mind, just ask AI Fortune Teller. It will give you a short reply and help you find out your fortune.
      </p>

      <div className="relative mb-4">
        <select className="w-full p-3 bg-[#1a1b1e] text-white rounded-lg appearance-none cursor-pointer">
          <option>Standard</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative mb-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Chat with AI..."
          className="w-full h-32 p-4 bg-[#1a1b1e] text-white rounded-lg resize-none"
        />
        <div className="absolute right-3 bottom-3">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500">
              <span className="text-xs">$</span>
            </span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500">
              <span className="text-xs">😊</span>
            </span>
          </div>
        </div>
      </div>

      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2">
        <span>Go</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
        </svg>
      </button>

      <Toaster position="bottom-center" />
    </div>
  );
} 
'use client';

import { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';

interface MainToolProps {
  onCaptionGenerated: (caption: string) => void;
}

export default function MainTool({ onCaptionGenerated }: MainToolProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTone, setSelectedTone] = useState<string>('fun');
  const [caption, setCaption] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tones = [
    { id: 'fun', label: '🎉 Fun', emoji: '🎉' },
    { id: 'joke', label: '😂 Joke', emoji: '😂' },
    { id: 'funny', label: '😄 Funny', emoji: '😄' },
    { id: 'happy', label: '😊 Happy', emoji: '😊' },
    { id: 'serious', label: '😐 Serious', emoji: '😐' },
    { id: 'sad', label: '💔 Sad', emoji: '💔' },
    { id: 'angry', label: '😠 Angry', emoji: '😠' },
    { id: 'ecstatic', label: '🤩 Ecstatic', emoji: '🤩' },
    { id: 'curious', label: '🤔 Curious', emoji: '🤔' },
    { id: 'informative', label: '🌿 Informative', emoji: '🌿' },
    { id: 'cute', label: '🥰 Cute', emoji: '🥰' },
    { id: 'cool', label: '😎 Cool', emoji: '😎' },
    { id: 'controversial', label: '🔥 Controversial', emoji: '🔥' }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast.error('Image size should be less than 10MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setCaption(''); // Clear previous caption
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target?.result as string);
          setCaption('');
        };
        reader.readAsDataURL(file);
      } else {
        toast.error('Please drop a valid image file');
      }
    }
  };

  const generateCaption = async () => {
    if (!selectedImage) {
      toast.error('Please select an image first');
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch('/api/ai/caption-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: selectedImage,
          tone: selectedTone
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCaption(data.caption);
        onCaptionGenerated(data.caption);
        toast.success('Caption generated successfully!');
      } else {
        toast.error(data.error || 'Failed to generate caption');
      }
    } catch (error) {
      toast.error('An error occurred while generating caption');
      console.error('Error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyCaption = async () => {
    if (caption) {
      try {
        await navigator.clipboard.writeText(caption);
        toast.success('Caption copied to clipboard!');
      } catch (error) {
        toast.error('Failed to copy caption');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center p-4 pt-24">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            100% Free AI Image Caption Generator
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Generate creative captions for any image using our AI-powered tool. No login required.
            Perfect for Instagram, ALT text, and social media posts. Choose from multiple tones to
            craft the perfect caption.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Image Upload Area */}
          <div
            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6 transition-colors hover:border-blue-400"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedImage ? (
              <div className="space-y-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage}
                  alt="Selected image for caption generation"
                  className="max-h-64 mx-auto rounded-lg shadow-lg"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Change Image
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-gray-400 text-6xl">
                  🖼️
                </div>
                <div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Upload a file
                  </button>
                  <span className="text-gray-500"> or drag and drop</span>
                </div>
                <p className="text-gray-400 text-sm">PNG, JPG, GIF, WEBP</p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          {/* Tone Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Select a Vibe/Tone</h3>
            <div className="flex flex-wrap gap-2">
              {tones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTone === tone.id
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tone.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateCaption}
            disabled={!selectedImage || isGenerating}
            className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors mb-4"
          >
            {isGenerating ? 'Generating Caption...' : 'Generate Caption'}
          </button>

          {/* Generated Caption */}
          {caption && (
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-gray-800">Generated Caption:</h4>
                <button
                  onClick={copyCaption}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Copy
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed">{caption}</p>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Images are never saved
          </p>
        </div>
      </div>
    </div>
  );
} 
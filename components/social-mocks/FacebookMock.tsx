import React, { useState } from "react";
import { ThumbsUp, MessageCircle, Share2, Sun, Moon } from "lucide-react";

interface FacebookMockProps {
  content: string;
  image: File | null;
}

export const FacebookMock: React.FC<FacebookMockProps> = ({ content, image }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#18191A] text-[#E4E6EB]' : 'bg-white text-black'} rounded-lg shadow-md max-w-xl mx-auto relative`}>
      <button
        onClick={toggleTheme}
        className={`absolute top-2 right-2 ${isDarkMode ? 'text-[#E4E6EB]' : 'text-gray-600'}`}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className={`w-10 h-10 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full mr-3`}></div>
          <div>
            <p className="font-bold">Your Name</p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2 hours ago · 🌎</p>
          </div>
        </div>
        <p className="mb-3">{content}</p>
      </div>
      {image && (
        <div className="mb-3">
          <img 
            src={URL.createObjectURL(image)} 
            alt="Uploaded" 
            className="w-full object-cover"
          />
        </div>
      )}
      <div className={`flex justify-between px-4 py-2 ${isDarkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'}`}>
        <button className="flex items-center space-x-1">
          <ThumbsUp size={20} className={isDarkMode ? 'text-[#E4E6EB]' : 'text-gray-600'} />
          <span className="text-sm">Like</span>
        </button>
        <button className="flex items-center space-x-1">
          <MessageCircle size={20} className={isDarkMode ? 'text-[#E4E6EB]' : 'text-gray-600'} />
          <span className="text-sm">Comment</span>
        </button>
        <button className="flex items-center space-x-1">
          <Share2 size={20} className={isDarkMode ? 'text-[#E4E6EB]' : 'text-gray-600'} />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

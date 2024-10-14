import React, { useState } from "react";
import { ThumbsUp, MessageSquare, Repeat, Send, Sun, Moon } from "lucide-react";


interface LinkedInMockProps {
  content: string;
}

export const LinkedInMock: React.FC<LinkedInMockProps> = ({ content }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#1D2226] text-white' : 'bg-white text-black'} rounded-lg p-4 max-w-md mx-auto relative`}>
      <button
        onClick={toggleTheme}
        className={`absolute top-2 right-2 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <div className="flex items-center mb-3">
        <div className={`w-12 h-12 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full mr-3`}></div>
        <div>
          <p className="font-bold">Your Name</p>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Your Title • 1st</p>
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className={`flex justify-between ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <ThumbsUp size={18} />
        <MessageSquare size={18} />
        <Repeat size={18} />
        <Send size={18} />
      </div>
    </div>
  );
};

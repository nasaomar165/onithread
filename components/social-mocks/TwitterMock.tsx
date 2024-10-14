import React, { useState } from "react";
import { Twitter, Heart, MessageCircle, Repeat, Share, Sun, Moon } from "lucide-react";


interface TwitterMockProps {
  content: string[];
}

export const TwitterMock: React.FC<TwitterMockProps> = ({ content }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#15202B] text-white' : 'bg-white text-black'} rounded-lg p-4 max-w-md mx-auto relative`}>
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
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>@yourhandle</p>
        </div>
      </div>
      {content.map((tweet, index) => (
        <div key={index} className={`mb-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pb-4`}>
          <p>{tweet}</p>
          <div className={`flex justify-between mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <MessageCircle size={18} />
            <Repeat size={18} />
            <Heart size={18} />
            <Share size={18} />
          </div>
        </div>
      ))}
    </div>
  );
};

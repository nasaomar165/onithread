import React, { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, Sun, Moon } from "lucide-react";

interface InstagramMockProps {
  content: string;
  image: File | null;
}

export const InstagramMock: React.FC<InstagramMockProps> = ({ content, image }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} rounded-lg p-4 max-w-md mx-auto relative`}>
      <button
        onClick={toggleTheme}
        className={`absolute top-2 right-2 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <div className="flex items-center mb-3">
        <div className={`w-8 h-8 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full mr-3`}></div>
        <p className="font-bold">Your Name</p>
      </div>
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} aspect-square mb-3 overflow-hidden`}>
        {image ? (
          <img 
            src={URL.createObjectURL(image)} 
            alt="Uploaded" 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center justify-center h-full`}>
            No image uploaded
          </span>
        )}
      </div>
      <div className="flex justify-between mb-3">
        <div className="flex space-x-4">
          <Heart size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
          <MessageCircle size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
          <Send size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
        </div>
        <Bookmark size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
      </div>
      <p className="text-sm">{content}</p>
    </div>
  );
};

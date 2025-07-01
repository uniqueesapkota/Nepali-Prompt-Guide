import React from 'react';
import { Sparkles, Brain, MessageSquareText } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleGetStarted = () => {
    onNavigate('basics');
  };

  const handleViewExamples = () => {
    onNavigate('examples');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <MessageSquareText className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">प्रॉम्प्ट इन्जिनियरिङ</span>
            <span className="block text-3xl md:text-5xl text-blue-200 mt-2">
              Prompt Engineering Guide
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            ChatGPT र Gemini का लागि प्रभावकारी प्रॉम्प्ट लेख्न सिक्नुहोस्
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            Learn to write effective prompts for ChatGPT and Gemini with comprehensive guides, 
            practical examples, and expert tips tailored for Nepali users.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              सुरु गर्नुहोस् | Get Started
            </button>
            <button 
              onClick={handleViewExamples}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              उदाहरणहरू हेर्नुहोस् | View Examples
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-300/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/5 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Hero;
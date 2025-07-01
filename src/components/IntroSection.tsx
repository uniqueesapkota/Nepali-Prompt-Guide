import React from 'react';
import { MessageSquare, Target, Lightbulb, ArrowRight } from 'lucide-react';

const IntroSection: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'प्रॉम्प्ट के हो?',
      titleEn: 'What is a Prompt?',
      description: 'AI लाई दिइने निर्देशन वा प्रश्न जसले उसको उत्तरलाई निर्देशित गर्छ।',
      descriptionEn: 'Instructions or questions given to AI that guide its responses.'
    },
    {
      icon: Target,
      title: 'किन महत्वपूर्ण छ?',
      titleEn: 'Why Important?',
      description: 'राम्रो प्रॉम्प्टले सटीक र उपयोगी जवाफ प्राप्त गर्न मद्दत गर्छ।',
      descriptionEn: 'Good prompts help get accurate and useful responses from AI.'
    },
    {
      icon: Lightbulb,
      title: 'कसरी सुधार गर्ने?',
      titleEn: 'How to Improve?',
      description: 'स्पष्टता, सन्दर्भ र उदाहरण प्रयोग गरेर प्रॉम्प्ट सुधार गर्न सकिन्छ।',
      descriptionEn: 'Prompts can be improved using clarity, context, and examples.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            प्रॉम्प्ट इन्जिनियरिङको परिचय
          </h2>
          <p className="text-xl text-gray-600 mb-2">Introduction to Prompt Engineering</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg w-fit mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-blue-600 mb-4 font-medium">{feature.titleEn}</p>
              <p className="text-gray-700 mb-3">{feature.description}</p>
              <p className="text-sm text-gray-600 italic">{feature.descriptionEn}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                प्रॉम्प्ट इन्जिनियरिङ किन सिक्ने?
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Why Learn Prompt Engineering?
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">समय बचाउनुहोस्</p>
                    <p className="text-sm text-gray-600">Save time by getting accurate answers faster</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">बेहतर परिणाम पाउनुहोस्</p>
                    <p className="text-sm text-gray-600">Get better, more relevant results from AI</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">उत्पादकता बढाउनुहोस्</p>
                    <p className="text-sm text-gray-600">Increase productivity in work and studies</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">AI को पूर्ण क्षमता प्रयोग गर्नुहोस्</p>
                    <p className="text-sm text-gray-600">Utilize the full potential of AI tools</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Start Tips</h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="font-medium text-gray-900">Be Specific | स्पष्ट बन्नुहोस्</p>
                  <p className="text-sm text-gray-600 mt-1">Clear and detailed prompts yield better results</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-600">
                  <p className="font-medium text-gray-900">Provide Context | सन्दर्भ दिनुहोस्</p>
                  <p className="text-sm text-gray-600 mt-1">Give background information for better understanding</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="font-medium text-gray-900">Use Examples | उदाहरण प्रयोग गर्नुहोस्</p>
                  <p className="text-sm text-gray-600 mt-1">Show what you want with concrete examples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
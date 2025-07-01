import React from 'react';
import { CheckCircle, XCircle, Copy, AlertCircle } from 'lucide-react';

const BasicsSection: React.FC = () => {
  const promptStructure = [
    {
      element: 'Context',
      nepali: 'सन्दर्भ',
      description: 'Background information about the task',
      nepaliDesc: 'कार्यको बारेमा पृष्ठभूमि जानकारी',
      example: 'I am a student preparing for exams...'
    },
    {
      element: 'Task',
      nepali: 'कार्य',
      description: 'What you want the AI to do',
      nepaliDesc: 'तपाईं AI लाई के गराउन चाहनुहुन्छ',
      example: 'Create a study schedule...'
    },
    {
      element: 'Format',
      nepali: 'ढाँचा',
      description: 'How you want the output structured',
      nepaliDesc: 'तपाईं आउटपुट कसरी संरचित चाहनुहुन्छ',
      example: 'Present as a table with columns...'
    },
    {
      element: 'Constraints',
      nepali: 'सीमाहरू',
      description: 'Any limitations or requirements',
      nepaliDesc: 'कुनै सीमाहरू वा आवश्यकताहरू',
      example: 'Keep it under 500 words...'
    }
  ];

  const goodPrompts = [
    {
      promptNepali: "मलाई नेपालमा पर्यटन व्यवसाय सुरु गर्न मद्दत गर्नुहोस्। म काठमाडूमा छु र मसंग 5 लाख रुपैया बजेट छ। कृपया चरणबद्ध योजना दिनुहोस्।",
      promptEnglish: "Help me start a tourism business in Nepal. I am in Kathmandu and have a budget of 500,000 rupees. Please provide a step-by-step plan.",
      reason: "स्पष्ट सन्दर्भ, स्थान र बजेट उल्लेख गरिएको छ।",
      reasonEn: "Clear context, location and budget mentioned."
    },
    {
      promptNepali: "मलाई मेरो प्रोफेसरलाई असाइनमेन्ट एक्सटेन्सनको लागि औपचारिक इमेल लेख्न मद्दत गर्नुहोस्। असाइनमेन्ट भोलि ड्यू छ र मलाई बिरामीको कारणले 3 दिन थप चाहिन्छ। सम्मानजनक र व्यावसायिक टोन राख्नुहोस्।",
      promptEnglish: "Help me write a formal email to my professor requesting an assignment extension. The assignment is due tomorrow, and I need 3 more days due to illness. Keep the tone respectful and professional.",
      reason: "स्पष्ट भूमिका, विशिष्ट परिस्थिति र ढाँचा आवश्यकताहरू।",
      reasonEn: "Clear role, specific situation, and formatting requirements."
    }
  ];

  const badPrompts = [
    {
      promptNepali: "व्यवसाय सुरु गर्न मद्दत गर्नुहोस्।",
      promptEnglish: "Help me start a business.",
      reason: "धेरै अस्पष्ट - कुन प्रकारको व्यवसाय? कहाँ? बजेट कति?",
      reasonEn: "Too vague - what type of business? Where? What budget?",
      improvement: "स्पष्ट गर्नुहोस्: कुन प्रकारको व्यवसाय, कहाँ, बजेट कति, तपाईंको अनुभव के छ।",
      improvementEn: "Specify: what type of business, where, budget amount, your experience level."
    },
    {
      promptNepali: "इमेल लेख्नुहोस्।",
      promptEnglish: "Write an email.",
      reason: "उद्देश्य, प्राप्तकर्ता, वा टोनको बारेमा कुनै सन्दर्भ छैन।",
      reasonEn: "No context about purpose, recipient, or tone.",
      improvement: "निर्दिष्ट गर्नुहोस्: प्राप्तकर्ता को हो? उद्देश्य के हो? कस्तो टोन प्रयोग गर्ने? कुनै विशेष आवश्यकताहरू?",
      improvementEn: "Specify: Who is the recipient? What's the purpose? What tone should be used? Any specific requirements?"
    },
    {
      promptNepali: "मलाई खाना बनाउन सिकाउनुहोस्।",
      promptEnglish: "Teach me to cook.",
      reason: "कुन खाना? कति जनाको लागि? तपाईंको स्तर के छ?",
      reasonEn: "Which dish? For how many people? What's your skill level?",
      improvement: "उदाहरण: 'मलाई 4 जनाको लागि दाल भात बनाउन सिकाउनुहोस्। म शुरुवाती छु।'",
      improvementEn: "Example: 'Teach me to cook dal bhat for 4 people. I'm a beginner.'"
    },
    {
      promptNepali: "अध्ययन गर्न मद्दत गर्नुहोस्।",
      promptEnglish: "Help me study.",
      reason: "कुन विषय? कुन स्तर? कति समय? तपाईंको लक्ष्य के हो?",
      reasonEn: "Which subject? What level? How much time? What's your goal?",
      improvement: "उदाहरण: 'मेरो गणित परीक्षाको लागि 2 हप्ताको अध्ययन योजना बनाउन मद्दत गर्नुहोस्। म बीजगणितमा कमजोर छु र दैनिक 2 घण्टा समय छ।'",
      improvementEn: "Example: 'Help me create a 2-week study plan for my math exam. I'm weak in algebra and have 2 hours daily.'"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            आधारभूत सिद्धान्तहरू
          </h2>
          <p className="text-xl text-gray-600 mb-2">Basic Principles</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto"></div>
        </div>

        {/* Prompt Structure */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            प्रॉम्प्टको संरचना | Prompt Structure
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promptStructure.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{item.element}</h4>
                <p className="text-blue-600 font-medium mb-3">{item.nepali}</p>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <p className="text-sm text-gray-600 mb-4 italic">{item.nepaliDesc}</p>
                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-sm text-gray-800 italic">"{item.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Good vs Bad Examples */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Good Prompts */}
          <div className="bg-green-50 p-8 rounded-xl border border-green-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-green-800">राम्रो प्रॉम्प्टहरू</h3>
                <p className="text-green-600">Good Prompts</p>
              </div>
            </div>
            <div className="space-y-6">
              {goodPrompts.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-green-200">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-green-800">Example {index + 1}</h4>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => copyToClipboard(item.promptNepali)}
                        className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                        title="Copy Nepali prompt"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Nepali Prompt */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">नेपाली प्रॉम्प्ट:</p>
                    <div className="bg-green-50 p-4 rounded-lg mb-3 border-l-4 border-green-400">
                      <p className="text-gray-800">{item.promptNepali}</p>
                    </div>
                  </div>

                  {/* English Prompt */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">English Prompt:</p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-3 border-l-4 border-blue-400">
                      <p className="text-gray-800">{item.promptEnglish}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-green-700">{item.reason}</p>
                      <p className="text-xs text-green-600 italic mt-1">{item.reasonEn}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bad Prompts */}
          <div className="bg-red-50 p-8 rounded-xl border border-red-200">
            <div className="flex items-center mb-6">
              <XCircle className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-red-800">नराम्रो प्रॉम्प्टहरू</h3>
                <p className="text-red-600">Bad Prompts</p>
              </div>
            </div>
            <div className="space-y-6">
              {badPrompts.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-3">Example {index + 1}</h4>
                  
                  {/* Nepali Bad Prompt */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">नेपाली प्रॉम्प्ट:</p>
                    <div className="bg-red-50 p-4 rounded-lg mb-3 border-l-4 border-red-400">
                      <p className="text-gray-800">{item.promptNepali}</p>
                    </div>
                  </div>

                  {/* English Bad Prompt */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">English Prompt:</p>
                    <div className="bg-red-50 p-4 rounded-lg mb-3 border-l-4 border-red-400">
                      <p className="text-gray-800">{item.promptEnglish}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 mb-3">
                    <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-red-700"><strong>समस्या:</strong> {item.reason}</p>
                      <p className="text-xs text-red-600 italic mt-1"><strong>Problem:</strong> {item.reasonEn}</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800"><strong>सुधार:</strong> {item.improvement}</p>
                    <p className="text-xs text-blue-700 italic mt-1"><strong>Improvement:</strong> {item.improvementEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">मुख्य सिद्धान्तहरू | Key Principles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Be Specific</h4>
              <p className="text-blue-100">स्पष्ट र विस्तृत निर्देशन दिनुहोस्</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Provide Context</h4>
              <p className="text-blue-100">पृष्ठभूमि जानकारी दिनुहोस्</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Set Format</h4>
              <p className="text-blue-100">आउटपुट ढाँचा निर्धारण गर्नुहोस्</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicsSection;
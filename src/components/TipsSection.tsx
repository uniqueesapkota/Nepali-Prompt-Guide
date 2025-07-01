import React from 'react';
import { CheckCircle, XCircle, Lightbulb, AlertTriangle, Star, Target } from 'lucide-react';

const TipsSection: React.FC = () => {
  const dosAndDonts = [
    {
      category: 'स्पष्टता | Clarity',
      dos: [
        {
          text: 'Be specific about what you want',
          nepali: 'तपाईंले चाहेको कुरा स्पष्ट रूपमा भन्नुहोस्',
          example: '"मलाई नेपालमा घर किन्न सल्लाह दिनुहोस्" को सट्टा "काठमाडूमा 50 लाख बजेटमा 3 बेडरूमको घर किन्न सल्लाह दिनुहोस्"'
        },
        {
          text: 'Provide context and background',
          nepali: 'सन्दर्भ र पृष्ठभूमि जानकारी दिनुहोस्',
          example: 'आफ्नो अवस्था, उद्देश्य, र सीमाहरू उल्लेख गर्नुहोस्'
        }
      ],
      donts: [
        {
          text: 'Don\'t use vague language',
          nepali: 'अस्पष्ट भाषा प्रयोग नगर्नुहोस्',
          example: '"केही राम्रो सुझाव दिनुहोस्" जस्ता अस्पष्ट प्रश्न नगर्नुहोस्'
        },
        {
          text: 'Don\'t assume AI knows your situation',
          nepali: 'AI लाई तपाईंको अवस्था थाहा छ भनेर नमान्नुहोस्',
          example: 'पहिलेको कुराकानी सम्झना हुनेछ भनेर नभन्नुहोस्'
        }
      ]
    },
    {
      category: 'संरचना | Structure',
      dos: [
        {
          text: 'Use numbered lists for complex requests',
          nepali: 'जटिल अनुरोधहरूको लागि क्रमबद्ध सूची प्रयोग गर्नुहोस्',
          example: '1. पहिले यो गर्नुहोस् 2. त्यसपछि यो गर्नुहोस् 3. अन्तमा यो गर्नुहोस्'
        },
        {
          text: 'Specify desired output format',
          nepali: 'चाहिएको आउटपुट ढाँचा निर्दिष्ट गर्नुहोस्',
          example: '"तालिकाको रूपमा दिनुहोस्", "बुलेट पोइन्टमा दिनुहोस्"'
        }
      ],
      donts: [
        {
          text: 'Don\'t write wall of text',
          nepali: 'लामो अनुच्छेद नलेख्नुहोस्',
          example: 'धेरै जानकारी एकैपटक नदिएर खण्डमा बाँड्नुहोस्'
        },
        {
          text: 'Don\'t mix multiple unrelated requests',
          nepali: 'असम्बन्धित धेरै अनुरोधहरू एकसाथ नमिसाउनुहोस्',
          example: 'एकैपटक खाना र व्यापारको बारेमा नसोध्नुहोस्'
        }
      ]
    }
  ];

  const quickTips = [
    {
      icon: Target,
      title: 'लक्ष्य निर्धारण गर्नुहोस्',
      titleEn: 'Set Clear Goals',
      tip: 'प्रत्येक प्रॉम्प्ट लेख्नु अघि के चाहिन्छ भनेर स्पष्ट पार्नुहोस्',
      tipEn: 'Before writing each prompt, clarify what you need'
    },
    {
      icon: Lightbulb,
      title: 'उदाहरण प्रयोग गर्नुहोस्',
      titleEn: 'Use Examples',
      tip: 'चाहेको ढाँचा देखाउन केही उदाहरण दिनुहोस्',
      tipEn: 'Provide examples to show the desired format'
    },
    {
      icon: Star,
      title: 'सकारात्मक भाषा',
      titleEn: 'Positive Language',
      tip: 'के चाहिन्छ भन्नुहोस्, के नचाहिने भन्नुको सट्टा',
      tipEn: 'Say what you want, instead of what you don\'t want'
    },
    {
      icon: AlertTriangle,
      title: 'सीमाहरू निर्धारण गर्नुहोस्',
      titleEn: 'Set Boundaries',
      tip: 'शब्द सीमा, समय सीमा, र अन्य सीमाहरू स्पष्ट पार्नुहोस्',
      tipEn: 'Clarify word limits, time constraints, and other boundaries'
    }
  ];

  const commonMistakes = [
    {
      mistake: 'धेरै छोटो प्रॉम्प्ट',
      mistakeEn: 'Too Short Prompts',
      problem: '"मलाई मद्दत गर्नुहोस्" जस्ता अति छोटो प्रॉम्प्ट',
      solution: 'स्पष्ट रूपमा के चाहिन्छ भन्नुहोस् र सन्दर्भ दिनुहोस्'
    },
    {
      mistake: 'सन्दर्भ नदिनु',
      mistakeEn: 'No Context',
      problem: 'पृष्ठभूमि जानकारी नदिनु',
      solution: 'आफ्नो अवस्था, उद्देश्य र आवश्यकताहरू उल्लेख गर्नुहोस्'
    },
    {
      mistake: 'अनेकौं प्रश्न एकसाथ',
      mistakeEn: 'Multiple Questions',
      problem: 'एकैपटक धेरै फरक प्रश्नहरू सोध्नु',
      solution: 'एक पटकमा एउटै मुख्य विषयमा केन्द्रित रहनुहोस्'
    },
    {
      mistake: 'अस्पष्ट भाषा',
      mistakeEn: 'Vague Language',
      problem: '"केही राम्रो", "उत्तम" जस्ता अस्पष्ट शब्दहरू',
      solution: 'नम्बर, तथ्य र स्पष्ट मापदण्डहरू प्रयोग गर्नुहोस्'
    }
  ];

  const advancedTips = [
    {
      title: 'प्रॉम्प्ट चेनिङ',
      titleEn: 'Prompt Chaining',
      description: 'एउटा प्रॉम्प्टको जवाफलाई अर्को प्रॉम्प्टमा प्रयोग गर्नुहोस्',
      descriptionEn: 'Use the response from one prompt as input for another',
      example: 'पहिले योजना बनाउने प्रॉम्प्ट, त्यसपछि त्यो योजनालाई विस्तार गर्ने प्रॉम्प्ट'
    },
    {
      title: 'टेम्प्लेट सिर्जना',
      titleEn: 'Template Creation',
      description: 'बारम्बार प्रयोग हुने प्रॉम्प्टहरूको टेम्प्लेट बनाउनुहोस्',
      descriptionEn: 'Create templates for frequently used prompts',
      example: 'व्यापारिक योजना, पत्र लेखन, अध्ययन योजनाका लागि आफ्नै टेम्प्लेट'
    },
    {
      title: 'परिणाम सुधार',
      titleEn: 'Result Refinement',
      description: 'पहिलो जवाफ पाएपछि सुधारका लागि फिडब्याक दिनुहोस्',
      descriptionEn: 'Provide feedback for improvement after getting the first response',
      example: '"यो राम्रो छ तर थप विस्तृत बनाउनुहोस्" वा "यसलाई सरल बनाउनुहोस्"'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            टिप्स र सुझावहरू
          </h2>
          <p className="text-xl text-gray-600 mb-2">Tips and Best Practices</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto"></div>
        </div>

        {/* Quick Tips */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">द्रुत सुझावहरू | Quick Tips</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100 text-center">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg w-fit mx-auto mb-4">
                  <tip.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{tip.title}</h4>
                <p className="text-sm text-blue-600 font-medium mb-3">{tip.titleEn}</p>
                <p className="text-gray-700 mb-2">{tip.tip}</p>
                <p className="text-sm text-gray-600 italic">{tip.tipEn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">गर्ने र नगर्ने कुराहरू | Do's and Don'ts</h3>
          <div className="space-y-12">
            {dosAndDonts.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h4>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Do's */}
                  <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                    <div className="flex items-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                      <h5 className="text-xl font-bold text-green-800">गर्नुहोस् | DO</h5>
                    </div>
                    <div className="space-y-6">
                      {category.dos.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
                          <p className="font-semibold text-green-800 mb-1">{item.text}</p>
                          <p className="text-green-700 mb-3">{item.nepali}</p>
                          <p className="text-sm text-gray-600 italic">{item.example}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Don'ts */}
                  <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                    <div className="flex items-center mb-6">
                      <XCircle className="h-8 w-8 text-red-600 mr-3" />
                      <h5 className="text-xl font-bold text-red-800">नगर्नुहोस् | DON'T</h5>
                    </div>
                    <div className="space-y-6">
                      {category.donts.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                          <p className="font-semibold text-red-800 mb-1">{item.text}</p>
                          <p className="text-red-700 mb-3">{item.nepali}</p>
                          <p className="text-sm text-gray-600 italic">{item.example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">सामान्य गल्तीहरू | Common Mistakes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-yellow-800">{mistake.mistake}</h4>
                    <p className="text-yellow-700">{mistake.mistakeEn}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">समस्या | Problem:</p>
                  <p className="text-gray-700">{mistake.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">समाधान | Solution:</p>
                  <p className="text-gray-700">{mistake.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">उन्नत सुझावहरू | Advanced Tips</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advancedTips.map((tip, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">{tip.title}</h4>
                <p className="text-blue-100 font-medium mb-3">{tip.titleEn}</p>
                <p className="text-blue-100 mb-3">{tip.description}</p>
                <p className="text-sm text-blue-200 italic mb-3">{tip.descriptionEn}</p>
                <div className="bg-white/20 p-3 rounded-lg">
                  <p className="text-sm text-white">{tip.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
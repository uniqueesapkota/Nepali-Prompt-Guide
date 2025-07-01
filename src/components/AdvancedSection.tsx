import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Lightbulb, Target, Layers, XCircle, CheckCircle } from 'lucide-react';

const AdvancedSection: React.FC = () => {
  const [expandedTechnique, setExpandedTechnique] = useState<number | null>(null);

  const advancedTechniques = [
    {
      title: 'Chain of Thought',
      nepali: 'विचारको श्रृंखला',
      icon: Layers,
      description: 'AI लाई चरणबद्ध रूपमा सोच्न लगाउने विधि',
      detailedDesc: 'This technique involves asking the AI to break down complex problems into steps and show its reasoning process.',
      goodExampleNepali: `समस्या: एक व्यापारीले 100 किलो चामल 80 रुपैयाँ प्रति किलोमा किन्यो। उसले 20% नाफा राख्न चाह्यो।

कृपया चरणबद्ध रूपमा गणना गरेर बताउनुहोस्:
1. कुल लागत कति भयो?
2. 20% नाफा कति हुन्छ?
3. बिक्री मूल्य कति राख्नुपर्छ?`,
      goodExampleEnglish: `Problem: A trader bought 100 kg of rice at 80 rupees per kg. He wants to keep a 20% profit.

Please calculate step by step:
1. What was the total cost?
2. How much is 20% profit?
3. What should be the selling price?`,
      badExampleNepali: `चामल किन्दा नाफा कसरी गणना गर्ने?`,
      badExampleEnglish: `How to calculate profit when buying rice?`,
      badReason: 'कुनै विशिष्ट डेटा छैन, चरणबद्ध प्रक्रिया माग्दैन',
      badReasonEn: 'No specific data, not asking for step-by-step process',
      tips: [
        'Ask AI to show step-by-step reasoning',
        'Use phrases like "Let\'s think step by step"',
        'Request explanations for each step'
      ]
    },
    {
      title: 'Few-Shot Learning',
      nepali: 'केही उदाहरण सिकाई',
      icon: Target,
      description: 'उदाहरण दिएर AI लाई ढाँचा सिकाउने',
      detailedDesc: 'Provide examples of the desired input-output format to train the AI on the specific pattern you want.',
      goodExampleNepali: `मलाई नेपाली भाषामा औपचारिक र अनौपचारिक भाषा छुट्याउन सिकाउनुहोस्।

उदाहरणहरू:
अनौपचारिक: "तिमी कहाँ जान्छौ?"
औपचारिक: "तपाईं कहाँ जानुहुन्छ?"

अनौपचारिक: "खाना खायौ?"
औपचारिक: "खाना खानुभयो?"

अब यसलाई औपचारिक बनाउनुहोस्: "तिमी के गर्दैछौ?"`,
      goodExampleEnglish: `Help me distinguish between formal and informal language in Nepali.

Examples:
Informal: "तिमी कहाँ जान्छौ?" (Where are you going?)
Formal: "तपाईं कहाँ जानुहुन्छ?" (Where are you going?)

Informal: "खाना खायौ?" (Did you eat?)
Formal: "खाना खानुभयो?" (Did you eat?)

Now make this formal: "तिमी के गर्दैछौ?" (What are you doing?)`,
      badExampleNepali: `नेपाली भाषामा औपचारिक र अनौपचारिक भाषा छुट्याउनुहोस्।`,
      badExampleEnglish: `Distinguish between formal and informal language in Nepali.`,
      badReason: 'कुनै उदाहरण छैन, ढाँचा देखाइएको छैन',
      badReasonEn: 'No examples provided, pattern not shown',
      tips: [
        'Provide 2-3 clear examples',
        'Show the exact format you want',
        'Use consistent patterns in examples'
      ]
    },
    {
      title: 'Role Playing',
      nepali: 'भूमिका खेल',
      icon: Lightbulb,
      description: 'AI लाई विशेष भूमिका दिएर काम गराउने',
      detailedDesc: 'Assign a specific role or persona to the AI to get responses from that perspective.',
      goodExampleNepali: `तपाईं एक अनुभवी नेपाली शिक्षक हुनुहुन्छ जसले 20 वर्ष देखि कक्षा 10 का विद्यार्थीहरूलाई गणित पढाउनुभएको छ। 

एक विद्यार्थीले सोध्यो: "समीकरण किन सिक्नुपर्छ? यो जीवनमा कहाँ प्रयोग हुन्छ?"

कृपया एक अनुभवी शिक्षकको रूपमा, सरल र व्यावहारिक उदाहरण सहित जवाफ दिनुहोस्।`,
      goodExampleEnglish: `You are an experienced Nepali teacher who has been teaching mathematics to grade 10 students for 20 years.

A student asked: "Why do we need to learn equations? Where is this used in life?"

Please answer as an experienced teacher, with simple and practical examples.`,
      badExampleNepali: `समीकरण किन सिक्नुपर्छ भनेर बताउनुहोस्।`,
      badExampleEnglish: `Tell me why we need to learn equations.`,
      badReason: 'कुनै भूमिका तोकिएको छैन, सन्दर्भ छैन',
      badReasonEn: 'No role assigned, no context provided',
      tips: [
        'Define the role clearly',
        'Specify expertise level',
        'Set the context and situation'
      ]
    }
  ];

  const promptTemplates = [
    {
      category: 'व्यापार | Business',
      templates: [
        {
          title: 'व्यापारिक योजना | Business Plan',
          goodTemplateNepali: `तपाईं एक व्यापारिक सल्लाहकार हुनुहुन्छ। मलाई [व्यापारको प्रकार] को लागि व्यापारिक योजना बनाउन मद्दत गर्नुहोस्।

विवरणहरू:
- स्थान: [स्थान]
- बजेट: [रकम]
- लक्षित ग्राहक: [ग्राहक समूह]

कृपया निम्न ढाँचामा जवाफ दिनुहोस्:
1. कार्यकारी सारांश
2. बजार विश्लेषण
3. मार्केटिङ रणनीति
4. वित्तीय योजना
5. जोखिम विश्लेषण`,
          goodTemplateEnglish: `You are a business consultant. Help me create a business plan for [type of business].

Details:
- Location: [location]
- Budget: [amount]
- Target customers: [customer group]

Please respond in the following format:
1. Executive Summary
2. Market Analysis
3. Marketing Strategy
4. Financial Plan
5. Risk Analysis`,
          badTemplateNepali: `व्यापार योजना बनाउनुहोस्।`,
          badTemplateEnglish: `Create a business plan.`,
          badReason: 'कुनै विवरण छैन, ढाँचा निर्दिष्ट छैन',
          badReasonEn: 'No details provided, format not specified'
        }
      ]
    },
    {
      category: 'शिक्षा | Education',
      templates: [
        {
          title: 'अध्ययन योजना | Study Plan',
          goodTemplateNepali: `मलाई [विषय/परीक्षा] को लागि [समयावधि] मा अध्ययन योजना बनाउन मद्दत गर्नुहोस्।

मेरो अवस्था:
- वर्तमान स्तर: [शुरुवाती/मध्यम/उन्नत]
- दैनिक उपलब्ध समय: [घण्टा]
- कमजोर क्षेत्रहरू: [सूची]

कृपया तालिका ढाँचामा साप्ताहिक योजना दिनुहोस्।`,
          goodTemplateEnglish: `Help me create a study plan for [subject/exam] over [time period].

My situation:
- Current level: [beginner/intermediate/advanced]
- Daily available time: [hours]
- Weak areas: [list]

Please provide a weekly plan in table format.`,
          badTemplateNepali: `अध्ययन योजना बनाउनुहोस्।`,
          badTemplateEnglish: `Create a study plan.`,
          badReason: 'विषय, समय, स्तर कुनै जानकारी छैन',
          badReasonEn: 'No information about subject, time, or level'
        }
      ]
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            उन्नत तकनीकहरू
          </h2>
          <p className="text-xl text-gray-600 mb-2">Advanced Techniques</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto"></div>
        </div>

        {/* Advanced Techniques */}
        <div className="mb-16">
          <div className="space-y-6">
            {advancedTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedTechnique(expandedTechnique === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                        <technique.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{technique.title}</h3>
                        <p className="text-blue-600 font-medium">{technique.nepali}</p>
                        <p className="text-gray-600 mt-1">{technique.description}</p>
                      </div>
                    </div>
                    {expandedTechnique === index ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
                
                {expandedTechnique === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-6">
                      <p className="text-gray-700 mb-6">{technique.detailedDesc}</p>
                      
                      {/* Good Example */}
                      <div className="bg-green-50 rounded-lg p-6 mb-6 border border-green-200">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <h4 className="font-semibold text-green-800">राम्रो उदाहरण | Good Example</h4>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => copyToClipboard(technique.goodExampleNepali)}
                              className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                              title="Copy Nepali example"
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Nepali Good Example */}
                        <div className="mb-4">
                          <p className="text-sm font-medium text-green-800 mb-2">नेपाली उदाहरण:</p>
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <pre className="whitespace-pre-wrap text-sm text-gray-800">{technique.goodExampleNepali}</pre>
                          </div>
                        </div>

                        {/* English Good Example */}
                        <div>
                          <p className="text-sm font-medium text-green-800 mb-2">English Example:</p>
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <pre className="whitespace-pre-wrap text-sm text-gray-800">{technique.goodExampleEnglish}</pre>
                          </div>
                        </div>
                      </div>

                      {/* Bad Example */}
                      <div className="bg-red-50 rounded-lg p-6 mb-6 border border-red-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <XCircle className="h-5 w-5 text-red-600" />
                          <h4 className="font-semibold text-red-800">नराम्रो उदाहरण | Bad Example</h4>
                        </div>
                        
                        {/* Nepali Bad Example */}
                        <div className="mb-4">
                          <p className="text-sm font-medium text-red-800 mb-2">नेपाली उदाहरण:</p>
                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <pre className="whitespace-pre-wrap text-sm text-gray-800">{technique.badExampleNepali}</pre>
                          </div>
                        </div>

                        {/* English Bad Example */}
                        <div className="mb-3">
                          <p className="text-sm font-medium text-red-800 mb-2">English Example:</p>
                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <pre className="whitespace-pre-wrap text-sm text-gray-800">{technique.badExampleEnglish}</pre>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-red-700"><strong>समस्या:</strong> {technique.badReason}</p>
                          <p className="text-xs text-red-600 italic mt-1"><strong>Problem:</strong> {technique.badReasonEn}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tips for Success:</h4>
                        <ul className="space-y-2">
                          {technique.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700">{tip}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Templates */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            प्रॉम्प्ट टेम्प्लेटहरू | Prompt Templates
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {promptTemplates.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h4>
                <div className="space-y-8">
                  {category.templates.map((template, templateIndex) => (
                    <div key={templateIndex}>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">{template.title}</h5>
                      
                      {/* Good Template */}
                      <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <h6 className="font-medium text-green-800">राम्रो टेम्प्लेट | Good Template</h6>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => copyToClipboard(template.goodTemplateNepali)}
                              className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                              title="Copy Nepali template"
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Nepali Template */}
                        <div className="mb-4">
                          <p className="text-sm font-medium text-green-800 mb-2">नेपाली टेम्प्लेट:</p>
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <pre className="whitespace-pre-wrap text-sm text-gray-800">{template.goodTemplateNepali}</pre>
                          </div>
                        </div>

                        {/* English Template */}
                        <div>
                          <p className="text-sm font-medium text-green-800 mb-2">English Template:</p>
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <pre className="whitespace-pre-wrap text-sm text-gray-800">{template.goodTemplateEnglish}</pre>
                          </div>
                        </div>
                      </div>

                      {/* Bad Template */}
                      <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                        <div className="flex items-center space-x-2 mb-4">
                          <XCircle className="h-5 w-5 text-red-600" />
                          <h6 className="font-medium text-red-800">नराम्रो टेम्प्लेट | Bad Template</h6>
                        </div>
                        
                        {/* Nepali Bad Template */}
                        <div className="mb-4">
                          <p className="text-sm font-medium text-red-800 mb-2">नेपाली टेम्प्लेट:</p>
                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <pre className="whitespace-pre-wrap text-sm text-gray-800">{template.badTemplateNepali}</pre>
                          </div>
                        </div>

                        {/* English Bad Template */}
                        <div className="mb-3">
                          <p className="text-sm font-medium text-red-800 mb-2">English Template:</p>
                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <pre className="whitespace-pre-wrap text-sm text-gray-800">{template.badTemplateEnglish}</pre>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-red-700"><strong>समस्या:</strong> {template.badReason}</p>
                          <p className="text-xs text-red-600 italic mt-1"><strong>Problem:</strong> {template.badReasonEn}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSection;
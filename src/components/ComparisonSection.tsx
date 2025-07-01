import React from 'react';
import { Zap, Brain, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparison = [
    {
      feature: 'Response Style',
      nepali: 'उत्तर शैली',
      chatgpt: {
        description: 'More conversational and creative',
        nepaliDesc: 'बढी कुराकानी र सृजनशील शैली',
        rating: 'excellent'
      },
      gemini: {
        description: 'More factual and structured',
        nepaliDesc: 'बढी तथ्यपरक र संरचित',
        rating: 'good'
      }
    },
    {
      feature: 'Code Generation',
      nepali: 'कोड जेनेरेसन',
      chatgpt: {
        description: 'Strong in popular languages',
        nepaliDesc: 'लोकप्रिय भाषाहरूमा बलियो',
        rating: 'excellent'
      },
      gemini: {
        description: 'Good with explanations',
        nepaliDesc: 'व्याख्यामा राम्रो',
        rating: 'good'
      }
    },
    {
      feature: 'Nepali Language',
      nepali: 'नेपाली भाषा',
      chatgpt: {
        description: 'Good understanding, some errors',
        nepaliDesc: 'राम्रो बुझाइ, केही त्रुटिहरू',
        rating: 'good'
      },
      gemini: {
        description: 'Better grammar, cultural context',
        nepaliDesc: 'बेहतर व्याकरण, सांस्कृतिक सन्दर्भ',
        rating: 'excellent'
      }
    },
    {
      feature: 'Math Problems',
      nepali: 'गणित समस्याहरू',
      chatgpt: {
        description: 'Step-by-step solutions',
        nepaliDesc: 'चरणबद्ध समाधान',
        rating: 'excellent'
      },
      gemini: {
        description: 'Accurate calculations',
        nepaliDesc: 'सटीक गणना',
        rating: 'excellent'
      }
    },
    {
      feature: 'Creative Writing',
      nepali: 'सृजनशील लेखन',
      chatgpt: {
        description: 'Very creative and engaging',
        nepaliDesc: 'धेरै सृजनशील र आकर्षक',
        rating: 'excellent'
      },
      gemini: {
        description: 'More formal approach',
        nepaliDesc: 'बढी औपचारिक दृष्टिकोण',
        rating: 'good'
      }
    },
    {
      feature: 'Real-time Info',
      nepali: 'वास्तविक समय जानकारी',
      chatgpt: {
        description: 'Limited to training data',
        nepaliDesc: 'प्रशिक्षण डेटामा सीमित',
        rating: 'limited'
      },
      gemini: {
        description: 'Can access current information',
        nepaliDesc: 'हालको जानकारी पहुँच गर्न सक्छ',
        rating: 'excellent'
      }
    }
  ];

  const chatgptTips = [
    {
      tip: 'Use "Act as..." for role-playing',
      nepali: '"भूमिका खेल्न "Act as..." प्रयोग गर्नुहोस्'
    },
    {
      tip: 'Ask for step-by-step explanations',
      nepali: 'चरणबद्ध व्याख्या माग्नुहोस्'
    },
    {
      tip: 'Use examples to show desired format',
      nepali: 'चाहेको ढाँचा देखाउन उदाहरण प्रयोग गर्नुहोस्'
    },
    {
      tip: 'Be specific about tone and style',
      nepali: 'स्वर र शैलीको बारेमा स्पष्ट हुनुहोस्'
    }
  ];

  const geminiTips = [
    {
      tip: 'Provide clear context and background',
      nepali: 'स्पष्ट सन्दर्भ र पृष्ठभूमि दिनुहोस्'
    },
    {
      tip: 'Ask for current information when needed',
      nepali: 'आवश्यक पर्दा हालको जानकारी माग्नुहोस्'
    },
    {
      tip: 'Use structured prompts for complex tasks',
      nepali: 'जटिल कार्यहरूको लागि संरचित प्रॉम्प्ट प्रयोग गर्नुहोस्'
    },
    {
      tip: 'Leverage its analytical strengths',
      nepali: 'यसको विश्लेषणात्मक शक्तिको फाइदा उठाउनुहोस्'
    }
  ];

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case 'excellent':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'good':
        return <CheckCircle className="h-5 w-5 text-blue-600" />;
      case 'limited':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      default:
        return <XCircle className="h-5 w-5 text-red-600" />;
    }
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'excellent':
        return 'bg-green-100 border-green-200';
      case 'good':
        return 'bg-blue-100 border-blue-200';
      case 'limited':
        return 'bg-yellow-100 border-yellow-200';
      default:
        return 'bg-red-100 border-red-200';
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ChatGPT बनाम Gemini तुलना
          </h2>
          <p className="text-xl text-gray-600 mb-2">ChatGPT vs Gemini Comparison</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto"></div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold">विशेषताहरू</h3>
              <p className="text-blue-100">Features</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-6 w-6" />
                <span className="text-xl font-bold">ChatGPT</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Brain className="h-6 w-6" />
                <span className="text-xl font-bold">Gemini</span>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {comparison.map((item, index) => (
              <div key={index} className="grid grid-cols-3 p-6 hover:bg-gray-50 transition-colors">
                <div className="pr-6">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.feature}</h4>
                  <p className="text-sm text-blue-600">{item.nepali}</p>
                </div>
                <div className={`mx-3 p-4 rounded-lg border ${getRatingColor(item.chatgpt.rating)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.chatgpt.description}</span>
                    {getRatingIcon(item.chatgpt.rating)}
                  </div>
                  <p className="text-xs text-gray-600">{item.chatgpt.nepaliDesc}</p>
                </div>
                <div className={`ml-3 p-4 rounded-lg border ${getRatingColor(item.gemini.rating)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.gemini.description}</span>
                    {getRatingIcon(item.gemini.rating)}
                  </div>
                  <p className="text-xs text-gray-600">{item.gemini.nepaliDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Each Platform */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* ChatGPT Tips */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-green-600 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">ChatGPT का लागि टिप्स</h3>
                <p className="text-gray-600">Tips for ChatGPT</p>
              </div>
            </div>
            <div className="space-y-4">
              {chatgptTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-medium">{tip.tip}</p>
                    <p className="text-sm text-gray-600 mt-1">{tip.nepali}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gemini Tips */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Gemini का लागि टिप्स</h3>
                <p className="text-gray-600">Tips for Gemini</p>
              </div>
            </div>
            <div className="space-y-4">
              {geminiTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-medium">{tip.tip}</p>
                    <p className="text-sm text-gray-600 mt-1">{tip.nepali}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* When to Use Which */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">कहिले कुन प्रयोग गर्ने? | When to Use Which?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6" />
                <h4 className="text-xl font-bold">ChatGPT को लागि उपयुक्त</h4>
              </div>
              <ul className="space-y-2 text-blue-100">
                <li>• Creative writing and storytelling</li>
                <li>• सृजनशील लेखन र कथा कहानी</li>
                <li>• Code generation and debugging</li>
                <li>• कोड जेनेरेसन र डिबगिङ</li>
                <li>• Conversational interactions</li>
                <li>• कुराकानी जस्तो अन्तरक्रिया</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6" />
                <h4 className="text-xl font-bold">Gemini को लागि उपयुक्त</h4>
              </div>
              <ul className="space-y-2 text-blue-100">
                <li>• Research and factual information</li>
                <li>• अनुसन्धान र तथ्यपरक जानकारी</li>
                <li>• Current events and news</li>
                <li>• हालका घटनाहरू र समाचार</li>
                <li>• Analytical tasks</li>
                <li>• विश्लेषणात्मक कार्यहरू</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
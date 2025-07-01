import React, { useState } from 'react';
import { Copy, BookOpen, Briefcase, Code, Heart, Utensils, Camera } from 'lucide-react';

interface ExamplePrompt {
  title: string;
  nepali: string;
  category: string;
  promptNepali: string;
  promptEnglish: string;
  expectedOutput: string;
  expectedOutputNepali: string;
  icon: React.ComponentType<any>;
}

const ExamplesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'सबै | All', icon: BookOpen },
    { id: 'business', name: 'व्यापार | Business', icon: Briefcase },
    { id: 'education', name: 'शिक्षा | Education', icon: BookOpen },
    { id: 'tech', name: 'प्रविधि | Technology', icon: Code },
    { id: 'health', name: 'स्वास्थ्य | Health', icon: Heart },
    { id: 'food', name: 'खाना | Food', icon: Utensils },
    { id: 'creative', name: 'सृजनशील | Creative', icon: Camera }
  ];

  const examples: ExamplePrompt[] = [
    {
      title: 'Restaurant Business Plan',
      nepali: 'रेस्टुरेन्ट व्यापार योजना',
      category: 'business',
      icon: Briefcase,
      promptNepali: `मलाई काठमाडूमा नेपाली खानाको रेस्टुरेन्ट खोल्न मद्दत गर्नुहोस्। 

मेरो विवरण:
- पूँजी: 20 लाख रुपैयाँ
- स्थान: तमेल क्षेत्र (पर्यटकीय क्षेत्र)
- अनुभव: खाना पकाउने 5 वर्षको अनुभव
- लक्ष्य: स्थानीय र विदेशी पर्यटक दुवैलाई लक्षित गर्ने

कृपया निम्न बुँदाहरूमा विस्तृत योजना दिनुहोस्:
1. प्रारम्भिक लगानी र बजेट वितरण
2. मेनु र मूल्य रणनीति
3. मार्केटिङ योजना
4. दैनिक सञ्चालन योजना
5. पहिलो वर्षको आम्दानी अनुमान`,
      promptEnglish: `Help me open a Nepali food restaurant in Kathmandu.

My details:
- Capital: 2 million rupees
- Location: Thamel area (tourist zone)
- Experience: 5 years of cooking experience
- Goal: Target both local and foreign tourists

Please provide a detailed plan covering:
1. Initial investment and budget distribution
2. Menu and pricing strategy
3. Marketing plan
4. Daily operations plan
5. First year revenue projection`,
      expectedOutput: 'Detailed business plan with budget breakdown, menu suggestions, marketing strategies specifically for Nepal context',
      expectedOutputNepali: 'नेपाली सन्दर्भमा विशेष गरी बजेट विभाजन, मेनु सुझाव, मार्केटिङ रणनीति सहितको विस्तृत व्यापार योजना'
    },
    {
      title: 'Math Study Schedule',
      nepali: 'गणित अध्ययन तालिका',
      category: 'education',
      icon: BookOpen,
      promptNepali: `मलाई SEE परीक्षाको गणितको लागि 3 महिनाको अध्ययन योजना बनाउन मद्दत गर्नुहोस्।

मेरो अवस्था:
- वर्तमान अंक: 40-50% (C+ ग्रेड)
- लक्ष्य: 80%+ (A ग्रेड)
- दैनिक उपलब्ध समय: 2 घण्टा
- कमजोर क्षेत्रहरू: बीजगणित, ज्यामिति
- बलियो क्षेत्रहरू: अंकगणित

कृपया साप्ताहिक तालिका ढाँचामा दिनुहोस् र प्रत्येक हप्ता के अध्ययन गर्ने र कसरी अभ्यास गर्ने भन्ने स्पष्ट निर्देशन दिनुहोस्।`,
      promptEnglish: `Help me create a 3-month study plan for SEE exam mathematics.

My situation:
- Current marks: 40-50% (C+ grade)
- Goal: 80%+ (A grade)
- Daily available time: 2 hours
- Weak areas: Algebra, Geometry
- Strong areas: Arithmetic

Please provide in weekly table format with clear instructions on what to study each week and how to practice.`,
      expectedOutput: 'Structured 12-week study plan with weekly focus areas, practice schedules, and progress tracking methods',
      expectedOutputNepali: 'साप्ताहिक फोकस क्षेत्र, अभ्यास तालिका र प्रगति ट्र्याकिङ विधि सहितको संरचित 12-हप्ताको अध्ययन योजना'
    },
    {
      title: 'Website Development Guide',
      nepali: 'वेबसाइट निर्माण गाइड',
      category: 'tech',
      icon: Code,
      promptNepali: `मलाई नेपालमा छोटो व्यापारको लागि सरल वेबसाइट बनाउन सिकाउनुहोस्।

मेरो स्थिति:
- प्रविधिक ज्ञान: एकदम शुरुवाती (कम्प्युटर चलाउन मात्र जान्छु)
- उद्देश्य: मेरो कपडाको पसलको लागि अनलाइन उपस्थिति
- बजेट: धेरै कम (सकेसम्म नि:शुल्क समाधान चाहिन्छ)
- आवश्यकताहरू: उत्पादन देखाउने, सम्पर्क जानकारी, फेसबुक पेज लिंक

कृपया चरणबद्ध रूपमा सिकाउनुहोस्:
1. कुन प्लेटफर्म प्रयोग गर्ने?
2. कसरी सुरु गर्ने?
3. के-के जानकारी राख्ने?
4. कसरी फोटो अपलोड गर्ने?
5. ग्राहकले कसरी सम्पर्क गर्न सक्छ?`,
      promptEnglish: `Teach me to create a simple website for my small business in Nepal.

My situation:
- Technical knowledge: Complete beginner (only know basic computer use)
- Purpose: Online presence for my clothing store
- Budget: Very low (need free solutions if possible)
- Requirements: Show products, contact info, Facebook page link

Please teach step by step:
1. Which platform to use?
2. How to get started?
3. What information to include?
4. How to upload photos?
5. How can customers contact me?`,
      expectedOutput: 'Step-by-step guide for creating a simple business website using free platforms, with Nepali context and terminology',
      expectedOutputNepali: 'नि:शुल्क प्लेटफर्म प्रयोग गरेर सरल व्यापारिक वेबसाइट बनाउनको लागि नेपाली सन्दर्भ र शब्दावली सहितको चरणबद्ध गाइड'
    },
    {
      title: 'Healthy Diet Plan',
      nepali: 'स्वस्थ आहार योजना',
      category: 'health',
      icon: Heart,
      promptNepali: `मलाई नेपाली खानामा आधारित स्वस्थ आहार योजना बनाउन मद्दत गर्नुहोस्।

मेरो विवरण:
- उमेर: 35 वर्ष, महिला
- तौल: 70 केजी, उचाइ: 5'4"
- लक्ष्य: 5 केजी तौल घटाउने
- स्वास्थ्य समस्या: हल्का मधुमेह (डाक्टरको सल्लाहमा)
- जीवनशैली: कार्यालयको काम (बसेर काम गर्ने)
- खानाको प्राथमिकता: नेपाली परम्परागत खाना

कृपया दिनुहोस्:
1. दैनिक खानाको तालिका (बिहान, दिउँसो, बेलुका)
2. कुन खाना खान मिल्छ र कुन नमिल्ने
3. व्यायामका सुझाव
4. साप्ताहिक मेनु योजना
5. मधुमेहका लागि विशेष सावधानी`,
      promptEnglish: `Help me create a healthy diet plan based on Nepali food.

My details:
- Age: 35 years, female
- Weight: 70 kg, Height: 5'4"
- Goal: Lose 5 kg weight
- Health issue: Mild diabetes (under doctor's advice)
- Lifestyle: Office work (sedentary)
- Food preference: Traditional Nepali food

Please provide:
1. Daily meal schedule (morning, afternoon, evening)
2. Which foods to eat and avoid
3. Exercise suggestions
4. Weekly menu plan
5. Special precautions for diabetes`,
      expectedOutput: 'Comprehensive diet plan using traditional Nepali foods, suitable for diabetes management and weight loss',
      expectedOutputNepali: 'मधुमेह व्यवस्थापन र तौल घटाउनको लागि उपयुक्त परम्परागत नेपाली खाना प्रयोग गरेको व्यापक आहार योजना'
    },
    {
      title: 'Traditional Recipe',
      nepali: 'परम्परागत रेसिपी',
      category: 'food',
      icon: Utensils,
      promptNepali: `मलाई नेवारी समुदायको पारम्परिक "योमरी" बनाउन सिकाउनुहोस्।

मेरो अवस्था:
- खाना पकाउने अनुभव: मध्यम स्तरको
- उपकरण: सामान्य घरेलु भान्छाका सामग्रीहरू
- परिवार: 6 जनाको लागि बनाउनुपर्ने
- समय सीमा: योमरी पर्वको लागि (विशेष अवसर)

कृपया विस्तृत निर्देशन दिनुहोस्:
1. आवश्यक सामग्रीहरूको सूची (नेपाली नामसहित)
2. चरणबद्ध बनाउने विधि
3. विशेष टिप्स र ट्रिकहरू
4. सामान्य गल्तीहरू र तिनबाट कसरी बच्ने
5. परम्परागत तरिका र आधुनिक तरिकाको तुलना
6. भण्डारण र परोसने तरिका`,
      promptEnglish: `Teach me to make traditional Newari "Yomari".

My situation:
- Cooking experience: Intermediate level
- Equipment: Regular home kitchen items
- Family: Need to make for 6 people
- Timeline: For Yomari festival (special occasion)

Please provide detailed instructions:
1. List of required ingredients (with Nepali names)
2. Step-by-step cooking method
3. Special tips and tricks
4. Common mistakes and how to avoid them
5. Comparison of traditional vs modern methods
6. Storage and serving methods`,
      expectedOutput: 'Detailed traditional Newari Yomari recipe with cultural context, step-by-step instructions, and cooking tips',
      expectedOutputNepali: 'सांस्कृतिक सन्दर्भ, चरणबद्ध निर्देशन र खाना पकाउने टिप्स सहितको विस्तृत परम्परागत नेवारी योमरी रेसिपी'
    },
    {
      title: 'Photography Tips',
      nepali: 'फोटोग्राफी सुझावहरू',
      category: 'creative',
      icon: Camera,
      promptNepali: `मलाई मेरो स्मार्टफोनले नेपालका सुन्दर ठाउँहरूको राम्रो फोटो खिच्न सिकाउनुहोस्।

मेरो विवरण:
- फोन: सामान्य एन्ड्रोइड फोन (मध्यम गुणस्तर क्यामेरा)
- अनुभव: फोटोग्राफीमा शुरुवाती
- रुचि: प्राकृतिक दृश्य, पहाड, तालहरू
- उद्देश्य: सामाजिक सञ्जालमा राख्ने र पारिवारिक सम्झना
- यात्रा गर्ने ठाउँहरू: पोखरा, चितवन, एभरेस्ट बेस क्याम्प ट्रेक

कृपया सिकाउनुहोस्:
1. फोनको क्यामेरा सेटिङ्स कसरी मिलाउने?
2. राम्रो फोटोका लागि आधारभूत नियमहरू
3. प्राकृतिक उज्यालो कसरी प्रयोग गर्ने?
4. नेपालका सुन्दर ठाउँहरूमा फोटो खिच्दा विशेष टिप्स
5. फोटो एडिटिङका सरल तरिकाहरू
6. इन्स्टाग्राम र फेसबुकमा राख्दा के ध्यान दिने?`,
      promptEnglish: `Teach me to take good photos of Nepal's beautiful places with my smartphone.

My details:
- Phone: Regular Android phone (medium quality camera)
- Experience: Beginner in photography
- Interest: Natural landscapes, mountains, lakes
- Purpose: For social media and family memories
- Travel destinations: Pokhara, Chitwan, Everest Base Camp trek

Please teach me:
1. How to adjust phone camera settings?
2. Basic rules for good photos
3. How to use natural light?
4. Special tips for photographing Nepal's beautiful places
5. Simple photo editing methods
6. What to consider when posting on Instagram and Facebook?`,
      expectedOutput: 'Comprehensive smartphone photography guide specifically for Nepal landscapes, with practical tips and editing suggestions',
      expectedOutputNepali: 'व्यावहारिक टिप्स र एडिटिङ सुझावहरू सहित नेपाली परिदृश्यहरूको लागि विशेष रूपमा स्मार्टफोन फोटोग्राफी गाइड'
    }
  ];

  const filteredExamples = selectedCategory === 'all' 
    ? examples 
    : examples.filter(example => example.category === selectedCategory);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            व्यावहारिक उदाहरणहरू
          </h2>
          <p className="text-xl text-gray-600 mb-2">Practical Examples</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredExamples.map((example, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                    <example.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{example.title}</h3>
                    <p className="text-blue-600 font-medium">{example.nepali}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => copyToClipboard(example.promptNepali)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                    title="Copy Nepali prompt"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Nepali Prompt */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">नेपाली प्रॉम्प्ट:</h4>
                  <div className="bg-white p-4 rounded-lg border border-blue-200 max-h-60 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800">{example.promptNepali}</pre>
                  </div>
                </div>

                {/* English Prompt */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">English Prompt:</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 max-h-60 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800">{example.promptEnglish}</pre>
                  </div>
                </div>

                {/* Expected Output */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">अपेक्षित परिणाम | Expected Output:</h4>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800 mb-2">{example.expectedOutputNepali}</p>
                    <p className="text-sm text-green-700 italic">{example.expectedOutput}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Tips */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">उदाहरण प्रयोग गर्ने तरिका | How to Use Examples</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Copy & Customize</h4>
              <p className="text-blue-100">प्रॉम्प्ट कपी गरेर आफ्नो आवश्यकता अनुसार परिवर्तन गर्नुहोस्</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Add Details</h4>
              <p className="text-blue-100">आफ्नो विशिष्ट परिस्थिति र आवश्यकता थप्नुहोस्</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Test & Refine</h4>
              <p className="text-blue-100">परिणाम हेरेर आवश्यकता अनुसार सुधार गर्नुहोस्</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
import React, { useState, useEffect } from 'react';
import { Heart, Code, Globe, MessageSquareText, Users, Mail, Github, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showStickyButton, setShowStickyButton] = useState(false);

  // Show sticky button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show button when user has scrolled down at least one viewport height
      setShowStickyButton(scrollPosition > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerLinks = [
    {
      title: 'संसाधनहरू | Resources',
      links: [
        { name: 'ChatGPT', url: 'https://chat.openai.com', external: true },
        { name: 'Google Gemini', url: 'https://gemini.google.com', external: true },
        { name: 'प्रॉम्प्ट उदाहरणहरू', anchor: 'examples' },
        { name: 'टेम्प्लेटहरू', anchor: 'advanced' }
      ]
    },
    {
      title: 'सिक्नुहोस् | Learn',
      links: [
        { name: 'आधारभूत सिद्धान्तहरू', anchor: 'basics' },
        { name: 'उन्नत तकनीकहरू', anchor: 'advanced' },
        { name: 'सुझावहरू', anchor: 'tips' },
        { name: 'तुलना', anchor: 'comparison' }
      ]
    },
    {
      title: 'समुदाय | Community',
      links: [
        { name: 'नेपाली AI समुदाय', external: true },
        { name: 'फीडब्याक दिनुहोस्', external: true },
        { name: 'योगदान गर्नुहोस्', external: true },
        { name: 'साझेदारी', external: true }
      ]
    }
  ];

  const handleLinkClick = (link: any) => {
    if (link.anchor) {
      onNavigate(link.anchor);
    } else if (link.url) {
      window.open(link.url, '_blank');
    }
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/uniqueesapkota', '_blank');
  };

  const handlePortfolioClick = () => {
    window.open('https://unique-portfolio-peach.vercel.app', '_blank');
  };

  return (
    <>
      {/* Sticky Portfolio Button */}
      <div className={`fixed bottom-6 left-6 z-50 transition-all duration-300 transform ${
        showStickyButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}>
        <button
          onClick={handlePortfolioClick}
          className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
          title="Visit Portfolio"
        >
          <div className="flex items-center space-x-2">
            <Github className="h-6 w-6" />
            <ExternalLink className="h-4 w-4 opacity-75" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            <div className="text-center">
              <div className="font-semibold">Visit Portfolio</div>
              <div className="text-xs text-gray-300">uniqueesapkota</div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      </div>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <button 
                onClick={() => onNavigate('home')}
                className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                  <MessageSquareText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">प्रॉम्प्ट गाइड</h3>
                  <p className="text-sm text-gray-400">Prompt Engineering Guide</p>
                </div>
              </button>
              <p className="text-gray-300 mb-6 leading-relaxed">
                नेपाली भाषामा ChatGPT र Gemini का लागि प्रभावकारी प्रॉम्प्ट लेख्न सिक्नुहोस्। 
                व्यावहारिक उदाहरण र विशेषज्ञ सुझावहरू सहित।
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Learn to write effective prompts for ChatGPT and Gemini in Nepali language 
                with practical examples and expert tips.
              </p>
              <div className="flex space-x-4">
                <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <Globe className="h-5 w-5 text-blue-400" />
                </div>
                <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <Users className="h-5 w-5 text-teal-400" />
                </div>
                <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <button 
                  onClick={handleGitHubClick}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  title="Visit GitHub Profile"
                >
                  <Github className="h-5 w-5 text-gray-300 hover:text-white" />
                </button>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-gray-300 hover:text-white transition-colors text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="border-t border-gray-800 pt-12 mb-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <p className="text-gray-300">प्रॉम्प्ट उदाहरणहरू</p>
                <p className="text-sm text-gray-400">Prompt Examples</p>
              </div>
              <div className="bg-gradient-to-br from-teal-900/50 to-teal-800/50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-teal-400 mb-2">6</div>
                <p className="text-gray-300">मुख्य विषयहरू</p>
                <p className="text-sm text-gray-400">Main Categories</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
                <p className="text-gray-300">AI प्लेटफर्महरू</p>
                <p className="text-sm text-gray-400">AI Platforms</p>
              </div>
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                <p className="text-gray-300">सिक्ने अवसरहरू</p>
                <p className="text-sm text-gray-400">Learning Opportunities</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="border-t border-gray-800 pt-12 mb-12">
            <h4 className="text-2xl font-bold text-center mb-8">मुख्य विशेषताहरू | Key Features</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h5 className="font-semibold mb-2">द्विभाषी गाइड</h5>
                <p className="text-sm text-gray-400">नेपाली र अंग्रेजी दुवै भाषामा</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageSquareText className="h-8 w-8 text-white" />
                </div>
                <h5 className="font-semibold mb-2">व्यावहारिक उदाहरणहरू</h5>
                <p className="text-sm text-gray-400">वास्तविक जीवनका स्थितिहरू</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h5 className="font-semibold mb-2">समुदायिक समर्थन</h5>
                <p className="text-sm text-gray-400">नेपाली AI समुदायको साथ</p>
              </div>
            </div>
          </div>

          {/* Developer Credit Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Developed by</h4>
                  <div className="flex items-center justify-center space-x-4 mt-2">
                    <button
                      onClick={handleGitHubClick}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      title="Visit GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                      <span className="font-semibold">uniqueesapkota</span>
                    </button>
                    <span className="text-gray-500">|</span>
                    <button
                      onClick={handlePortfolioClick}
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                      title="Visit Portfolio"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-semibold">Portfolio</span>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                यो प्रोजेक्ट नेपाली AI समुदायको लागि प्रेम र समर्पणका साथ बनाइएको हो। 
                सुझाव र योगदानका लागि GitHub मा सम्पर्क गर्नुहोस्।
              </p>
              <p className="text-gray-500 text-xs mt-2">
                This project is built with love and dedication for the Nepali AI community. 
                Contact on GitHub for suggestions and contributions.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2025 प्रॉम्प्ट गाइड | Made with
                </p>
                <Heart className="h-4 w-4 text-red-500" />
                <p className="text-gray-400 text-sm">for नेपाली AI Community</p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <button className="hover:text-white transition-colors">
                  गोपनियता नीति | Privacy Policy
                </button>
                <button className="hover:text-white transition-colors">
                  सेवाका सर्तहरू | Terms of Service
                </button>
                <button className="hover:text-white transition-colors">
                  सम्पर्क | Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => onNavigate('home')}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <MessageSquareText className="h-6 w-6" />
        </button>
      </footer>
    </>
  );
};

export default Footer;
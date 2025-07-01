import React, { useState } from 'react';
import { Menu, X, MessageSquareText } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'intro', label: 'परिचय', labelEn: 'Introduction' },
    { id: 'basics', label: 'आधारभूत', labelEn: 'Basics' },
    { id: 'advanced', label: 'उन्नत', labelEn: 'Advanced' },
    { id: 'examples', label: 'उदाहरण', labelEn: 'Examples' },
    { id: 'comparison', label: 'तुलना', labelEn: 'Comparison' },
    { id: 'tips', label: 'सुझावहरू', labelEn: 'Tips' }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    onNavigate('home');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
              <MessageSquareText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">प्रॉम्प्ट गाइड</h1>
              <p className="text-xs text-gray-600">Prompt Engineering Guide</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span className="block">{item.label}</span>
                <span className="block text-xs opacity-75">{item.labelEn}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="block">{item.label}</span>
                  <span className="block text-xs opacity-75">{item.labelEn}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
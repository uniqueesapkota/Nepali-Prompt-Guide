import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import BasicsSection from './components/BasicsSection';
import AdvancedSection from './components/AdvancedSection';
import ExamplesSection from './components/ExamplesSection';
import ComparisonSection from './components/ComparisonSection';
import TipsSection from './components/TipsSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle navigation - scroll to section or show home
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Small delay to ensure state update, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Handle scroll spy to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'basics', 'advanced', 'examples', 'comparison', 'tips'];
      const scrollPosition = window.scrollY + 150;

      // Check if we're at the top (home)
      if (window.scrollY < 200) {
        if (activeSection !== 'home') {
          setActiveSection('home');
        }
        return;
      }

      // Check which section is currently visible
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      
      {/* Hero Section - Always visible */}
      <div id="home">
        <Hero onNavigate={handleNavigation} />
      </div>
      
      {/* Main Content Sections */}
      <main>
        <section id="intro" className="scroll-mt-20">
          <IntroSection />
        </section>
        
        <section id="basics" className="scroll-mt-20">
          <BasicsSection />
        </section>
        
        <section id="advanced" className="scroll-mt-20">
          <AdvancedSection />
        </section>
        
        <section id="examples" className="scroll-mt-20">
          <ExamplesSection />
        </section>
        
        <section id="comparison" className="scroll-mt-20">
          <ComparisonSection />
        </section>
        
        <section id="tips" className="scroll-mt-20">
          <TipsSection />
        </section>
      </main>

      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState('landing');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine current section based on scroll position
      const sections = ['landing', 'about', 'projects', 'skills', 'contact'];
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(window.scrollY / windowHeight);
      
      if (sectionIndex < sections.length) {
        setCurrentSection(sections[sectionIndex]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, currentSection };
}
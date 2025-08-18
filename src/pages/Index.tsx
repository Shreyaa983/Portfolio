
import { useState, useEffect } from 'react';
import BootSequence from '../components/BootSequence';
import Navigation from '../components/Navigation';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';


const Index = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  // Scroll to top on initial load to ensure About section is visible
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showBoot) {
    return <BootSequence onComplete={() => setShowBoot(false)} />;
  }

  return (
    <div className="min-h-screen bg-background terminal-grid">
      <Navigation
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      <div id="about">
        <AboutSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );

};

export default Index;

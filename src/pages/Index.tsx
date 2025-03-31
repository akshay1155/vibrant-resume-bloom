
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Element } from 'react-scroll';

const Index = () => {
  useEffect(() => {
    document.title = "Reddy Akshay Kumar | Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <Element name="about">
          <AboutSection />
        </Element>
        
        <Element name="experience">
          <ExperienceSection />
        </Element>
        
        <Element name="projects">
          <ProjectsSection />
        </Element>
        
        <Element name="skills">
          <SkillsSection />
        </Element>
        
        <Element name="education">
          <EducationSection />
        </Element>
        
        <Element name="contact">
          <ContactSection />
        </Element>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import { ArrowDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-60"></div>
      <div className="container mx-auto px-6 py-12 md:py-0 relative">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Reddy <span className="text-primary">Akshay</span> Kumar
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Developer &amp; DevOps Engineer
          </h2>
          <p className="text-lg mb-8 opacity-85 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Specialized in AWS and GCP cloud services, Kubernetes orchestration, CI/CD pipelines, 
            and Infrastructure as Code. Building scalable, resilient, and secure cloud architectures.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button asChild variant="default">
                <a href="mailto:akshaykumarreddy1155@gmail.com">
                  <Mail className="mr-2" size={18} />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+918688162268">
                  <Phone className="mr-2" size={18} />
                  +91 8688162268
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-16 hidden md:block animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="about" smooth={true} duration={500} className="inline-flex items-center text-sm cursor-pointer hover:text-primary transition-colors">
              Scroll down
              <ArrowDown className="ml-2 animate-bounce" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

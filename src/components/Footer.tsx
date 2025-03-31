
import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 px-6 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">
              <span className="text-primary">Reddy Akshay</span> Kumar
            </h3>
            <p className="text-muted-foreground text-sm mt-1">Software Developer & Cloud Engineer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Button variant="outline" size="icon" className="mb-4" asChild>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center cursor-pointer"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </Link>
            </Button>
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Reddy Akshay Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

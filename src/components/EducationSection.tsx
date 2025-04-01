
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const educationItems = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'SRKR Engineering College',
    period: 'July 2019 - April 2023',
    grade: 'CGPA: 7.5'
  },
  {
    id: 2,
    degree: 'XII Standard',
    institution: 'Sri Chaitanya Junior College',
    period: 'June 2017 - May 2019',
    grade: 'CGPA: 9.8'
  },
  {
    id: 3,
    degree: 'X Standard',
    institution: 'Abhyudaya High School',
    period: 'June 2016 - May 2017',
    grade: 'CGPA: 9.5'
  }
];

const certifications = [
  {
    name: 'Google Cloud Certified Professional Cloud DevOps Engineer',
    credlyLink: 'https://www.credly.com/badges/f6620794-92b0-4394-a96d-2025c49d6004',
    badgeImage: '/lovable-uploads/fccb68c9-c465-4d07-ad79-9c3fdf0ce3a6.png'
  },
  {
    name: 'AWS Certified Developer - Associate',
    credlyLink: 'https://www.credly.com/badges/2a028b33-05e5-4e3d-bc79-4a313c2eb4d3',
    badgeImage: '/lovable-uploads/f77353fc-1ab0-45fb-80e5-c0248aebf45d.png'
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (003)',
    credlyLink: 'https://www.credly.com/badges/7874d337-7d53-4146-98eb-f05ac92b37d9',
    badgeImage: '/lovable-uploads/04747679-b7d7-44cf-a754-a3aa78352577.png'
  },
  {
    name: 'InfyTQ Certification - Infosys Certified Software Programmer',
    credlyLink: null,
    badgeImage: null
  },
  {
    name: 'NPTEL Certification in Programming in Java',
    credlyLink: null,
    badgeImage: null
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2" size={24} />
              Academic Background
            </h3>
            <div className="space-y-6">
              {educationItems.map((item) => (
                <Card key={item.id} className="shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold">{item.degree}</h4>
                    <p className="text-primary mb-2">{item.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={14} className="mr-2" />
                      {item.period}
                    </div>
                    <p className="text-sm font-medium">{item.grade}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mr-2">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {cert.badgeImage && (
                        <div className="flex-shrink-0">
                          <a 
                            href={cert.credlyLink || '#'} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <img 
                              src={cert.badgeImage} 
                              alt={`${cert.name} badge`} 
                              className="w-20 h-20 object-contain"
                            />
                          </a>
                        </div>
                      )}
                      
                      <div className="flex flex-col justify-center">
                        <h4 className="font-medium text-base">{cert.name}</h4>
                        {cert.credlyLink && (
                          <Button variant="link" className="p-0 h-6 justify-start" asChild>
                            <a 
                              href={cert.credlyLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary text-sm flex items-center mt-1"
                            >
                              View credential <ExternalLink size={14} className="ml-1" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

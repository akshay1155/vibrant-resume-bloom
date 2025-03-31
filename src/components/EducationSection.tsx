
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

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
  'Google Cloud Certified Professional Cloud DevOps Engineer',
  'AWS Certified Developer - Associate',
  'HashiCorp Certified: Terraform Associate (003)',
  'InfyTQ Certification - Infosys Certified Software Programmer',
  'NPTEL Certification in Programming in Java'
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
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-primary mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

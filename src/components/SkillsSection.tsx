import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    category: 'Cloud Platforms',
    skills: [
      { name: 'AWS', level: 90, color: 'bg-tech-aws' },
      { name: 'GCP', level: 85, color: 'bg-tech-gcp' }
    ]
  },
  {
    category: 'Containerization & Orchestration',
    skills: [
      { name: 'Docker', level: 90, color: 'bg-tech-docker' },
      { name: 'Kubernetes', level: 85, color: 'bg-tech-kubernetes' },
      { name: 'AWS EKS', level: 90, color: 'bg-tech-aws' },
      { name: 'GCP GKE', level: 85, color: 'bg-tech-gcp' }
    ]
  },
  {
    category: 'CICD Tools',
    skills: [
      { name: 'Jenkins', level: 80, color: 'bg-[#D33833]' },
      { name: 'AWS CodePipeline', level: 85, color: 'bg-tech-aws' }
    ]
  },
  {
    category: 'IaC & Automation',
    skills: [
      { name: 'Terraform', level: 90, color: 'bg-tech-terraform' },
      { name: 'AWS CloudFormation', level: 85, color: 'bg-tech-aws' },
      { name: 'AWS CDK', level: 80, color: 'bg-tech-aws' }
    ]
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git', level: 90, color: 'bg-[#F05032]' },
      { name: 'GitHub', level: 90, color: 'bg-[#181717]' }
    ]
  },
  {
    category: 'Operating Systems',
    skills: [
      { name: 'Linux', level: 85, color: 'bg-[#FCC624]' }
    ]
  },
  {
    category: 'Programming & Scripting',
    skills: [
      { name: 'Java', level: 85, color: 'bg-tech-java' },
      { name: 'Springboot', level: 80, color: 'bg-[#6DB33F]' },
      { name: 'React.js', level: 75, color: 'bg-tech-react' },
      { name: 'Python', level: 80, color: 'bg-tech-python' }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with and my expertise levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2" 
                        indicatorClassName={skill.color}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

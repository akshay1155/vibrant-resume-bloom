
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, StarHalf } from 'lucide-react';

// Convert percentage to star level representation (max 5 stars)
const getLevelStars = (level: number) => {
  // Map percentage to 0-5 scale
  const normalizedLevel = Math.floor((level / 100) * 5);
  const hasHalfStar = (level / 100) * 5 - normalizedLevel >= 0.5;
  
  return { fullStars: normalizedLevel, hasHalfStar };
};

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

// Map percentage to expertise level text
const getExpertiseLevel = (level: number) => {
  if (level >= 90) return { text: "Expert", color: "bg-green-500/20 text-green-700 dark:bg-green-500/30 dark:text-green-300" };
  if (level >= 80) return { text: "Advanced", color: "bg-blue-500/20 text-blue-700 dark:bg-blue-500/30 dark:text-blue-300" };
  if (level >= 70) return { text: "Proficient", color: "bg-purple-500/20 text-purple-700 dark:bg-purple-500/30 dark:text-purple-300" };
  if (level >= 60) return { text: "Intermediate", color: "bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/30 dark:text-yellow-300" };
  return { text: "Beginner", color: "bg-gray-500/20 text-gray-700 dark:bg-gray-500/30 dark:text-gray-300" };
};

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
                <div className="space-y-5">
                  {category.skills.map((skill, idx) => {
                    const { fullStars, hasHalfStar } = getLevelStars(skill.level);
                    const expertiseLevel = getExpertiseLevel(skill.level);
                    
                    return (
                      <div key={idx} className="flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge className={`${expertiseLevel.color} border-none`}>
                            {expertiseLevel.text}
                          </Badge>
                        </div>
                        <div className="flex items-center">
                          {[...Array(fullStars)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className="text-yellow-500 fill-yellow-500 mr-1" 
                            />
                          ))}
                          {hasHalfStar && (
                            <StarHalf 
                              size={18} 
                              className="text-yellow-500 fill-yellow-500 mr-1" 
                            />
                          )}
                          {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className="text-gray-300 mr-1" 
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
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

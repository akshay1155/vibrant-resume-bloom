
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarClock, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Sify Technologies Limited',
    location: 'Hyderabad, Telangana',
    period: 'July 2023 - Present',
    responsibilities: [
      'Managed various AWS services such as VPC, EC2, S3, RDS, IAM, Lambda, and API Gateway, as well as various GCP resources such as VPC, Compute Engine, Cloud Storage, Cloud Functions, Apigee, Load Balancers, and SSL certificates, achieving cost optimization and high performance.',
      'Deployed and managed Kubernetes clusters on AWS EKS, GKE, ensuring high availability and fault tolerance.',
      'Developed Terraform scripts to automate the provisioning of EKS, GKE clusters and associated resources, ensuring consistent and repeatable infrastructure deployments.',
      'Implemented security best practices, including IAM roles, security groups, storage replication for high availability and ensuring compliance with industry standards.',
      'Worked closely with development teams to troubleshoot issues and improve deployment processes.'
    ]
  },
  {
    id: 2,
    title: 'DevOps Intern',
    company: 'Sify Technologies Limited',
    location: 'Hyderabad, Telangana',
    period: 'March 2023 - May 2023',
    responsibilities: [
      'Deployed and managed scalable, highly available Kubernetes clusters using Amazon EKS. Incorporated the ALB Ingress Controller to handle HTTP and HTTPS traffic, including SSL redirect, ensuring seamless routing and load balancing.',
      'Created and managed AWS Fargate Profiles for running serverless containers on EKS, optimizing resource utilization and cost-efficiency.'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey as a Software Developer and DevOps Engineer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-10 timeline-item">
              <div className="timeline-dot"></div>

              <Card className="mb-2 overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <CalendarClock size={16} className="text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <Briefcase size={16} className="text-muted-foreground mr-2 mt-1" />
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

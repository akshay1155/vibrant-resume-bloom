
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FolderGit2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Integrated Smart Content Archival (ISCA) - BCCL',
    company: 'Sify Technologies Limited',
    description: [
      'End-to-End GCP Serverless Architecture: Proposal, implementation, and maintenance of a complete serverless architecture solution in Google Cloud Platform (GCP).',
      'Landing Zone Setup: Establishing a secure and scalable landing zone in GCP cloud services, ensuring adherence to security measures and compliance standards, and providing standardized documentation.',
      'Continuous Integration and Continuous Delivery (CI/CD) Pipelines: Automated deployment of Cloud Functions and Apigee APIs using Cloud Build, with version control through repositories.',
      'Data Migration: Successfully migrated over 80 million assets from on-premises to GCP Cloud Storage using Storage Transfer Service, ensuring data integrity validation.',
      'Developed Grafana dashboards for monitoring and configured alerting workflows using Apache Airflow.'
    ]
  },
  {
    id: 2,
    title: 'AIZEN',
    company: 'Sify Technologies Limited',
    description: [
      'AI (ML/DL) Application Deployment: Deploying AI (Machine Learning / Deep Learning) applications using Helm Charts across various Kubernetes clusters, including EKS, AKS, GKE, On-Premises (Multi-Master setup).'
    ]
  },
  {
    id: 3,
    title: 'Digital Catapult',
    company: 'Sify Technologies Limited',
    description: [
      'IoT Application AWS Infrastructure Automation: Terraform template in JSON format. The customer provided AWS cloud architecture is automated through Terraform templates, which are invoked by Cloudify CI/CD tools – utilizing Blueprints.'
    ]
  },
  {
    id: 4,
    title: 'Minimal Linux-Based Operating System with PXE Boot',
    company: 'Sify Technologies Limited',
    description: [
      'Developed a streamlined Linux-based operating system optimized for PXE boot environments, incorporating key network utilities such as nmap for network scanning, a DHCP server for automatic IP address assignment, and a TFTP server for efficient file transfer.',
      'Enabled Firefox in kiosk mode on client systems to provide a secure and controlled browsing environment.',
      'Implemented multiple security measures, including secure boot configurations, firewall settings, and regular system audits, to enhance overall system integrity and protect against potential vulnerabilities.'
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key projects I've worked on in my professional career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="project-card">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FolderGit2 className="text-primary" size={20} />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>

                <p className="text-primary mb-4">{project.company}</p>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {project.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

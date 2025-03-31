
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Software Developer with a focus on cloud technologies and infrastructure automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="mb-4 text-muted-foreground">
                Software Developer with strong expertise in cloud technologies, infrastructure automation, 
                and DevOps practices. Specialized in AWS and GCP cloud platforms, Kubernetes orchestration, 
                and Infrastructure as Code using Terraform.
              </p>
              <p className="mb-4 text-muted-foreground">
                Experience in designing and implementing end-to-end cloud solutions, with a focus on
                security, high availability, and cost optimization. Proficient in containerization and
                orchestration technologies, CI/CD pipelines, and serverless architectures.
              </p>
              <p className="text-muted-foreground">
                Currently working at Sify Technologies Limited in Hyderabad, Telangana, where I manage
                various AWS and GCP resources, deploy and maintain Kubernetes clusters, and implement
                infrastructure automation using Terraform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                  <p>Hyderabad, Telangana, India</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                  <a href="mailto:akshaykumarreddy1155@gmail.com" className="text-primary hover:underline">
                    akshaykumarreddy1155@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                  <a href="tel:+918688162268" className="hover:text-primary transition-colors">
                    +91 8688162268
                  </a>
                </div>
                <div className="pt-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Connect with me</h4>
                  <div className="flex space-x-3">
                    <Button asChild variant="outline" size="icon">
                      <a href="https://github.com/akshay1155" target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href="https://www.linkedin.com/in/reddy-akshay-kumar-824722199/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href="mailto:akshaykumarreddy1155@gmail.com">
                        <Mail size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

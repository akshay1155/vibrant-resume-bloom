
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm currently looking for new opportunities and challenges in the field of cloud engineering and DevOps. 
                    If you think I would be a good fit for your team, please don't hesitate to contact me.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="mr-3 text-primary" size={20} />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:akshaykumarreddy1155@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          akshaykumarreddy1155@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-3 text-primary" size={20} />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href="tel:+918688162268" className="text-muted-foreground hover:text-primary transition-colors">
                          +91 8688162268
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="mr-3 text-primary" size={20} />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with me on professional networks and view my code repositories and projects.
                  </p>
                  <div className="space-y-4">
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a 
                        href="https://github.com/akshay1155" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-3" size={20} />
                        GitHub: github.com/akshay1155
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a 
                        href="https://linkedin.com/in/reddy-akshay-kumar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Linkedin className="mr-3" size={20} />
                        LinkedIn: linkedin.com/in/reddy-akshay-kumar
                      </a>
                    </Button>
                    <Button asChild variant="default" className="w-full justify-start">
                      <a 
                        href="mailto:akshaykumarreddy1155@gmail.com"
                        className="flex items-center"
                      >
                        <Mail className="mr-3" size={20} />
                        Send me an email
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

export default ContactSection;

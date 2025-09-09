import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Passionate about creating innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Professional Bio</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a dedicated Web & App Developer with a strong foundation in computer science. 
                Currently pursuing my BSc in Computer Science while actively developing innovative 
                mobile and web applications. My passion lies in creating user-friendly digital 
                solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in both native Android development and modern web technologies, 
                I specialize in building responsive websites, mobile applications, and seamless 
                user experiences that drive engagement and deliver results.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Mission Statement</h3>
              <p className="text-muted-foreground leading-relaxed">
                To leverage cutting-edge technology and innovative design principles to create 
                digital solutions that empower businesses and enhance user experiences.
              </p>
            </div>

            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Education Section */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold mb-6">Education & Qualifications</h3>
            
            <Card className="card-elegant p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">BSc Computer Science</h4>
                  <p className="text-primary font-medium mb-1">University of Management and Technology (UMT) Sialkot</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - Present</span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Currently pursuing advanced studies in computer science, focusing on software development, 
                    algorithms, and modern programming paradigms.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-elegant p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">Intermediate in Computer Science (ICS)</h4>
                  <p className="text-primary font-medium mb-1">Punjab College</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>2020 - 2022</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Grade: A+
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Completed with distinction, building a strong foundation in mathematics, 
                    physics, and computer science fundamentals.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
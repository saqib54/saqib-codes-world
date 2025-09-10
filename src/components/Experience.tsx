import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Web & App Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2023 - Present",
      description: "Developing custom web and mobile applications for various clients, specializing in React, React Native, and modern web technologies.",
      achievements: [
        "Successfully delivered 15+ projects",
        "Maintained 100% client satisfaction rate",
        "Specialized in e-commerce and portfolio solutions"
      ]
    },
    {
      title: "Junior Developer",
      company: "Tech Startup",
      location: "Sialkot, Pakistan",
      period: "2022 - 2023",
      description: "Contributed to mobile app development and web solutions while gaining professional experience in software development lifecycle.",
      achievements: [
        "Developed key features for mobile applications",
        "Collaborated with senior developers on complex projects",
        "Improved code quality through testing and reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Work <span className="neon-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Professional journey in web and mobile development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="card-neon p-8 animate-slide-up" 
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold neon-text mb-2">{exp.title}</h3>
                      <p className="text-xl neon-text-pink font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right text-muted-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-5 w-5 neon-text" />
                      <span className="font-semibold">Key Achievements:</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 neon-glow"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
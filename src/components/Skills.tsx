import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  Globe, 
  GitBranch,
  Server,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      color: "text-blue-500",
      skills: [
        { name: "Android (Java)", level: 90 },
        { name: "Kotlin", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "React Native", level: 75 }
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend Development",
      color: "text-green-500",
      skills: [
        { name: "React", level: 88 },
        { name: "TypeScript", level: 82 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend & Tools",
      color: "text-purple-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "MySQL", level: 78 },
        { name: "Git", level: 88 }
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design & UI/UX",
      color: "text-pink-500",
      skills: [
        { name: "Figma", level: 75 },
        { name: "UI/UX Design", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material Design", level: 85 }
      ]
    }
  ];

  const technologies = [
    "Java", "Kotlin", "JavaScript", "TypeScript", "React", "React Native", 
    "Flutter", "Android Studio", "VS Code", "Firebase", "MySQL", "SQLite",
    "Git", "GitHub", "Figma", "Adobe XD", "Tailwind CSS", "Material UI",
    "REST APIs", "JSON", "XML", "Gradle", "Node.js", "Express.js"
  ];

  const certifications = [
    {
      title: "Android Development",
      issuer: "Google",
      year: "2023",
      level: "Professional"
    },
    {
      title: "Web Development",
      issuer: "Meta",
      year: "2023",
      level: "Certificate"
    },
    {
      title: "UI/UX Design",
      issuer: "Google",
      year: "2022",
      level: "Certificate"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Technical expertise and proficiency levels
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="card-elegant p-6 animate-slide-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies & Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center animate-slide-up">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {technologies.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-sm py-2 px-4"
                style={{ animationDelay: `${1.0 + index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Experience Level Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="card-elegant p-6 text-center animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-2">3+</h4>
            <p className="text-muted-foreground">Years of Experience</p>
          </Card>
          
          <Card className="card-elegant p-6 text-center animate-slide-up" style={{ animationDelay: '1.3s' }}>
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-2">15+</h4>
            <p className="text-muted-foreground">Projects Completed</p>
          </Card>
          
          <Card className="card-elegant p-6 text-center animate-slide-up" style={{ animationDelay: '1.4s' }}>
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <GitBranch className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-2">50+</h4>
            <p className="text-muted-foreground">GitHub Commits</p>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center animate-slide-up">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="card-elegant p-6 text-center animate-slide-up" style={{ animationDelay: `${1.5 + index * 0.1}s` }}>
                <div className="space-y-3">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{cert.title}</h4>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {cert.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
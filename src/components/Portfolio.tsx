import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Portfolio = () => {
  // Featured projects with real GitHub links
  const featuredProjects = [
    {
      title: "My Quran",
      description: "A beautiful and feature-rich Quran application for Android with clean UI, verse search, and spiritual features for daily reading.",
      image: "/api/placeholder/400/250",
      tags: ["Android", "Java", "SQLite", "UI/UX"],
      github: "https://github.com/saqib54/my-Quran",
      live: "#",
      stars: 5,
      forks: 2,
      challenge: "Creating an intuitive interface for spiritual reading experience",
      solution: "Implemented clean typography, search functionality, and smooth navigation"
    },
    {
      title: "Digital Signup Login Page",
      description: "Modern and responsive authentication system with clean design patterns and secure user management features.",
      image: "/api/placeholder/400/250",
      tags: ["HTML", "CSS", "JavaScript", "Authentication"],
      github: "https://github.com/saqib54/Digital-Signup-Login-Page",
      live: "#",
      stars: 3,
      forks: 1,
      challenge: "Building secure and user-friendly authentication flow",
      solution: "Created responsive design with form validation and modern UI patterns"
    },
    {
      title: "Sial Browser",
      description: "Custom web browser application with personalized features, bookmark management, and optimized browsing experience.",
      image: "/api/placeholder/400/250",
      tags: ["Android", "WebView", "Java", "Browser Engine"],
      github: "https://github.com/saqib54/Sial-Browser",
      live: "#",
      stars: 4,
      forks: 1,
      challenge: "Implementing full browser functionality with custom features",
      solution: "Leveraged WebView with custom controls and bookmark management system"
    }
  ];

  const allProjects = [
    {
      title: "My Quran",
      description: "Beautiful Quran app with verse search and spiritual features for daily reading.",
      tags: ["Android", "Java", "SQLite"],
      github: "https://github.com/saqib54/my-Quran",
      live: "#"
    },
    {
      title: "Digital Signup Login",
      description: "Modern authentication system with responsive design and form validation.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/saqib54/Digital-Signup-Login-Page",
      live: "#"
    },
    {
      title: "Sial Browser",
      description: "Custom browser application with bookmark management and browsing optimization.",
      tags: ["Android", "WebView", "Java"],
      github: "https://github.com/saqib54/Sial-Browser",
      live: "#"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up neon-text animate-neon-pulse">
            My <span className="neon-text-pink">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Showcasing <span className="neon-text">innovative projects</span> and real-world solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 animate-slide-up neon-text" style={{ animationDelay: '0.4s' }}>
            Featured Projects
          </h3>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className={`card-neon overflow-hidden animate-slide-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`} style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📱</div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                        <h4 className="text-2xl font-bold neon-text">{project.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-primary" />
                          {project.stars}
                          <GitFork className="h-4 w-4 ml-2 text-primary" />
                          {project.forks}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold mb-1">Challenge:</h5>
                          <p className="text-sm text-muted-foreground">{project.challenge}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Solution:</h5>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary neon-border">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                       <div className="flex gap-3 pt-4">
                         <Button 
                           size="sm" 
                           variant="neon" 
                           className=""
                           onClick={() => window.open(project.github, '_blank')}
                         >
                           <Github className="h-4 w-4 mr-2" />
                           View Code
                         </Button>
                         <Button 
                           size="sm" 
                           variant="neon-pink"
                           className=""
                           onClick={() => window.open(project.live, '_blank')}
                         >
                           <ExternalLink className="h-4 w-4 mr-2" />
                           Live Demo
                         </Button>
                       </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8 animate-slide-up neon-text-pink">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <Card key={project.title} className="card-neon p-6 animate-slide-up" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold neon-text">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs neon-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                   <div className="flex gap-2 pt-2">
                     <Button 
                       size="sm" 
                       variant="ghost" 
                       className="text-primary hover:text-primary hover:bg-primary/10 p-2"
                       onClick={() => window.open(project.github, '_blank')}
                     >
                       <Github className="h-4 w-4" />
                     </Button>
                     <Button 
                       size="sm" 
                       variant="ghost" 
                       className="text-primary hover:text-primary hover:bg-primary/10 p-2"
                       onClick={() => window.open(project.live, '_blank')}
                     >
                       <ExternalLink className="h-4 w-4" />
                     </Button>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

         <div className="text-center animate-fade-in-delay">
           <Button 
             variant="neon" 
             size="lg" 
             className=""
             onClick={() => window.open('https://github.com/saqib54', '_blank')}
           >
             <Github className="h-5 w-5 mr-2" />
             View All Projects on GitHub
           </Button>
         </div>
      </div>
    </section>
  );
};

export default Portfolio;
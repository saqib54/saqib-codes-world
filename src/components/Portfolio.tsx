import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Portfolio = () => {
  // Featured projects - these would typically come from GitHub API
  const featuredProjects = [
    {
      title: "E-Commerce Mobile App",
      description: "Full-featured Android e-commerce application with payment integration, user authentication, and real-time inventory management.",
      image: "/api/placeholder/400/250",
      tags: ["Java", "Android", "Firebase", "Stripe API"],
      github: "#",
      live: "#",
      stars: 24,
      forks: 8,
      challenge: "Building secure payment processing and real-time inventory sync",
      solution: "Implemented Firebase Firestore with secure API endpoints and encrypted payment handling"
    },
    {
      title: "Portfolio Website Builder",
      description: "React-based web application allowing users to create professional portfolios with drag-and-drop functionality and customizable themes.",
      image: "/api/placeholder/400/250",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      github: "#",
      live: "#",
      stars: 32,
      forks: 12,
      challenge: "Creating flexible component system with real-time preview",
      solution: "Built modular React components with context API for state management"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management platform with team features, real-time updates, and advanced filtering capabilities.",
      image: "/api/placeholder/400/250",
      tags: ["Android", "Kotlin", "Room DB", "MVVM"],
      github: "#",
      live: "#",
      stars: 18,
      forks: 5,
      challenge: "Implementing offline-first architecture with sync capabilities",
      solution: "Used Room database with background sync and conflict resolution"
    }
  ];

  const allProjects = [
    {
      title: "Weather Forecast App",
      description: "Clean, intuitive weather app with location services and extended forecasts.",
      tags: ["Android", "Java", "OpenWeather API"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with chart visualizations.",
      tags: ["React", "Chart.js", "API Integration"],
      github: "#",
      live: "#"
    },
    {
      title: "Inventory Management",
      description: "Business inventory tracking system with barcode scanning capabilities.",
      tags: ["Android", "Kotlin", "SQLite"],
      github: "#",
      live: "#"
    },
    // More projects would be loaded from GitHub API
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Showcasing innovative projects and real-world solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Featured Projects
          </h3>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className={`card-elegant overflow-hidden animate-slide-up ${
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
                        <h4 className="text-2xl font-bold">{project.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4" />
                          {project.stars}
                          <GitFork className="h-4 w-4 ml-2" />
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
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3 pt-4">
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
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
          <h3 className="text-2xl font-bold mb-8 animate-slide-up">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <Card key={project.title} className="card-elegant p-6 animate-slide-up" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in-delay">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
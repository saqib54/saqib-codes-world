import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Globe, Code, Palette, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App Development",
      description: "Native & hybrid mobile applications for Android with modern UI/UX design, backend integrations, and seamless performance.",
      features: [
        "Native Android (Java/Kotlin)",
        "Cross-platform solutions",
        "API integrations",
        "Play Store deployment",
        "App testing & optimization"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Design & Development",
      description: "Responsive websites and web applications built with modern technologies, optimized for performance and user experience.",
      features: [
        "Responsive design",
        "WebView-enabled apps",
        "E-commerce solutions",
        "SEO optimization",
        "Modern frameworks (React, Next.js)"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software Solutions",
      description: "Tailored software development to meet your specific business needs"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Modern, user-centered design that enhances user experience"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Development",
      description: "Robust server-side solutions with database management"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Speed and efficiency improvements for existing applications"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            What I <span className="text-primary">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="card-elegant p-8 animate-slide-up" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="bg-primary hover:bg-primary/90 w-full"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Request Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={service.title} className="card-elegant p-6 text-center animate-slide-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4 text-primary">
                {service.icon}
              </div>
              <h4 className="font-semibold mb-2">{service.title}</h4>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
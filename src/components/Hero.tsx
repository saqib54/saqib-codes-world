import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/saqib-profile.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-slide-up">
                Hi — I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Saqib Azair
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                I design & build beautiful web and mobile apps
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Web & App Developer | Computer Science Student | Creating digital solutions that make a difference
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay">
              <Button
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hero-glow"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                Contact Me
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in-delay" style={{ animationDelay: '0.8s' }}>
              <a
                href="tel:+923292899943"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                +92 329 2899943
              </a>
              <a
                href="mailto:officalyt.pk@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                officalyt.pk@gmail.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-down">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden hero-glow animate-float">
                <img
                  src={profileImage}
                  alt="Saqib Azair - Web & App Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '-1s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
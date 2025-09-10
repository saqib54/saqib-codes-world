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
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-slide-up neon-text animate-neon-pulse">
                Hi — I'm{" "}
                <span className="neon-text-pink">
                  Saqib Azair
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                I design & build beautiful{" "}
                <span className="neon-text">web</span> and{" "}
                <span className="neon-text-pink">mobile apps</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Web & App Developer | Computer Science Student | Creating{" "}
                <span className="neon-text">digital solutions</span> that make a difference
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay">
              <Button
                size="lg"
                variant="neon-gradient"
                onClick={() => scrollToSection("#portfolio")}
                className="px-8 py-3 text-lg"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="neon-pink"
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-3 text-lg"
              >
                Contact Me
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in-delay" style={{ animationDelay: '0.8s' }}>
              <a
                href="tel:+923292899943"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                +92 329 2899943
              </a>
              <a
                href="mailto:officalyt.pk@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                officalyt.pk@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/saqib-azair-22301b33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/saqib54"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-down">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden neon-glow animate-float border-2 border-primary/30">
                <img
                  src={profileImage}
                  alt="Saqib Azair - Web & App Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/30 rounded-full animate-float neon-glow" style={{ animationDelay: '-1s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/40 rounded-full animate-float neon-glow-pink" style={{ animationDelay: '-2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      {/* Freelance Badge */}
      <div className="absolute top-24 left-8 animate-fade-in-delay">
        <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 neon-glow">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium neon-text">Available for freelance work</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight animate-slide-up neon-text animate-neon-pulse tracking-tight">
                Hi — I'm{" "}
                <span className="block mt-2">
                  <span className="neon-text-pink">Saqib</span>{" "}
                  <span className="neon-text">Azair</span>
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold animate-slide-up" style={{ animationDelay: '0.2s' }}>
                I design & build{" "}
                <span className="neon-text">beautiful</span> web and{" "}
                <span className="neon-text-pink">mobile apps</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
                Computer Science student and passionate developer specializing in 
                creating innovative mobile applications and responsive web solutions 
                that deliver exceptional user experiences with cutting-edge technology.
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
              <div className="w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden animate-float relative">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={profileImage}
                      alt="Saqib Azair - Web & App Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Enhanced Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full animate-float neon-glow opacity-80" style={{ animationDelay: '-1s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full animate-float neon-glow-pink opacity-60" style={{ animationDelay: '-2s' }}></div>
              <div className="absolute top-4 -left-12 w-8 h-8 bg-primary/60 rounded-full animate-float blur-sm" style={{ animationDelay: '-0.5s' }}></div>
              <div className="absolute -bottom-4 right-8 w-6 h-6 bg-accent/60 rounded-full animate-float blur-sm" style={{ animationDelay: '-1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
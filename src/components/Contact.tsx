import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Clock,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+92 329 2899943",
      link: "tel:+923292899943",
      color: "text-green-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "officalyt.pk@gmail.com",
      link: "mailto:officalyt.pk@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Sialkot, Pakistan",
      link: "#",
      color: "text-red-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "#",
      color: "text-blue-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "New Contact Form Submission");
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:officalyt.pk@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Message prepared!",
      description: "Your email client should open with the message ready to send.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities, collaborations, and exciting projects. 
                Whether you need a mobile app, website, or just want to discuss technology, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="card-elegant p-4 animate-slide-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <a 
                    href={info.link}
                    className="flex items-center gap-4 group"
                    target={info.title === "LinkedIn" ? "_blank" : undefined}
                    rel={info.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                  >
                    <div className={`${info.color} group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Availability & Response Time */}
            <Card className="card-elegant p-6 animate-slide-up" style={{ animationDelay: '1.0s' }}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Availability</h4>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Response time: Within 24 hours</p>
                  <p>• Available for new projects</p>
                  <p>• Open to remote collaboration</p>
                  <p>• Timezone: PKT (UTC+5)</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-elegant p-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Send Message
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry, collaboration, etc."
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, requirements, timeline, or any questions you have..."
                  rows={6}
                  required
                  className="border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By sending this message, you agree that I will respond within 2 business days.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
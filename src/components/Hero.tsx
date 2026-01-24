import { MessageCircle, Download, Github, Linkedin, Mail, ArrowDown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ahmedPhoto from '@/assets/ahmed-photo.png';

const socialLinks = [
  { icon: Github, href: 'https://github.com/AhmedSaied22', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmed-saieed/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ahmedsaied2019201@gmail.com', label: 'Email' },
];

export const Hero = () => {
  const handleViewProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo - Left Side */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border bg-card">
                <img
                  src={ahmedPhoto}
                  alt="Ahmed Saied"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Quality Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div className="text-xs">
                    <span className="font-medium text-foreground">Quality</span>
                    <div className="w-16 h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-0 animate-quality-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
              {/* Headline */}
              <div className="space-y-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <p className="text-primary font-medium">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Ahmed Saied
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  Flutter Developer | Software QA (Manual + Selenium Automation)
                </p>
              </div>

              {/* Intro */}
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                I build production-ready Flutter apps with a strong quality mindset. I also have 1 year of hands-on QA experience in manual testing and automation using Selenium, focusing on stable releases and great user experience.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover gap-2"
                >
                  <a href="https://api.whatsapp.com/send/?phone=201229649437&text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl gap-2"
                >
                  <a href="https://drive.google.com/file/d/1Cquuw4xtNJfcQtJQTZle2eNjSGuNdC3O/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Flutter CV
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl gap-2"
                >
                  <a href="https://drive.google.com/file/d/1OMjyf-AKdHjBGZA19UBsxmVrOZJ-V7MS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Testing CV
                  </a>
                </Button>
              </div>

              {/* Secondary CTA */}
              <button
                onClick={handleViewProjects}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors opacity-0 animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <ArrowDown className="w-4 h-4" />
                <span className="text-sm font-medium">View Projects</span>
              </button>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Smartphone, ClipboardCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Flutter App Development',
    description: 'Full-cycle mobile app development with clean architecture.',
    features: [
      'Clean architecture patterns',
      'Responsive & adaptive UI',
      'Firebase/API integration',
      'Maintainable, scalable code',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Manual QA Testing',
    description: 'Comprehensive testing to ensure quality releases.',
    features: [
      'Test case creation & execution',
      'Exploratory & regression testing',
      'Detailed bug reports',
      'QA checklist & documentation',
    ],
  },
  {
    icon: Zap,
    title: 'Automation + API Testing',
    description: 'Efficient automated testing for faster releases.',
    features: [
      'Selenium automation scripts',
      'Postman API testing',
      'UI flow automation',
      'Clear test documentation',
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          What I can help you with
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-200 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

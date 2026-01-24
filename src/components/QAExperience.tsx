import { CheckCircle, TrendingUp } from 'lucide-react';

const experiencePoints = [
  '1 year hands-on QA focused on manual testing (functional, regression, exploratory)',
  'Strong bug reporting: steps, expected vs actual, severity/priority, evidence',
  'Created and maintained test cases and improved coverage',
  'API testing with Postman (status codes, request/response validation)',
  'Automation testing using Selenium (Java) for UI flows',
];

export const QAExperience = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Software QA
          </h2>
          <p className="text-center text-primary font-medium mb-8">1 Year Experience</p>
          
          <div className="space-y-4 mb-8">
            {experiencePoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Growth Plan</h4>
                <p className="text-sm text-muted-foreground">
                  I'm actively developing advanced automation skills and planning to grow into performance testing 
                  (e.g., JMeter) and modern automation frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

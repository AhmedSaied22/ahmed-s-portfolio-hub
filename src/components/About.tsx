export const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a <span className="text-foreground font-medium">Flutter Developer</span> with experience building production-ready mobile applications. 
            I specialize in clean architecture, state management (Bloc, Provider), REST API integration, and Firebase services. 
            Beyond development, I bring <span className="text-foreground font-medium">1 year of Software QA experience</span> in structured testing—including 
            functional, regression, and exploratory testing. I create detailed test cases, comprehensive bug reports, and ensure 
            quality through API testing with Postman and automation using Selenium (Java). My dual background helps me deliver 
            both high-quality code and thoroughly tested applications.
          </p>
        </div>
      </div>
    </section>
  );
};

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { QAExperience } from '@/components/QAExperience';
import { FlutterExperience } from '@/components/FlutterExperience';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useScrollDepthTracker } from '@/hooks/useScrollDepthTracker';

const Index = () => {
  useScrollDepthTracker();
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <QAExperience />
          <FlutterExperience />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;

import { X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal = ({ project, isOpen, onClose }: CaseStudyModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-xl animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-muted-foreground">{project.description}</p>

          {/* Challenge */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Challenge</h3>
            <p className="text-muted-foreground">{project.caseStudy.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Solution</h3>
            <p className="text-muted-foreground">{project.caseStudy.solution}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Results</h3>
            <ul className="space-y-2">
              {project.caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary font-medium">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

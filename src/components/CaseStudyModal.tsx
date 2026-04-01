import { X, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';
import { ProjectGallery } from './ProjectGallery';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal = ({ project, isOpen, onClose }: CaseStudyModalProps) => {
  const { t, language, isRTL } = useLanguage();

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-xl animate-slide-up-scale ${isRTL ? 'text-right' : ''}`}>
        {/* Header */}
        <div className={`sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-2xl font-bold text-foreground">{project.title[language]}</h2>
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
          {/* Gallery */}
          <ProjectGallery images={project.images} title={project.title[language]} />

          {/* Description */}
          <p className="text-muted-foreground">{project.description[language]}</p>

          {/* Problem */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('projects.problem')}</h3>
            <p className="text-muted-foreground">{project.caseStudy.problem[language]}</p>
          </div>

          {/* My Role */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('projects.myRole')}</h3>
            <p className="text-muted-foreground">{project.caseStudy.role[language]}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('projects.solution')}</h3>
            <p className="text-muted-foreground">{project.caseStudy.solution[language]}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{t('projects.keyFeatures')}</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.highlights[language].map((highlight) => (
                <div key={highlight} className={`flex items-center gap-2 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{t('projects.results')}</h3>
            <ul className="space-y-2">
              {project.caseStudy.results[language].map((result, index) => (
                <li key={index} className={`flex items-start gap-2 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-primary font-medium">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{t('projects.techStack')}</h3>
            <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
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

          {/* Store Links */}
          <div className={`flex flex-wrap gap-3 pt-4 border-t border-border ${isRTL ? 'justify-end' : ''}`}>
            {project.googlePlayUrl && (
              <Button
                asChild
                variant="outline"
                className="rounded-xl gap-2"
              >
                <a href={project.googlePlayUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  {t('projects.googlePlay')}
                </a>
              </Button>
            )}
            {project.appStoreUrl && (
              <Button
                asChild
                variant="outline"
                className="rounded-xl gap-2"
              >
                <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  {t('projects.appStore')}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

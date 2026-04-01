import { ExternalLink, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectGallery } from './ProjectGallery';
import { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenCaseStudy }: ProjectCardProps) => {
  const { t, language, isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const hasStoreLinks = Boolean(project.googlePlayUrl || project.appStoreUrl);
  const storeNote =
    project.storeStatus === 'internal'
      ? t('projects.internalNote')
      : project.storeStatus === 'comingSoon'
        ? t('projects.comingSoonNote')
        : null;

  return (
    <TooltipProvider>
      <div
        className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ease-out relative"
        dir={isRTL ? 'rtl' : 'ltr'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* QA Tooltip on hover */}
        {isHovered && (
          <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} z-10 animate-fade-in`}>
            <Tooltip open>
              <TooltipTrigger asChild>
                <div className="p-2 bg-primary/10 rounded-full border border-primary/20">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
              </TooltipTrigger>
              <TooltipContent side={isRTL ? 'left' : 'right'} className="max-w-[200px]">
                <p className="text-xs">{t('projects.qaTooltip')}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}

        <ProjectGallery images={project.images} title={project.title[language]} />

        <div className="p-6">
          {project.badge && (
            <div className="mb-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                {project.badge[language]}
              </span>
            </div>
          )}
          <h3 className="text-xl font-bold text-foreground mb-2">
            {project.title[language]}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description[language]}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            {project.googlePlayUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-lg gap-1.5 text-xs"
              >
                <a href={project.googlePlayUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t('projects.googlePlay')}
                </a>
              </Button>
            )}
            {project.appStoreUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-lg gap-1.5 text-xs"
              >
                <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t('projects.appStore')}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-lg gap-1.5 text-xs"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t('projects.github')}
                </a>
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              className="rounded-lg gap-1.5 text-xs text-primary hover:text-primary"
              onClick={() => onOpenCaseStudy(project)}
            >
              <FileText className="w-3.5 h-3.5" />
              {t('projects.caseStudy')}
            </Button>
          </div>

          {!hasStoreLinks && storeNote && (
            <p className="mt-3 text-xs text-muted-foreground">
              {storeNote}
            </p>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

import { ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectGallery } from './ProjectGallery';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenCaseStudy }: ProjectCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-200">
      <ProjectGallery images={project.images} title={project.title} />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
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
                Google Play
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
                App Store
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
            Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

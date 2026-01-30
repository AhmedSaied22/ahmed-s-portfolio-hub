import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';
import { useProjects } from '@/hooks/useProjects';

export const Projects = () => {
  const { t } = useLanguage();
  const { projects, loading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'featured' | 'practice' | 'all'>('featured');

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filters = [
    { key: 'featured', label: t('projects.filters.featured') },
    { key: 'practice', label: t('projects.filters.practice') },
    { key: 'all', label: t('projects.filters.all') },
  ] as const;

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          {t('projects.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${activeFilter === filter.key
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                project={project}
                onOpenCaseStudy={handleOpenCaseStudy}
              />
            </div>
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

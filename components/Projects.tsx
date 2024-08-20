import React from 'react';

import { PROJECTS } from '@/constants/personal';

import ProjectCard from './molecules/ProjectCard';

function reorderList(list: any[]) {
  let oddIndexed = list.filter((_, index) => index % 2 === 0);
  let evenIndexed = list.filter((_, index) => index % 2 !== 0);

  return [...oddIndexed, ...evenIndexed];
}

const Projects = () => {
  const projects = reorderList(PROJECTS);
  return (
    <section className="no-scrollbar flex w-full min-w-[300px] flex-row gap-2 lg:h-[100dvh] lg:w-[45dvw] lg:overflow-y-scroll">
      <div className="no-scrollbar h-fit w-full columns-1 gap-2 space-y-2 overflow-y-scroll pt-2 sm:columns-2 lg:columns-1 xl:columns-2">
        {projects.map((project, key) => (
          <ProjectCard
            image_url={project.image_url}
            to={project.to}
            tags={project.tags}
            title={project.title}
            type={project.type}
            key={key}
            alt={project.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

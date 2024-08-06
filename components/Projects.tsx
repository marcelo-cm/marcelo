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
    <section className="w-full min-w-[300px] lg:w-[45dvw] lg:h-[100dvh] flex flex-row gap-2 lg:overflow-y-scroll no-scrollbar">
      <div className="columns-1 sm:columns-2 lg:columns-1 xl:columns-2 space-y-2 h-fit w-full gap-2 pt-2 overflow-y-scroll no-scrollbar">
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

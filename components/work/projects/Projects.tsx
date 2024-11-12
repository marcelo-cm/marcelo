'use client';

import React, { useEffect } from 'react';

import Masonry from 'react-responsive-masonry';

import { PROJECTS } from '@/constants/personal';

import ProjectCard from './project-card';

const Projects = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1080);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="no-scrollbar flex w-full flex-row gap-2 lg:h-[100dvh] lg:w-[50dvw] lg:overflow-y-scroll">
      <div className="no-scrollbar h-fit w-full columns-1 gap-2 space-y-2 overflow-y-scroll p-2 md:columns-2 lg:columns-1 xl:columns-2">
        {PROJECTS.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

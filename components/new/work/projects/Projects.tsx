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
    <section className="w-dvw md:max-w-[50dvw] md:overflow-scroll">
      <Masonry columnsCount={isMobile ? 1 : 2} gutter="8px">
        {PROJECTS.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </Masonry>
    </section>
  );
};

export default Projects;

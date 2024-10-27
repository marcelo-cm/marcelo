'use client';

import React from 'react';

import Masonry from 'react-responsive-masonry';

import { PROJECTS } from '@/constants/personal';

import ProjectCard from './project-card';

const Projects = () => {
  return (
    <section className="w-dvw md:max-w-[50dvw] md:overflow-scroll">
      <Masonry columnsCount={2} gutter="8px">
        {PROJECTS.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </Masonry>
    </section>
  );
};

export default Projects;

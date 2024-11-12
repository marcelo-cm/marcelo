import React from 'react';

import { RESUME } from '@/constants/personal';

import ResumeSection from './resume-section';

const Resume = () => {
  return (
    <div className="w-full md:pb-24">
      {RESUME.map((item, idx) => (
        <ResumeSection {...item} key={idx} />
      ))}
    </div>
  );
};

export default Resume;

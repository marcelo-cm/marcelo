import React from 'react';

import { RESUME } from '@/constants/personal';

import TitleWithIcons from './(shared)/TitleWithIcons';
import ResumeSection from './molecules/ResumeSection';

const Resume = () => {
  return (
    <section className="h-fit w-full flex flex-col xl:w-[55dvw] lg:h-full items-center gap-4 lg:overflow-y-scroll lg:py-16 no-scrollbar pt-16">
      <TitleWithIcons />
      <div className="h-fit max-w-[700px] w-4/5 flex flex-col gap-4">
        {RESUME.map((item, key) => (
          <ResumeSection
            title={item.title}
            website={item.website}
            organization={item.organization}
            date={item.date}
            description={item.description}
            key={key}
          />
        ))}
      </div>
    </section>
  );
};

export default Resume;

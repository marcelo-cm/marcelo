import React from 'react';

import { RESUME } from '@/constants/personal';

import TitleWithIcons from './(shared)/TitleWithIcons';
import ResumeSection from './molecules/ResumeSection';

const Resume = () => {
  return (
    <section className="no-scrollbar flex h-fit w-full flex-col items-center gap-4 pt-16 lg:h-full lg:overflow-y-scroll lg:py-16 xl:w-[55dvw]">
      <TitleWithIcons />
      <div className="flex h-fit w-4/5 max-w-[700px] flex-col gap-4">
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

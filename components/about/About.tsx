import React from 'react';

import { ABOUT } from '@/constants/personal';

import TitleWithIcons from '../(shared)/TitleWithIcons';
import AboutSection from './AboutSection';

const About = () => {
  return (
    <section className="no-scrollbar flex h-fit w-full flex-col items-center gap-4 py-16 xl:h-[100dvh] xl:w-[50dvw] xl:overflow-y-scroll">
      <TitleWithIcons />
      <div className="flex h-fit w-4/5 max-w-[700px] flex-col gap-6">
        {ABOUT.map((item, key) => (
          <AboutSection
            title={item.title}
            description={item.description}
            key={key}
          />
        ))}
      </div>
    </section>
  );
};

export default About;

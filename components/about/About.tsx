import React from 'react';

import { ABOUT } from '@/constants/personal';

import TitleWithIcons from '../(shared)/TitleWithIcons';
import AboutSection from './AboutSection';

const About = () => {
  return (
    <section className="h-fit w-full xl:w-[50dvw] xl:h-[100dvh] flex flex-col items-center gap-4 xl:overflow-y-scroll py-16 no-scrollbar">
      <TitleWithIcons />
      <div className="max-w-[700px] w-4/5 flex flex-col gap-6 h-fit">
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

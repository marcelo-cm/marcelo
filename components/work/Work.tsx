import React from 'react';

import TitleWithIcons from '../common/title-icon';
import Resume from './resume';

const Work = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-16 px-8 py-16 lg:w-[50dvw] lg:overflow-y-scroll">
      <div className="flex h-full w-full max-w-[700px] flex-col gap-4">
        <TitleWithIcons />
        <Resume />
      </div>
    </section>
  );
};

export default Work;

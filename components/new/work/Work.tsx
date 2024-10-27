import React from 'react';

import TitleWithIcons from '../common/title-icon';
import Resume from './resume';

const Work = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-16 overflow-y-scroll px-4 py-16 md:w-[50dvw]">
      <div className="flex w-full max-w-[700px] flex-col gap-4">
        <TitleWithIcons />
        <Resume />
      </div>
    </section>
  );
};

export default Work;

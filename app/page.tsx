import React from 'react';

import Work from '@/components/new/work/Work';
import Projects from '@/components/new/work/projects/Projects';

const page = () => {
  return (
    <div className="flex h-dvh flex-col-reverse md:flex-row md:overflow-scroll">
      <Projects />
      <Work />
    </div>
  );
};

export default page;

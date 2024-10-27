import React from 'react';

import Work from '@/components/new/work/Work';
import Projects from '@/components/new/work/projects/Projects';

const page = () => {
  return (
    <div className="flex h-dvh flex-col overflow-scroll lg:flex-row-reverse">
      <Work />
      <Projects />
    </div>
  );
};

export default page;

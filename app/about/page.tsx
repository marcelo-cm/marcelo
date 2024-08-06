import React from 'react';

import About from '@/components/about/About';
import Photos from '@/components/about/Photos';

export default function Home() {
  return (
    <main className="h-fit xl:h-full w-[100dvw] flex flex-col xl:flex-row gap-4 xl:gap-0 items-center overflow-y-scroll xl:overflow-hidden no-scrollbar">
      <About />
      <Photos />
    </main>
  );
}

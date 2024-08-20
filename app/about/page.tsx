import React from 'react';

import About from '@/components/about/About';
import Photos from '@/components/about/Photos';

export default function Home() {
  return (
    <main className="no-scrollbar flex h-fit w-[100dvw] flex-col items-center gap-4 overflow-y-scroll xl:h-full xl:flex-row xl:gap-0 xl:overflow-hidden">
      <About />
      <Photos />
    </main>
  );
}

'use client';

import React, { useEffect, useTransition } from 'react';

import Image from 'next/image';

import { createClient } from '@/lib/utils/supabase/client';

const supabase = createClient();

const page = () => {
  const [logoURL, setLogoURL] = React.useState('regular-ppl-filled.svg');
  const [artURL, setArtURL] = React.useState('/peru.jpg');
  const [artURLQueue, setArtURLQueue] = React.useState<string[]>([]);
  const [isLoadingArt, setIsLoadingArt] = React.useState(false);

  useEffect(() => {
    if (!artURLQueue.length) {
      handleArtClick();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoURL((prev) =>
        prev === 'regular-ppl-filled.svg'
          ? 'regular-ppl-outlined.svg'
          : 'regular-ppl-filled.svg',
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleArtClick = async () => {
    const filename = await supabase.rpc('select_random_image');
    console.log(filename);
    const fileURL = supabase.storage.from('images').getPublicUrl(filename.data);
    console.log();

    setArtURL(fileURL.data.publicUrl);
  };

  return (
    <section className="h-dvh w-dvw overflow-hidden p-2">
      <div
        className={`z-50 h-full w-full overflow-hidden rounded-lg border-2 border-neutral-800`}
      >
        <Image
          src={artURL}
          alt="art"
          width={1080}
          height={1080}
          className={`fill h-full w-full select-none object-cover object-center ${isLoadingArt ? 'blur-xl' : ''} transition-all duration-500`}
          onClick={handleArtClick}
          onLoad={() => setIsLoadingArt(false)}
          priority
          quality={50}
          loading="eager"
        />
      </div>
      <Image
        src={logoURL}
        alt="REGuLAR PEOPLE DO COOL SH*T"
        width={50}
        height={50}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-fit w-3/4 -translate-x-1/2 -translate-y-1/2 transform mix-blend-difference md:size-1/3"
      />
    </section>
  );
};

export default page;

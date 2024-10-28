'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';

const page = () => {
  const [logoURL, setLogoURL] = React.useState('regular-ppl-filled.svg');
  const [artURL, setArtURL] = React.useState('/peru.jpg');

  useEffect(() => {
    handleArtClick();
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

  const handleArtClick = () => {
    fetch('/api/random-photo').then(async (res) => {
      const url = await res.json();
      setArtURL(url);
    });
  };

  return (
    <section className="h-dvh w-dvw overflow-hidden p-2">
      <button
        className="z-50 h-full w-full overflow-hidden rounded-lg border-2 border-neutral-800"
        onClick={handleArtClick}
      >
        <Image
          src={artURL}
          alt="art"
          width={300}
          height={300}
          className="fill h-full w-full select-none object-cover object-center"
          unoptimized
        />
      </button>
      <Image
        src={logoURL}
        alt="REGuLAR PEOPLE DO COOL SH*T"
        width={50}
        height={50}
        className="pointer-events-none absolute left-1/2 top-1/2 size-3/4 -translate-x-1/2 -translate-y-1/2 transform mix-blend-difference md:size-1/3"
        objectPosition="center"
      />
    </section>
  );
};

export default page;

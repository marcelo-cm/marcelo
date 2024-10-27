'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';

const page = () => {
  const [logoURL, setLogoURL] = React.useState('regular-ppl-filled.svg');

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

  return (
    <section className="h-dvh w-dvw overflow-hidden p-2">
      <p className="absolute left-1/2 top-6 w-full -translate-x-1/2 text-center font-medium mix-blend-difference">
        THIS PAGE IS A WORK IN PROGRESS.
      </p>
      <div className="h-full w-full overflow-hidden rounded-lg border-2 border-neutral-800">
        <Image
          src={'/peru.jpg'}
          alt="art"
          width={300}
          height={300}
          className="fill h-full w-full object-cover object-center"
          unoptimized
          unselectable="on"
        />
      </div>
      <Image
        src={logoURL}
        alt="REGuLAR PEOPLE DO COOL SH*T"
        width={50}
        height={50}
        className="absolute left-1/2 top-1/2 size-3/4 -translate-x-1/2 -translate-y-1/2 transform mix-blend-difference md:size-1/3"
        objectPosition="center"
      />
    </section>
  );
};

export default page;

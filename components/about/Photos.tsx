import React from 'react';

import Image from 'next/image';

const Photos = () => {
  let artListFormat: string[] = [];

  for (let x = 1; x <= 70; x++) {
    artListFormat.push(`/about-images/art/art_${x}.jpg`);
  }

  let fashionListFormat: string[] = ['/about-images/fashion/fashion_100.gif'];

  for (let x = 1; x <= 13; x++) {
    fashionListFormat.push(`/about-images/fashion/fashion_${x}.png`);
  }

  const photos = [
    {
      title: 'Fashion',
      description: 'What sparked my interest in design.',
      photos: fashionListFormat,
    },
    {
      title: 'Photography & Art',
      description: 'What I would do if I could never write code again.',
      photos: artListFormat,
    },
  ];

  return (
    <section className="no-scrollbar flex h-fit w-full flex-col gap-2 xl:h-dvh xl:w-[50dvw] xl:overflow-y-scroll xl:pt-16">
      <div className="no-scrollbar flex h-fit w-full flex-col gap-8">
        {photos.map((category, key) => (
          <div key={key}>
            <div className="z-50 mb-2 ml-[20px]">
              {category.title}
              <p className="inline font-light text-u-300">
                {' '}
                - {category.description}
              </p>
            </div>
            <div className="relative h-full">
              <div className="no-scrollbar static flex h-[300px] w-full flex-row gap-2 overflow-x-scroll px-4 xl:w-[50dvw]">
                <div className="absolute left-0 z-40 h-full w-4 bg-gradient-to-r from-[#161616] to-[#161616]/0" />
                {category.photos.map((photo, key) => (
                  <Image
                    src={photo}
                    alt="Photo"
                    key={key}
                    width={400}
                    height={300}
                    className="flex h-full w-full rounded-lg border-[2px] border-u-900/25 bg-u-950"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;

import React from 'react';

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
    <section className="h-fit xl:h-dvh w-full xl:w-[50dvw] flex flex-col gap-2 xl:overflow-y-scroll xl:pt-16 no-scrollbar">
      <div className="h-fit w-full flex flex-col gap-8 no-scrollbar">
        {photos.map((category, key) => (
          <div key={key}>
            <div className="mb-2 ml-[20px] z-50">
              {category.title}
              <p className="inline font-light text-[#A0A0A0]">
                {' '}
                – {category.description}
              </p>
            </div>
            <div className="h-full relative">
              <div className="flex flex-row w-full xl:w-[50dvw] h-[300px] overflow-x-scroll gap-2 no-scrollbar px-4 static">
                <div className="bg-gradient-to-r from-[#161616] to-[#161616]/0 absolute left-0 h-full w-4 z-40" />
                {category.photos.map((photo, key) => (
                  <img
                    src={photo}
                    alt=""
                    key={key}
                    className="w-full h-full border-[2px] border-[#2e2e2e] flex bg-[#1C1C1C] rounded-lg "
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

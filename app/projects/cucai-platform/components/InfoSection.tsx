import React from 'react';

import Image from 'next/image';

const InfoSection = ({
  title,
  description,
  children,
  image,
  imagePosition = 'right',
  level = 1,
  className,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  image?: string;
  imagePosition?: 'left' | 'right';
  level?: number;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-full gap-8 max-[1376px]:flex-col lg:ml-${
        level * 2
      } ${className}`}
      id={title}
    >
      {image && imagePosition == 'left' ? (
        <Image
          src={image}
          alt="Project Image"
          className="max-h-[400px] w-fit rounded-xl border-4 border-white/5 md:h-[650px] md:border-8 min-[1376px]:h-[350px]"
          width={200}
          height={200}
        />
      ) : null}
      <div className={`w-full ${''} flex flex-col gap-2`} id="Overview">
        <h1
          className={`${
            level == 1
              ? 'max-w-[700px] text-2xl'
              : level == 2
                ? `text-xl italic`
                : null
          } w-full md:min-w-[530px]`}
        >
          {title}
          <p className="inline font-light text-u-300">–{description}</p>
        </h1>
        {children}
      </div>
      {image && imagePosition == 'right' ? (
        <Image
          src={image}
          alt="Project Image"
          className="max-h-[400px] w-fit rounded-xl border-4 border-white/5 md:h-[650px] md:border-8 min-[1376px]:h-[350px]"
          width={500}
          height={400}
        />
      ) : null}
    </div>
  );
};

export default InfoSection;

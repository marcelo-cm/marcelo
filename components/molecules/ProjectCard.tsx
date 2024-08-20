import React from 'react';

import Image from 'next/image';

const ProjectCard = ({
  image_url,
  alt,
  to,
  tags,
  title,
  type,
}: {
  image_url: string;
  alt: string;
  to: string;
  tags: string[];
  title: string;
  type: string;
}) => {
  const Tag = ({ tag }: { tag: string }) => {
    return (
      <div className="flex select-none items-center justify-center rounded-full bg-white/10 px-[12px] py-[6px] text-[80%]">
        <p className="whitespace-nowrap font-semibold [text-shadow:_0_0_5px_rgb(255_255_255_/_50%)]">
          {tag}
        </p>
      </div>
    );
  };

  return (
    <a
      className="flex h-fit w-full cursor-pointer break-inside-avoid flex-col gap-2 rounded-xl border-[1px] border-[#2e2e2e] bg-[#1C1C1C] p-2 transition-all duration-300 hover:shadow-xl active:scale-[103%]"
      href={to}
      target="_blank"
    >
      {/* IMAGE */}
      <div className="overflow-none relative rounded-md">
        <Image
          src={image_url}
          width={400}
          height={300}
          alt={alt}
          unoptimized
          className="h-full w-full rounded-md object-fill transition-all duration-300 hover:brightness-[0.8]"
        />
        <div className="overflow-none absolute bottom-0 left-0 flex w-full items-center justify-between rounded-md p-3 pt-4 text-[15px]">
          <p className="z-50 font-light">{title}</p>
          <div className="z-50 flex gap-2">
            {tags.map((tag, key) => (
              <Tag tag={tag} key={key} />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 h-full w-full rounded-md bg-gradient-to-b from-black/0 to-black/50" />
        </div>
      </div>
      {to.length ? (
        <div className="flex h-12 items-center justify-center rounded-md bg-[#232323] transition-all hover:bg-[#292929]">
          <p className="select-none">View {type}</p>
        </div>
      ) : null}
    </a>
  );
};

export default ProjectCard;

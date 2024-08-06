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
      <div className="flex items-center justify-center py-[6px] px-[12px] bg-white/10 rounded-full select-none text-[80%]">
        <p className="font-semibold [text-shadow:_0_0_5px_rgb(255_255_255_/_50%)] whitespace-nowrap">
          {tag}
        </p>
      </div>
    );
  };

  return (
    <a
      className="active:scale-[103%] break-inside-avoid border-[1px] border-[#2e2e2e] w-full h-fit bg-[#1C1C1C] rounded-xl p-2 flex flex-col gap-2 cursor-pointer transition-all duration-300 hover:shadow-xl"
      href={to}
      target="_blank"
    >
      {/* IMAGE */}
      <div className="relative rounded-md overflow-none">
        <Image
          src={image_url}
          width={400}
          height={300}
          alt={alt}
          unoptimized
          className="rounded-md object-fill h-full w-full  hover:brightness-[0.8] transition-all duration-300"
        />
        <div className="w-full flex justify-between items-center pt-4 p-3 rounded-md overflow-none absolute left-0 bottom-0 text-[15px]">
          <p className="z-50 font-light">{title}</p>
          <div className="flex gap-2 z-50">
            {tags.map((tag, key) => (
              <Tag tag={tag} key={key} />
            ))}
          </div>
          <div className="w-full h-full absolute left-0 bottom-0 bg-gradient-to-b from-black/0 to-black/50 rounded-md" />
        </div>
      </div>
      {to.length ? (
        <div className="flex items-center justify-center h-12 bg-[#232323] hover:bg-[#292929] rounded-md transition-all">
          <p className="select-none">View {type}</p>
        </div>
      ) : null}
    </a>
  );
};

export default ProjectCard;

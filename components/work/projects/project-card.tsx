import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image_url: string;
  to: string;
  title: string;
  type: string;
}

const ProjectCard = ({ image_url, to, title, type }: ProjectCardProps) => {
  return (
    <Link
      className="flex h-fit cursor-pointer flex-col gap-2 rounded-xl border border-neutral-800 bg-neutral-900 p-2 transition-all duration-300 hover:shadow-xl"
      target="_blank"
      href={to}
    >
      <div className="overflow-none relative rounded-md">
        <Image
          src={image_url}
          width={400}
          height={300}
          alt={title}
          className="h-full w-full rounded-md object-fill transition-all duration-300 hover:brightness-[0.8]"
        />
        <div className="overflow-none absolute bottom-0 left-0 flex w-full items-center justify-between rounded-md p-3 pt-4 text-[15px]">
          <p className="z-50 font-light">{title}</p>
          <div className="absolute bottom-0 left-0 h-full w-full rounded-md bg-gradient-to-b from-black/0 to-black/50" />
        </div>
      </div>
      {to.length ? (
        <div className="flex h-12 items-center justify-center rounded-md bg-neutral-800/50 transition-all hover:bg-neutral-800">
          <p className="select-none">View {type}</p>
        </div>
      ) : null}
    </Link>
  );
};

export default ProjectCard;

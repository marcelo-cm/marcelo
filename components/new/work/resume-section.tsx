import React from 'react';

import Link from 'next/link';

import CustomLink from '@/components/ui/custom-link';

interface ResumeSectionProps {
  title: string;
  organization: string;
  website: string;
  date: string;
  description: string;
}

const ResumeSection = ({ date, description, ...props }: ResumeSectionProps) => {
  return (
    <div className="mb-4 h-fit leading-tight">
      <div className="flex flex-col xl:flex-row xl:items-center">
        <PositionOrg {...props} />
        <hr className="mx-4 hidden h-px border-0 bg-neutral-800 sm:block sm:flex-1" />
        <p className="mb-1 whitespace-nowrap break-keep text-neutral-400">
          {date}
        </p>
      </div>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};

const PositionOrg = ({
  title,
  organization,
  website,
}: {
  title: string;
  organization: string;
  website: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="flex flex-row whitespace-nowrap">
        {title} {' '}
        <hr className="mx-4 my-auto flex h-px flex-1 border-0 bg-neutral-800 md:hidden" />
      </div>

      <h3 className="flex-row flex-nowrap text-neutral-400 md:flex">
        <p className="hidden md:inline">— {' '}</p>
        {website ? (
          <Link
            href={website}
            className="w-fit whitespace-nowrap text-neutral-400 underline underline-offset-2 hover:text-neutral-50"
          >
            {organization}
          </Link>
        ) : (
          organization
        )}
      </h3>
      <hr className="mx-4 my-auto hidden h-px flex-1 border-0 bg-neutral-800 md:flex xl:hidden" />
    </div>
  );
};

export default ResumeSection;

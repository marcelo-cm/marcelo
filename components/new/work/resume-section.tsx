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
    <div className="mb-4 leading-tight">
      <div className="mb-1 flex flex-row items-center">
        <PositionOrg {...props} />
        <hr className="invisible mx-4 h-px border-0 bg-neutral-800 sm:visible sm:flex-1" />
        <p className="whitespace-nowrap break-keep text-neutral-400">{date}</p>
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
    <div className="flex flex-row">
      <p className="whitespace-nowrap">
        {title} {' '}
      </p>
      <h3 className="text-neutral-400">
        —
        {website ? (
          <Link
            href={website}
            className="ml-2 w-fit whitespace-nowrap text-neutral-400 underline underline-offset-2 hover:text-neutral-50"
          >
            {organization}
          </Link>
        ) : (
          organization
        )}
      </h3>
    </div>
  );
};

export default ResumeSection;

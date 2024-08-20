import React from 'react';

import CustomLink from '../ui/custom-link';

const ResumeSection = ({
  title,
  website,
  organization,
  date,
  description,
}: {
  title: string;
  website: string;
  organization: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="flex h-fit w-full flex-col font-light">
      <div className="items-left mb-[2px] flex w-full flex-col sm:flex-row sm:items-center">
        <div className="text-normal flex flex-col sm:flex-row">
          <div className="flex w-full flex-row items-center whitespace-nowrap sm:w-fit">
            {title}{' '}
            <hr className="mx-4 h-px w-0 flex-1 border-0 bg-[#A0A0A0]/10 sm:hidden" />
          </div>
          <div className="inline w-full text-[#A0A0A0]">
            <p className="ml-[4px] hidden sm:inline"> – </p>
            {website ? (
              <CustomLink to={website} icon underline={false}>
                {organization}
              </CustomLink>
            ) : (
              organization
            )}
          </div>
        </div>
        <hr className="invisible mx-4 h-px border-0 bg-[#A0A0A0]/10 sm:visible sm:flex-1" />
        <p className="whitespace-nowrap break-keep text-[#A0A0A0]">{date}</p>
      </div>
      <p className="leading-tight text-[#A0A0A0]">{description}</p>
    </div>
  );
};

export default ResumeSection;

import React from "react";
import CustomLink from "./CustomLink";

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
    <div className="flex flex-col w-full font-light h-fit">
      <div className="flex flex-col sm:flex-row w-full items-left sm:items-center mb-[2px]">
        <div className="text-normal flex flex-col sm:flex-row">
          <div className="w-full sm:w-fit flex flex-row whitespace-nowrap items-center">
            {title}{" "}
            <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 flex-1 sm:hidden w-0" />
          </div>
          <div className="inline text-[#A0A0A0] w-full">
            <p className="hidden sm:inline ml-[4px]"> – </p>
            {website ? (
              <CustomLink to={website} icon underline={false}>
                {organization}
              </CustomLink>
            ) : (
              organization
            )}
          </div>
        </div>
        <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 sm:flex-1 invisible sm:visible" />
        <p className="text-[#A0A0A0] break-keep whitespace-nowrap">{date}</p>
      </div>
      <p className="text-[#A0A0A0] leading-tight">{description}</p>
    </div>
  );
};

export default ResumeSection;

import React, { Fragment } from 'react';

const AboutSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const descriptionLines = description.split('\n');

  return (
    <div className="flex flex-col gap-[4px] w-full font-light">
      <div className="flex flex-row w-full items-center mb-[2px] text-[#A0A0A0] font-normal text-xs">
        {title} <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 flex-1" />
      </div>
      <p className="leading-normal tracking-wide">
        {descriptionLines.map((line, index) => (
          <Fragment key={index}>
            {line}
            {index < descriptionLines.length - 1 && <br />}
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default AboutSection;

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
    <div className="flex w-full flex-col gap-[4px] font-light">
      <div className="mb-[2px] flex w-full flex-row items-center text-xs font-normal text-u-300">
        {title} <hr className="mx-4 h-px flex-1 border-0 bg-u-300/10" />
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

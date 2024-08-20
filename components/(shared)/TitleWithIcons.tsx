import React from 'react';

import IconBar from '../molecules/IconBar';

const TitleWithIcons = () => {
  return (
    <>
      <h1 className="w-4/5 max-w-[700px] text-4xl">
        Marcelo Chaman Mallqui
        <p className="inline font-light text-[#A0A0A0]">
          –Product Designer, Software Engineer & Founder
        </p>
      </h1>
      <IconBar />
    </>
  );
};

export default TitleWithIcons;

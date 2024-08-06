import React from 'react';

import IconBar from '../molecules/IconBar';

const TitleWithIcons = () => {
  return (
    <>
      <h1 className="text-4xl max-w-[700px] w-4/5">
        Marcelo Chaman Mallqui
        <p className="text-[#A0A0A0] inline font-light">
          –Product Designer, Software Engineer & Founder
        </p>
      </h1>
      <IconBar />
    </>
  );
};

export default TitleWithIcons;

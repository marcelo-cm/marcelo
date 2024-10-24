import React from 'react';

import IconBar from '../molecules/IconBar';

const TitleWithIcons = () => {
  return (
    <>
      <h1 className="w-[90%] max-w-[700px] text-4xl">
        Marcelo Chaman Mallqui
        <span className="text-u-300 font-light">
          –Product Designer, Software Engineer & Founder
        </span>
      </h1>
      <IconBar />
    </>
  );
};

export default TitleWithIcons;

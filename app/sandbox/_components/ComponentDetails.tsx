import React from 'react';

const ComponentDetails = ({ children }: { children: React.ReactNode }) => {
  if (!children) {
    return null;
  }

  return (
    <div className="no-scrollbar absolute top-6 w-[90dvw] overflow-scroll rounded-lg border border-[#2e2e2e] bg-[#161616] p-4 md:w-[700px]">
      {children}
    </div>
  );
};

export default ComponentDetails;

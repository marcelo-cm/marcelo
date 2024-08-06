import React from 'react';

const ComponentDetails = ({ children }: { children: React.ReactNode }) => {
  if (!children) {
    return null;
  }

  return (
    <div className="absolute top-6 bg-[#161616] w-[90dvw] md:w-[700px] overflow-scroll no-scrollbar border border-[#2e2e2e] rounded-lg p-4">
      {children}
    </div>
  );
};

export default ComponentDetails;

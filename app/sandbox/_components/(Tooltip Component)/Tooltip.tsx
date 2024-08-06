import React, { useState } from 'react';

import TooltipContext from './TooltipContext';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

const Tooltip = ({ children, content }: TooltipProps) => {
  if (!content) {
    throw new Error('Tooltip must have content');
  }

  const [isOpen, setIsOpen] = useState(false);

  const contextValue = { content };

  return (
    <TooltipContext.Provider value={contextValue}>
      {isOpen ? (
        <div className="bg-black text-white py-2 px-4 absolute top-0 translate-y-1/2 z-10 rounded-md">
          {content}
        </div>
      ) : null}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

export default Tooltip;

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
        <div className="absolute top-0 z-10 translate-y-1/2 rounded-md bg-black px-4 py-2 text-white">
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

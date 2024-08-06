import React from 'react';

interface TooltipContextType {
  content: string;
}

const defaultContextValue: TooltipContextType = { content: '' };

const TooltipContext =
  React.createContext<TooltipContextType>(defaultContextValue);

export default TooltipContext;

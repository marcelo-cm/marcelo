import React from 'react';

interface ComboContextType {
  selectedOptions: { value: string | number; display: string }[] | null;
  focusedIndex: number | null;
  handleItemClick: (option: {
    value: string | number;
    display: string;
  }) => void;
}

const defaultContextValue: ComboContextType = {
  selectedOptions: null,
  focusedIndex: null,
  handleItemClick: () => {},
};

const ComboContext = React.createContext<ComboContextType>(defaultContextValue);

export default ComboContext;

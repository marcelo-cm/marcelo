import React from 'react';

interface MultiSelectContextType {
  selectedOptions: { value: string | number; display: string }[] | null;
  focusedIndex: number | null;
  handleItemClick: (option: {
    value: string | number;
    display: string;
  }) => void;
}

const defaultContextValue: MultiSelectContextType = {
  selectedOptions: null,
  focusedIndex: null,
  handleItemClick: () => {},
};

const SelectContext =
  React.createContext<MultiSelectContextType>(defaultContextValue);

export default SelectContext;

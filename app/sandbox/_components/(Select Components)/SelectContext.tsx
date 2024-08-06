import React from 'react';

interface SelectContextType {
  selectedValue: string | number | null;
  selectedDisplay: string | number | null;
  focusedIndex: number | null;
  handleItemClick: (
    displayValue: string | number,
    itemValue: string | number,
  ) => void;
}

const defaultContextValue: SelectContextType = {
  selectedValue: null,
  selectedDisplay: null,
  focusedIndex: null,
  handleItemClick: () => {},
};

const SelectContext =
  React.createContext<SelectContextType>(defaultContextValue);

export default SelectContext;

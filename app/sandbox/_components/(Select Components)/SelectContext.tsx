import React from "react";

interface SelectContextType {
  selectedValue: string | number | null;
  selectedDisplay: string | number | null;
  focusedIndex: number | null;
  handleItemClick: (
    displayValue: string | number,
    itemValue: string | number
  ) => void;
  // any other state or handlers
}

const defaultContextValue: SelectContextType = {
  selectedValue: null,
  selectedDisplay: null,
  focusedIndex: null,
  handleItemClick: () => {}, // Dummy function, actual implementation will be in Select
  // default values for any other state or handlers
};

const SelectContext =
  React.createContext<SelectContextType>(defaultContextValue);

export default SelectContext;

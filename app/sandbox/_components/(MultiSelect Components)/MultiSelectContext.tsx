import React from "react";

interface MultiSelectContextType {
  selectedValues: (string | number | null)[];
  selectedDisplays: (string | number | null)[];
  handleItemClick: (
    displayValue: string | number,
    itemValue: string | number
  ) => void;
  // any other state or handlers
}

const defaultContextValue: MultiSelectContextType = {
  selectedValues: [],
  selectedDisplays: [],
  handleItemClick: () => {}, // Dummy function, actual implementation will be in Select
  // default values for any other state or handlers
};

const SelectContext =
  React.createContext<MultiSelectContextType>(defaultContextValue);

export default SelectContext;

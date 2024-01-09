import React from "react";

interface SelectContextType {
  selectedValue: string | number;
  selectedDisplay: string | number;
  handleItemClick: (
    displayValue: string | number,
    itemValue: string | number
  ) => void;
  // any other state or handlers
}

const defaultContextValue: SelectContextType = {
  selectedValue: "",
  selectedDisplay: "",
  handleItemClick: () => {}, // Dummy function, actual implementation will be in Select
  // default values for any other state or handlers
};

const SelectContext =
  React.createContext<SelectContextType>(defaultContextValue);

export default SelectContext;

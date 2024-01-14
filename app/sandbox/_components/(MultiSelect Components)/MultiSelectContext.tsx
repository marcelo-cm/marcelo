import React from "react";

interface MultiSelectContextType {
  selectedOptions: { value: string | number; display: string }[] | null;
  // selectedValues: (string | number)[] | null;
  handleItemClick: (option: {
    value: string | number;
    display: string;
  }) => void;
  // any other state or handlers
}

const defaultContextValue: MultiSelectContextType = {
  selectedOptions: null,
  // selectedValues: null,
  handleItemClick: () => {}, // Dummy function, actual implementation will be in Select
  // default values for any other state or handlers
};

const SelectContext =
  React.createContext<MultiSelectContextType>(defaultContextValue);

export default SelectContext;

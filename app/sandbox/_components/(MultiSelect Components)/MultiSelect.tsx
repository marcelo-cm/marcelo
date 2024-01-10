import { FunctionComponent, useState } from "react";
import MultiSelectContext from "./MultiSelectContext";

interface MultiSelectProps {
  onChange: (value: string | number) => void;
  children: React.ReactNode;
}

const MultiSelect = ({ onChange, children }: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  const [selectedDisplays, setSelectedDisplays] = useState<(string | number)[]>(
    []
  );

  const handleItemClick = (
    displayValue: string | number,
    itemValue: string | number
  ) => {
    if (itemValue in selectedValues) {
      setSelectedValues((prev) => prev.filter((value) => value !== itemValue));
    }

    const contextValue = { handleItemClick, selectedValues, selectedDisplays };

    return (
      <MultiSelectContext.Provider value={contextValue}>
        {children}
      </MultiSelectContext.Provider>
    );
  };
};

export default MultiSelect;

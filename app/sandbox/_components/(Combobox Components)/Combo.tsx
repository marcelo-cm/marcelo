import { forwardRef, useRef, useState } from "react";
import ComboContext from "./ComboContext";

interface ComboProps {
  onChange: (item: { value: string | number; display: string }) => void;
  children: React.ReactNode;
}

const Combo = forwardRef<HTMLDivElement, ComboProps>(
  ({ children, onChange }, ref) => {
    const [selectedOptions, setSelectedOptions] = useState<
      { value: string | number; display: string }[]
    >([]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const focusedItemRef = useRef<HTMLDivElement | null>(null);

    const handleItemClick = async (option: {
      value: string | number;
      display: string;
    }) => {
      const values = selectedOptions.map((option) => option.value);

      if (values.includes(option.value)) {
        setSelectedOptions((prev) =>
          prev.filter((item) => item.value != option.value)
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
      onChange(option);
    };

    const contextValue = {
      handleItemClick,
      selectedOptions,
      focusedIndex,
    };
    return (
      <ComboContext.Provider value={contextValue}>
        <div ref={ref}>{children}</div>
      </ComboContext.Provider>
    );
  }
);

export default Combo;

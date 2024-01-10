import React, { forwardRef, useState } from "react";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import SelectContext from "./SelectContext";

interface SelectProps {
  onChange: (value: string | number) => void;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ onChange, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDisplay, setSelectedDisplay] = useState<string | number>(
      "Please Select An Option"
    );
    const [selectedValue, setSelectedValue] = useState<string | number>("");

    const handleItemClick = (
      displayValue: string | number,
      itemValue: string | number
    ) => {
      setSelectedValue(itemValue);
      setSelectedDisplay(displayValue);
      setIsOpen(false);
      onChange(itemValue);
    };

    const contextValue = { handleItemClick, selectedValue, selectedDisplay };

    return (
      <SelectContext.Provider value={contextValue}>
        <div
          className="relative w-max"
          tabIndex={0}
          ref={ref}
          onBlur={() => setIsOpen(false)}
        >
          <div
            className="py-[6px] pl-6 pr-2 flex items-center rounded-md h-fit w-fit hover:opacity-75 border border-[#2e2e2e] bg-[#1C1C1C] select-none cursor-pointer"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            {selectedDisplay}
            {isOpen ? (
              <CaretUpIcon className="inline-block ml-2" />
            ) : (
              <CaretDownIcon className="inline-block ml-2" />
            )}
          </div>
          {isOpen ? (
            <div
              className={`p-2 rounded-md h-fit max-h-[40rem] no-scrollbar w-max border border-[#2e2e2e] bg-[#1C1C1C] absolute top-full mt-2 overflow-y-scroll z-50 flex flex-col gap-1`}
            >
              {children}
            </div>
          ) : null}
        </div>
      </SelectContext.Provider>
    );
  }
);

export default Select;

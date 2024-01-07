import React, { forwardRef, useState } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";
import SelectGroup, { SelectGroupProps } from "./SelectGroup";
import SelectLabel from "./SelectLabel";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";

interface SelectProps {
  onChange: (value: string) => void;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ onChange, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("Placeholder");

    const handleItemClick = (itemValue: string) => {
      // console.log("itemValue", itemValue);
      setValue(itemValue);
      // console.log("Closing");
      setIsOpen(false);
      // console.log("Calling onChange");
      onChange(itemValue);
    };

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        // SelectItem with no group
        if (React.isValidElement(child) && child.type === SelectItem) {
          const typedChild = child as React.ReactElement<SelectItemProps>;

          const childContent = typedChild.props.children;
          const itemValue =
            typeof childContent === "string" || typeof childContent === "number"
              ? childContent.toString()
              : "";

          return React.cloneElement(typedChild, {
            onClick: () => handleItemClick(itemValue),
          });
        } else if (React.isValidElement(child) && child.type === SelectGroup) {
          const typedChild = child as React.ReactElement<SelectGroupProps>;

          return React.cloneElement(typedChild, {
            onChange: handleItemClick,
          });
        }
        return child;
      });
    };

    return (
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
          {value}{" "}
          {isOpen ? (
            <CaretUpIcon className="inline-block ml-2" />
          ) : (
            <CaretDownIcon className="inline-block ml-2" />
          )}
        </div>
        {isOpen ? (
          <div
            className={`py-2 px-3 rounded-md h-fit max-h-96 w-max border border-[#2e2e2e] bg-[#1C1C1C] absolute top-full mt-2 overflow-y-scroll z-50`}
          >
            {renderChildren()}
          </div>
        ) : null}
      </div>
    );
  }
);

export default Select;

import React, { forwardRef, useState } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";
import SelectGroup, { SelectGroupProps } from "./SelectGroup";
import SelectLabel from "./SelectLabel";

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
        className="relative"
        tabIndex={0}
        ref={ref}
        onBlur={() => setIsOpen(false)}
      >
        <div
          className="py-[6px] px-6 rounded-md h-fit w-fit hover:opacity-75 border border-[#2e2e2e] bg-[#1C1C1C]"
          onClick={() => setIsOpen(true)}
        >
          {value}
        </div>
        {isOpen ? (
          <div className="py-[6px] px-6 rounded-md h-fit w-fit border border-[#2e2e2e] bg-[#1C1C1C] absolute top-full mt-2">
            {renderChildren()}
          </div>
        ) : null}
      </div>
    );
  }
);

export default Select;

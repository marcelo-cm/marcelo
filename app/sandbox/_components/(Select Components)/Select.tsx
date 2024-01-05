import React, { FunctionComponent, forwardRef, useRef, useState } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";
import SelectGroup, { SelectGroupProps } from "./SelectGroup";
import { render } from "react-dom";

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
      setIsOpen(false);
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
        }
        return child;
      });
    };

    return (
      <div tabIndex={0} ref={ref} onBlur={() => setIsOpen(false)}>
        <div className="border w-fit p-4" onClick={() => setIsOpen(true)}>
          {value}
        </div>
        {isOpen ? (
          <div className="border p-4 w-fit h-fit">{renderChildren()}</div>
        ) : null}
      </div>
    );
  }
);

export default Select;

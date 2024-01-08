import React, { forwardRef, useState } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";
import SelectGroup, { SelectGroupProps } from "./SelectGroup";
import SelectLabel from "./SelectLabel";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";

interface SelectProps {
  onChange: (value: string | number) => void;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ onChange, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string | number>("Placeholder");
    const [optionSelected, setOptionSelected] = useState<string | number>(
      "Placeholder"
    );
    const [activeID, setActiveID] = useState<string>("");

    const handleItemClick = (
      option: string | number,
      itemValue: string | number,
      id: string
    ) => {
      // console.log("itemValue", itemValue);
      setValue(itemValue);
      setOptionSelected(option);
      setActiveID(id);
      // console.log("Closing");
      setIsOpen(false);
      // console.log("Calling onChange");
      onChange(itemValue);
    };

    const renderChildren = () => {
      return React.Children.map(children, (child, index) => {
        // SelectItem with no group
        if (React.isValidElement(child) && child.type === SelectItem) {
          const typedChild = child as React.ReactElement<SelectItemProps>;

          const childContent = typedChild.props.children;
          const itemValue = typedChild.props.value;

          return React.cloneElement(typedChild, {
            onClick: () =>
              handleItemClick(
                childContent,
                itemValue || typedChild.props.children,
                "" + childContent + index
              ),
            active: "" + childContent + index === activeID,
          });
        } else if (React.isValidElement(child) && child.type === SelectGroup) {
          const typedChild = child as React.ReactElement<SelectGroupProps>;

          return React.cloneElement(typedChild, {
            onChange: handleItemClick,
            idStart: index,
            activeID: activeID,
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
          {optionSelected}
          {isOpen ? (
            <CaretUpIcon className="inline-block ml-2" />
          ) : (
            <CaretDownIcon className="inline-block ml-2" />
          )}
        </div>
        {activeID} {value}
        {isOpen ? (
          <div
            className={`py-2 pl-3 pr-5 rounded-md h-fit max-h-[36rem] w-max border border-[#2e2e2e] bg-[#1C1C1C] absolute top-full mt-2 overflow-y-scroll z-50`}
          >
            {renderChildren()}
          </div>
        ) : null}
      </div>
    );
  }
);

export default Select;

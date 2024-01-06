import React, { FunctionComponent } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";

export interface SelectGroupProps {
  children: React.ReactNode;
  label?: string;
  onChange?: (value: string) => void;
}

const SelectGroup: FunctionComponent<SelectGroupProps> = ({
  children,
  label,
  onChange,
}: SelectGroupProps) => {
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
          onClick: () => onChange && onChange(itemValue),
        });
      } else if (React.isValidElement(child) && child.type === SelectGroup) {
        const typedChild = child as React.ReactElement<SelectGroupProps>;

        return React.cloneElement(typedChild, {
          onChange: onChange,
        });
      }
      return child;
    });
  };

  return (
    <div>
      {label}
      {renderChildren()}
    </div>
  );
};

export default SelectGroup;

import React, { FunctionComponent } from "react";
import SelectItem, { SelectItemProps } from "./SelectItem";

export interface SelectGroupProps {
  children: React.ReactNode;
  idStart?: number;
  activeID?: string;
  label?: string;
  onChange?: (
    option: string | number,
    value: string | number,
    id: string
  ) => void;
}

const SelectGroup: FunctionComponent<SelectGroupProps> = ({
  children,
  idStart,
  activeID,
  label,
  onChange,
}: SelectGroupProps) => {
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // SelectItem with no group
      if (React.isValidElement(child) && child.type === SelectItem) {
        const typedChild = child as React.ReactElement<SelectItemProps>;

        const childContent = typedChild.props.children;
        const itemValue = typedChild.props.value;

        return React.cloneElement(typedChild, {
          onClick: () =>
            onChange &&
            onChange(
              childContent,
              itemValue || typedChild.props.children,
              "" + childContent + index + idStart
            ),
          active: "" + childContent + index + idStart === activeID,
          id: "" + childContent + index + idStart,
        });
      } else if (React.isValidElement(child) && child.type === SelectGroup) {
        const typedChild = child as React.ReactElement<SelectGroupProps>;

        return React.cloneElement(typedChild, {
          onChange: onChange,
          idStart: index,
          activeID: activeID,
        });
      }
      return child;
    });
  };

  return (
    <div>
      <p className="font-semibold text-nowrap">{label}</p>
      {renderChildren()}
    </div>
  );
};

export default SelectGroup;

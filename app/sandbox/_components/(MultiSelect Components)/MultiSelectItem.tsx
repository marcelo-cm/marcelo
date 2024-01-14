import React, { useContext } from "react";
import MultiSelectContext from "./MultiSelectContext";

export interface MultiSelectItemProps {
  children: React.ReactNode;
  value: string | number;
}

const MultiSelectItem: React.FC<MultiSelectItemProps> = ({
  children,
  value,
}) => {
  const { handleItemClick, selectedOptions } = useContext(MultiSelectContext);

  if (selectedOptions === null) {
    throw new Error(
      "SelectItem must be a child of a SelectLabel or SelectGroup"
    );
  }

  // Determine if this item is selected
  const isSelected =
    selectedOptions &&
    selectedOptions.map((option) => option.value).includes(value);

  // Function to handle the click on this item
  const onClick = () => {
    if (typeof children === "string") {
      handleItemClick({ value: value, display: children });
    }
  };

  return (
    <div
      className={`cursor-pointer py-[6px] pl-2 pr-6 rounded-md h-fit hover:bg-white/10 active:ring-1 ring-inset ring-[#A0A0A0] transition-all text-nowrap	break-keep ${
        isSelected ? "bg-white/10" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default MultiSelectItem;

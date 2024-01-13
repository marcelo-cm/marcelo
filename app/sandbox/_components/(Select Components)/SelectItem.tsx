import React, { useContext } from "react";
import SelectContext from "./SelectContext";

export interface SelectItemProps {
  children: React.ReactNode;
  value: string | number;
  index?: number;
  focusedRef?: React.RefObject<HTMLDivElement> | null;
}

const SelectItem: React.FC<SelectItemProps> = ({
  children,
  value,
  index,
  focusedRef,
}) => {
  const { handleItemClick, selectedValue, selectedDisplay, focusedIndex } =
    useContext(SelectContext);

  console.log("SelectItem", index);

  if (selectedDisplay === null) {
    throw new Error(
      "SelectItem must be a child of a SelectLabel or SelectGroup"
    );
  }

  // Determine if this item is selected
  const isSelected = selectedValue === value;
  const isFocused = focusedIndex === index;

  // Function to handle the click on this item
  const onClick = () => {
    if (typeof children === "string" || typeof children === "number") {
      handleItemClick(children, value || children);
    }
  };

  return (
    <div
      className={`cursor-pointer py-[6px] pl-2 pr-6 rounded-md h-fit hover:bg-white/10 active:ring-1 ring-inset ring-[#A0A0A0] transition-all text-nowrap	break-keep ${
        isSelected ? "bg-white/10" : ""
      }`}
      tabIndex={-1}
      onClick={onClick}
      ref={focusedRef}
    >
      {children} {index}
    </div>
  );
};

export default SelectItem;

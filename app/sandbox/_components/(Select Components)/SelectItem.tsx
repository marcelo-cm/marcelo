import React, { useContext } from "react";
import SelectContext from "./SelectContext";

export interface SelectItemProps {
  children: React.ReactNode;
  value?: string | number;
}

const SelectItem: React.FC<SelectItemProps> = ({ children, value }) => {
  const { handleItemClick, selectedValue } = useContext(SelectContext);

  // Determine if this item is selected
  const isSelected = selectedValue === children;

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
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SelectItem;

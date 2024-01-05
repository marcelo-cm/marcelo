import { FunctionComponent } from "react";

export interface SelectItemProps {
  children: string | number;
  onClick?: () => void;
}

const SelectItem: FunctionComponent<SelectItemProps> = ({
  children,
  onClick,
}: SelectItemProps) => {
  // console.log("SelectItem:", children);

  return (
    <ul
      onClick={() => {
        // console.log("onClick:", children);
        onClick && onClick();
      }}
      className="cursor-pointer"
    >
      {children}
    </ul>
  );
};

export default SelectItem;

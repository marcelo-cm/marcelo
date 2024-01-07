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
      className="cursor-pointer py-[6px] pl-2 pr-6 rounded-md h-fit w-full hover:bg-white/10 active:ring-1 ring-inset ring-[#A0A0A0] transition-all text-nowrap	break-keep"
    >
      {children}
    </ul>
  );
};

export default SelectItem;

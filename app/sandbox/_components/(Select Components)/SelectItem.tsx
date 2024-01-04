import { FunctionComponent } from "react";

interface SelectItemProps {
  children: React.ReactNode;
}

const SelectItem: FunctionComponent<SelectItemProps> = ({
  children,
}: SelectItemProps) => {
  return <div>{children}</div>;
};

export default SelectItem;

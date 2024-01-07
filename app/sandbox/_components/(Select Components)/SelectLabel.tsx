import { FunctionComponent } from "react";

interface SelectLabelProps {
  children: React.ReactNode;
}

const SelectLabel: FunctionComponent<SelectLabelProps> = ({
  children,
}: SelectLabelProps) => {
  return <div className="font-medium text-[#A0A0A0]">{children}</div>;
};

export default SelectLabel;

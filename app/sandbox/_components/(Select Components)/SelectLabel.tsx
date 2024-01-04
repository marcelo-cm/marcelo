import { FunctionComponent } from "react";

interface SelectLabelProps {
  children: React.ReactNode;
}

const SelectLabel: FunctionComponent<SelectLabelProps> = ({
  children,
}: SelectLabelProps) => {
  return <div>{children}</div>;
};

export default SelectLabel;

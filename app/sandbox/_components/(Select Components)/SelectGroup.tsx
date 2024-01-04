import { FunctionComponent } from "react";

interface SelectGroupProps {
  children: React.ReactNode;
  label?: string;
}

const SelectGroup: FunctionComponent<SelectGroupProps> = ({
  children,
  label,
}: SelectGroupProps) => {
  return (
    <div>
      {label}
      {children}
    </div>
  );
};

export default SelectGroup;

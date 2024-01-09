import React, { FunctionComponent, useContext } from "react";

interface SelectGroupProps {
  children: React.ReactNode;
}

const SelectGroup: FunctionComponent<SelectGroupProps> = ({
  children,
}: SelectGroupProps) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

export default SelectGroup;

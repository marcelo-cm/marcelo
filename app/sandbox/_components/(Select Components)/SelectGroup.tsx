import React, { FunctionComponent, useContext } from "react";
import SelectContext from "./SelectContext";

interface SelectGroupProps {
  children: React.ReactNode;
}

const SelectGroup: FunctionComponent<SelectGroupProps> = ({
  children,
}: SelectGroupProps) => {
  const context = useContext(SelectContext);

  if (context.selectedDisplay === null) {
    throw new Error(
      "SelectGroup must be a child of a SelectLabel or SelectGroup"
    );
  }

  return <div className="flex flex-col gap-1">{children}</div>;
};

export default SelectGroup;

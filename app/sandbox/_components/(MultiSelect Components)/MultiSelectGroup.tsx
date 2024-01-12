import React, { FunctionComponent, useContext } from "react";
import MultiSelectContext from "./MultiSelectContext";

interface MultiSelectGroupProps {
  children: React.ReactNode;
}

const MultiSelectGroup: FunctionComponent<MultiSelectGroupProps> = ({
  children,
}: MultiSelectGroupProps) => {
  const context = useContext(MultiSelectContext);

  if (context.selectedOptions === null) {
    throw new Error(
      "MultiSelectGroup must be a child of a MultiSelectLabel or MultiSelectGroup"
    );
  }

  return <div className="flex flex-col gap-1">{children}</div>;
};

export default MultiSelectGroup;

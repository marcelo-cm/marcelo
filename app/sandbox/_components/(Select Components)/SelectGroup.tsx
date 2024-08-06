import React, { FunctionComponent, useContext } from 'react';

import SelectContext from './SelectContext';

export interface SelectGroupProps {
  children: React.ReactNode;
  index?: number;
}

const SelectGroup: FunctionComponent<SelectGroupProps> = ({
  children,
  index,
}: SelectGroupProps) => {
  const context = useContext(SelectContext);

  if (context.selectedDisplay === null) {
    throw new Error(
      'SelectGroup must be a child of a SelectLabel or SelectGroup',
    );
  }

  return <div className="flex flex-col gap-1">{children}</div>;
};

export default SelectGroup;

import { FunctionComponent, useContext } from 'react';

import SelectContext from './SelectContext';

interface SelectLabelProps {
  children: React.ReactNode;
}

const SelectLabel: FunctionComponent<SelectLabelProps> = ({
  children,
}: SelectLabelProps) => {
  const context = useContext(SelectContext);

  if (context.selectedDisplay === null) {
    throw new Error(
      'SelectLabel must be a child of a SelectLabel or SelectGroup',
    );
  }

  return <div className="font-medium text-u-300">{children}</div>;
};

export default SelectLabel;

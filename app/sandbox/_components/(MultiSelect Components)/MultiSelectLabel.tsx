import { FunctionComponent, useContext } from 'react';

import MultiSelectContext from './MultiSelectContext';

interface MultiSelectLabelProps {
  children: React.ReactNode;
}

const MultiSelectLabel: FunctionComponent<MultiSelectLabelProps> = ({
  children,
}: MultiSelectLabelProps) => {
  const context = useContext(MultiSelectContext);

  if (context.selectedOptions === null) {
    throw new Error(
      'MultiSelectLabel must be a child of a MultiSelectLabel or MultiSelectGroup',
    );
  }

  return <div className="font-medium text-u-300">{children}</div>;
};

export default MultiSelectLabel;

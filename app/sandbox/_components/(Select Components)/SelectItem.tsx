import React, { useContext } from 'react';

import SelectContext from './SelectContext';

export interface SelectItemProps {
  children: React.ReactNode;
  value: string | number;
  index?: number;
  focusedRef?: React.RefObject<HTMLDivElement> | null;
}

const SelectItem: React.FC<SelectItemProps> = ({
  children,
  value,
  index,
  focusedRef,
}) => {
  const { handleItemClick, selectedValue, selectedDisplay, focusedIndex } =
    useContext(SelectContext);

  if (selectedDisplay === null) {
    throw new Error(
      'SelectItem must be a child of a SelectLabel or SelectGroup',
    );
  }

  // Determine if this item is selected
  const isSelected = selectedValue === value;

  // Function to handle the click on this item
  const onClick = () => {
    if (typeof children === 'string' || typeof children === 'number') {
      handleItemClick(children, value || children);
    }
  };

  return (
    <div
      className={`h-fit cursor-pointer text-nowrap break-keep rounded-md py-[6px] pl-2 pr-6 ring-inset ring-u-300 transition-all hover:bg-white/10 active:ring-1 ${
        isSelected ? 'bg-white/10' : ''
      }`}
      tabIndex={-1}
      onClick={onClick}
      ref={focusedRef}
    >
      {children}
    </div>
  );
};

export default SelectItem;

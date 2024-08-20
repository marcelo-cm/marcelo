import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';

import SelectContext from './SelectContext';
import SelectItem from './SelectItem';

interface SelectProps {
  onChange: (value: string | number) => void;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ onChange, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDisplay, setSelectedDisplay] = useState<string | number>(
      'Please Select An Option',
    );
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const focusedItemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (focusedItemRef.current && focusedIndex !== null) {
        focusedItemRef.current.focus();
      }
    }, [focusedIndex]);

    const handleKeyDown = (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex((prevIndex) => {
            const newIndex =
              prevIndex === null
                ? 0
                : findNextFocusableIndex(prevIndex, 'forward');
            return newIndex !== null ? newIndex : prevIndex;
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prevIndex) => {
            const newIndex =
              prevIndex === null
                ? 0
                : findNextFocusableIndex(prevIndex, 'backwards');
            return newIndex !== null ? newIndex : prevIndex;
          });
          break;
        case 'Enter':
          event.preventDefault();
          if (focusedIndex !== null) {
            const child = React.Children.toArray(children)[focusedIndex];
            if (React.isValidElement(child) && child.props.value) {
              handleItemClick(child.props.children, child.props.value);
            }
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    const handleItemClick = (
      displayValue: string | number,
      itemValue: string | number,
    ) => {
      setSelectedValue(itemValue);
      setSelectedDisplay(displayValue);
      setIsOpen(false);
      onChange(itemValue);
    };

    const findNextFocusableIndex = (
      currentIndex: number,
      direction: string,
    ) => {
      let nextIndex = currentIndex;

      do {
        nextIndex = direction === 'forward' ? nextIndex + 1 : nextIndex - 1;

        if (nextIndex < 0) nextIndex = React.Children.count(children) - 1;
        else if (nextIndex >= React.Children.count(children)) nextIndex = 0;

        const child = React.Children.toArray(children)[nextIndex];

        if (React.isValidElement(child) && child.type === SelectItem) {
          return nextIndex;
        }
      } while (nextIndex !== currentIndex);

      return null;
    };

    const renderChildren = React.Children.map(children, (child, key) => {
      if (React.isValidElement(child) && child.type === SelectItem) {
        return React.cloneElement(child, {
          index: key,
          focusedRef: focusedIndex === key ? focusedItemRef : null,
        } as React.HTMLAttributes<HTMLElement>);
      }
      return child;
    });

    const onBlurHandler = () => {
      setTimeout(() => {
        if (ref && 'current' in ref && ref.current) {
          if (!ref.current.contains(document.activeElement)) {
            setIsOpen(false);
          }
        }
      }, 100);
    };

    const contextValue = {
      handleItemClick,
      selectedValue,
      selectedDisplay,
      focusedIndex,
    };

    return (
      <SelectContext.Provider value={contextValue}>
        <div
          className="relative w-max"
          ref={ref}
          tabIndex={0}
          onBlur={onBlurHandler}
          onKeyDown={handleKeyDown} // Add the keyDown handler here
        >
          <div
            className="flex h-fit w-fit cursor-pointer select-none items-center rounded-md border border-[#2e2e2e] bg-[#1C1C1C] py-[6px] pl-6 pr-2 hover:opacity-75"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
              setFocusedIndex(null);
            }}
          >
            {selectedDisplay}
            {isOpen ? (
              <CaretUpIcon className="ml-2 inline-block" />
            ) : (
              <CaretDownIcon className="ml-2 inline-block" />
            )}
          </div>
          {isOpen ? (
            <div
              className={`no-scrollbar absolute top-full z-50 mt-2 flex h-fit max-h-[40rem] w-max flex-col gap-1 overflow-y-scroll rounded-md border border-[#2e2e2e] bg-[#1C1C1C] p-2`}
            >
              {renderChildren}
            </div>
          ) : null}
        </div>
      </SelectContext.Provider>
    );
  },
);

export default Select;

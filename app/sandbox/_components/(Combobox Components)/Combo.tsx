import React, { forwardRef, use, useEffect, useRef, useState } from 'react';

import { CaretDownIcon, CaretUpIcon, Cross2Icon } from '@radix-ui/react-icons';

import { render } from 'react-dom';

import ComboContext from './ComboContext';
import ComboItem from './ComboItem';

interface ComboProps {
  onChange: (item: { value: string | number; display: string }) => void;
  children: React.ReactNode;
}

const Combo = forwardRef<HTMLDivElement, ComboProps>(
  ({ children, onChange }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<
      { value: string | number; display: string }[]
    >([]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const focusedItemRef = useRef<HTMLDivElement | null>(null);
    const [searchVal, setSearchVal] = useState('');

    useEffect(() => {
      if (focusedItemRef.current && focusedIndex !== null) {
        focusedItemRef.current.focus();
      }
    }, [focusedIndex]);

    const findNextFocusableIndex = (
      currentIndex: number,
      direction: string,
    ) => {
      if (!renderChildren || renderChildren.length === 0) return null;

      let nextIndex = currentIndex;

      const validIndex = renderChildren
        .map((item) => {
          const key =
            typeof item.key === 'string'
              ? parseInt(item.key.replace('.', ''), 10)
              : null;
          return key;
        })
        .filter((key): key is number => key !== null);

      let increment = direction === 'forward' ? 1 : -1;

      do {
        let currentPosition = validIndex?.indexOf(currentIndex);

        if (currentPosition + increment < 0) {
          increment = validIndex.length - 1;
        } else if (currentPosition + increment >= validIndex.length) {
          increment = -validIndex.length + 1;
        }

        let nextVal = validIndex[currentPosition + increment];
        nextIndex = validIndex?.indexOf(nextVal);
        const child = renderChildren[nextIndex];

        if (React.isValidElement(child) && child.type === ComboItem) {
          return nextVal;
        }
      } while (nextIndex !== currentIndex);

      return null;
    };

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
              handleItemClick({
                value: child.props.value,
                display: child.props.children,
              });
            }
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    const renderChildren = React.Children.map(children, (child, key) => {
      if (React.isValidElement(child) && child.type === ComboItem) {
        if (searchVal) {
          const childText = child.props.children;

          const matchesSearch =
            searchVal.trim().length === 0 ||
            childText.toLowerCase().includes(searchVal.trim().toLowerCase());

          if (matchesSearch) {
            return React.cloneElement(child, {
              index: key,
              focusedRef: focusedIndex === key ? focusedItemRef : null,
            } as React.HTMLAttributes<HTMLElement>);
          }
        } else {
          return React.cloneElement(child, {
            index: key,
            focusedRef: focusedIndex === key ? focusedItemRef : null,
          } as React.HTMLAttributes<HTMLElement>);
        }
      }
      return null;
    });

    // useEffect(() => {
    //   console.log("Children", renderChildren && renderChildren.length);
    // }, [searchVal]);

    // useEffect(() => {
    //   console.log("Focused", focusedIndex);
    // }, [focusedIndex]);

    const onBlurHandler = () => {
      setTimeout(() => {
        if (ref && 'current' in ref && ref.current) {
          if (!ref.current.contains(document.activeElement)) {
            setIsOpen(false);
          }
        }
      }, 100);
    };

    const handleItemClick = async (option: {
      value: string | number;
      display: string;
    }) => {
      const values = selectedOptions.map((option) => option.value);

      if (values.includes(option.value)) {
        setSelectedOptions((prev) =>
          prev.filter((item) => item.value != option.value),
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
      onChange(option);
    };

    const contextValue = {
      handleItemClick,
      selectedOptions,
      focusedIndex,
    };

    return (
      <ComboContext.Provider value={contextValue}>
        <div
          className="relative w-max"
          ref={ref}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onBlur={onBlurHandler}
        >
          <div
            className="no-scrollbar flex h-fit w-96 w-[65dvw] cursor-pointer select-none items-center overflow-x-scroll rounded-md border border-[#2e2e2e] bg-[#1C1C1C] py-[6px] pl-2 pr-6 md:w-80"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
              setFocusedIndex(null);
              setSearchVal('');
            }}
          >
            <div className="relative flex flex-row gap-2 pr-6">
              {selectedOptions.length > 0 ? (
                selectedOptions.map((item, key) => (
                  <div
                    className="group flex h-fit flex-row flex-nowrap items-center gap-2 rounded-md bg-white/10 p-2 py-[6px] ring-inset ring-red-500 transition-all active:ring-1"
                    key={key}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(item);
                    }}
                  >
                    <p className="group-hover:opacity-75">{item.display}</p>
                    <Cross2Icon className="inline-block transition-all group-hover:text-red-500" />
                  </div>
                ))
              ) : (
                <div className="h-fit rounded-md p-2 py-[6px]">
                  No Options Selected
                </div>
              )}
            </div>
            <div className="absolute right-[1px] rounded-md bg-[#1C1C1C] p-3">
              {isOpen ? <CaretUpIcon /> : <CaretDownIcon />}
            </div>
          </div>
          {isOpen ? (
            <div className="no-scrollbar absolute top-full z-50 mt-2 h-fit w-auto min-w-32 overflow-y-scroll rounded-md border border-[#2e2e2e] bg-[#1C1C1C]">
              <input
                placeholder="Search..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="border-b-[1px] border-[#2e2e2e] bg-[#1C1C1C] p-2 text-white"
              />
              <div className="no-scrollbar z-50 flex h-fit max-h-[40rem] w-full flex-col gap-1 overflow-y-scroll p-2">
                {renderChildren && renderChildren.length > 0 ? (
                  renderChildren
                ) : (
                  <p className="font-light italic text-u-300">
                    No Options Found
                  </p>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </ComboContext.Provider>
    );
  },
);

export default Combo;

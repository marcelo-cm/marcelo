import React, { forwardRef, useEffect, useRef, useState } from "react";
import MultiSelectContext from "./MultiSelectContext";
import { CaretDownIcon, CaretUpIcon, Cross2Icon } from "@radix-ui/react-icons";
import MultiSelectItem from "./MultiSelectItem";

interface MultiSelectProps {
  onChange: (item: { value: string | number; display: string }) => void;
  children: React.ReactNode;
}

const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  ({ onChange, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<
      { value: string | number; display: string }[]
    >([]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const focusedItemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (focusedItemRef.current && focusedIndex !== null) {
        focusedItemRef.current.focus();
      }
    }, [focusedIndex]);

    const findNextFocusableIndex = (
      currentIndex: number,
      direction: string
    ) => {
      let nextIndex = currentIndex;

      do {
        nextIndex = direction === "forward" ? nextIndex + 1 : nextIndex - 1;

        if (nextIndex < 0) nextIndex = React.Children.count(children) - 1;
        else if (nextIndex >= React.Children.count(children)) nextIndex = 0;

        const child = React.Children.toArray(children)[nextIndex];

        if (React.isValidElement(child) && child.type === MultiSelectItem) {
          return nextIndex;
        }
      } while (nextIndex !== currentIndex);

      return null;
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prevIndex) => {
            const newIndex =
              prevIndex === null
                ? 0
                : findNextFocusableIndex(prevIndex, "forward");
            return newIndex !== null ? newIndex : prevIndex;
          });
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prevIndex) => {
            const newIndex =
              prevIndex === null
                ? 0
                : findNextFocusableIndex(prevIndex, "backwards");
            return newIndex !== null ? newIndex : prevIndex;
          });
          break;
        case "Enter":
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
        case "Escape":
          setIsOpen(false);
          break;
      }
    };

    const handleItemClick = async (option: {
      value: string | number;
      display: string;
    }) => {
      const values = selectedOptions.map((option) => option.value);

      if (values.includes(option.value)) {
        setSelectedOptions((prev) =>
          prev.filter((item) => item.value != option.value)
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
      onChange(option);
    };

    const renderChildren = React.Children.map(children, (child, key) => {
      if (React.isValidElement(child) && child.type === MultiSelectItem) {
        return React.cloneElement(child, {
          index: key,
          focusedRef: focusedIndex === key ? focusedItemRef : null,
        } as React.HTMLAttributes<HTMLElement>);
      }
      return child;
    });

    const onBlurHandler = () => {
      setTimeout(() => {
        if (ref && "current" in ref && ref.current) {
          if (!ref.current.contains(document.activeElement)) {
            setIsOpen(false);
          }
        }
      }, 100);
    };

    const contextValue = { handleItemClick, selectedOptions, focusedIndex };

    return (
      <MultiSelectContext.Provider value={contextValue}>
        <div
          className="relative w-max"
          ref={ref}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onBlur={onBlurHandler}
        >
          <div
            className="py-[6px] pl-2 pr-6 flex items-center rounded-md h-fit w-[65dvw] md:w-80 border border-[#2e2e2e] bg-[#1C1C1C] select-none cursor-pointer w-96 overflow-x-scroll no-scrollbar"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
              setFocusedIndex(null);
            }}
          >
            <div className="relative flex gap-2 flex-row pr-6">
              {selectedOptions.length > 0 ? (
                selectedOptions.map((item, key) => (
                  <div
                    className="py-[6px] p-2 rounded-md h-fit bg-white/10 flex flex-row items-center gap-2 flex-nowrap group active:ring-1 ring-inset ring-red-500 transition-all"
                    key={key}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(item);
                    }}
                  >
                    <p className="group-hover:opacity-75">{item.display}</p>
                    <Cross2Icon className="inline-block group-hover:text-red-500 transition-all" />
                  </div>
                ))
              ) : (
                <div className="py-[6px] p-2 rounded-md h-fit">
                  No Options Selected
                </div>
              )}
            </div>
            <div className="p-3 bg-[#1C1C1C] absolute right-[1px] rounded-md">
              {isOpen ? <CaretUpIcon /> : <CaretDownIcon />}
            </div>
          </div>
          {isOpen ? (
            <div className="p-2 rounded-md h-fit max-h-[40rem] no-scrollbar w-max border border-[#2e2e2e] bg-[#1C1C1C] absolute top-full mt-2 overflow-y-scroll z-50 flex flex-col gap-1">
              {renderChildren}
            </div>
          ) : null}
        </div>
      </MultiSelectContext.Provider>
    );
  }
);

export default MultiSelect;

import React, { forwardRef, useState, useRef, useEffect } from "react";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import SelectContext from "./SelectContext";
import SelectItem from "./SelectItem";

interface SelectProps {
  onChange: (value: string | number) => void;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ onChange, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDisplay, setSelectedDisplay] = useState<string | number>(
      "Please Select An Option"
    );
    const [selectedValue, setSelectedValue] = useState<string | number>("");
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const focusedItemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      // Whenever focusedIndex changes, focus the corresponding item
      if (focusedItemRef.current && focusedIndex !== null) {
        focusedItemRef.current.focus();
      }
    }, [focusedIndex]);

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
              handleItemClick(child.props.children, child.props.value);
            }
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
        // ... [other key cases if needed]
      }
    };

    const handleItemClick = (
      displayValue: string | number,
      itemValue: string | number
    ) => {
      setSelectedValue(itemValue);
      setSelectedDisplay(displayValue);
      setIsOpen(false);
      onChange(itemValue);
    };

    const findNextFocusableIndex = (
      currentIndex: number,
      direction: string
    ) => {
      let nextIndex = currentIndex;

      do {
        nextIndex = direction === "forward" ? nextIndex + 1 : nextIndex - 1;

        // Loop around if necessary
        if (nextIndex < 0) nextIndex = React.Children.count(children) - 1;
        else if (nextIndex >= React.Children.count(children)) nextIndex = 0;

        // Get the child at the nextIndex
        const child = React.Children.toArray(children)[nextIndex];

        // Check if the child is a SelectItem
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

    const onBlurHandler = (event: React.FocusEvent) => {
      // Use a setTimeout to delay the state change
      setTimeout(() => {
        // Check if the focused element is not part of the select component
        if (ref && "current" in ref && ref.current) {
          if (!ref.current.contains(document.activeElement)) {
            setIsOpen(false);
          }
        }
      }, 100); // 100ms delay, adjust as needed
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
            className="py-[6px] pl-6 pr-2 flex items-center rounded-md h-fit w-fit hover:opacity-75 border border-[#2e2e2e] bg-[#1C1C1C] select-none cursor-pointer"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
              setFocusedIndex(null);
            }}
          >
            {selectedDisplay}
            {isOpen ? (
              <CaretUpIcon className="inline-block ml-2" />
            ) : (
              <CaretDownIcon className="inline-block ml-2" />
            )}
          </div>
          {isOpen ? (
            <div
              className={`p-2 rounded-md h-fit max-h-[40rem] no-scrollbar w-max border border-[#2e2e2e] bg-[#1C1C1C] absolute top-full mt-2 overflow-y-scroll z-50 flex flex-col gap-1`}
            >
              {renderChildren}
            </div>
          ) : null}
        </div>
      </SelectContext.Provider>
    );
  }
);

export default Select;

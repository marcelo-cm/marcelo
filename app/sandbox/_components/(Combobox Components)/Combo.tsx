import React, { forwardRef, use, useEffect, useRef, useState } from "react";
import ComboContext from "./ComboContext";
import ComboItem from "./ComboItem";
import { CaretDownIcon, CaretUpIcon, Cross2Icon } from "@radix-ui/react-icons";
import { render } from "react-dom";

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
    const [searchVal, setSearchVal] = useState("");

    useEffect(() => {
      if (focusedItemRef.current && focusedIndex !== null) {
        focusedItemRef.current.focus();
      }
    }, [focusedIndex]);

    // const findNextFocusableIndex = (
    //   currentIndex: number,
    //   direction: string
    // ) => {
    //   let nextIndex = currentIndex;

    //   do {
    //     // let validIndex =
    //     // renderChildren && renderChildren.map((item) => item.key);

    //     // console.log(validIndex);
    //     nextIndex = direction === "forward" ? nextIndex + 1 : nextIndex - 1;

    //     if (renderChildren && nextIndex < 0) {
    //       nextIndex = renderChildren.length - 1;
    //     } else if (renderChildren && nextIndex >= renderChildren.length) {
    //       nextIndex = 0;
    //     }

    //     const child = renderChildren && renderChildren[nextIndex];

    //     if (React.isValidElement(child) && child.type === ComboItem) {
    //       return nextIndex;
    //     }
    //   } while (nextIndex !== currentIndex);

    //   return null;
    // };

    const findNextFocusableIndex = (
      currentIndex: number,
      direction: string
    ) => {
      let validIndex = renderChildren && renderChildren.map((item) => item.key);
      console.log(validIndex);

      // Find the current position in the validIndex array
      let currentPosition = validIndex?.indexOf(String(currentIndex)) ?? -1;

      // Handle invalid currentIndex
      if (currentPosition === -1) return null;

      let nextPosition = currentPosition;

      do {
        // Move to the next position based on the direction
        nextPosition =
          direction === "forward" ? nextPosition + 1 : nextPosition - 1;

        // Wrap around if necessary
        if (nextPosition < 0) {
          nextPosition = (validIndex ?? []).length - 1;
        } else if (nextPosition >= (validIndex ?? []).length) {
          nextPosition = 0;
        }

        let nextIndex = validIndex?.[nextPosition] ?? null;
        const child =
          renderChildren &&
          typeof nextIndex == "bigint" &&
          renderChildren[nextIndex];

        // Check if the child is a valid React element of type ComboItem
        if (React.isValidElement(child) && child.type === ComboItem) {
          return nextIndex;
        }
      } while (nextPosition !== currentPosition); // Prevent infinite loop

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
        if (ref && "current" in ref && ref.current) {
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
          prev.filter((item) => item.value != option.value)
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
            className="py-[6px] pl-2 pr-6 flex items-center rounded-md h-fit w-[65dvw] md:w-80 border border-[#2e2e2e] bg-[#1C1C1C] select-none cursor-pointer w-96 overflow-x-scroll no-scrollbar"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
              setFocusedIndex(null);
              setSearchVal("");
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
            <div className="rounded-md h-fit no-scrollbar min-w-32 w-auto border border-[#2e2e2e] bg-[#1C1C1C] absolute top-full mt-2 overflow-y-scroll z-50">
              <input
                placeholder="Search..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="p-2 border-b-[1px] border-[#2e2e2e] bg-[#1C1C1C] text-white"
              />
              <div className="p-2 h-fit max-h-[40rem] no-scrollbar w-full overflow-y-scroll z-50 flex flex-col gap-1">
                {renderChildren && renderChildren.length > 0 ? (
                  renderChildren
                ) : (
                  <p className="text-[#A0A0A0] italic font-light">
                    No Options Found
                  </p>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </ComboContext.Provider>
    );
  }
);

export default Combo;

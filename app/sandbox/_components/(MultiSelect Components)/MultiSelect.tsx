import { FunctionComponent, useState } from "react";
import MultiSelectContext from "./MultiSelectContext";
import { CaretDownIcon, CaretUpIcon, Cross2Icon } from "@radix-ui/react-icons";

interface MultiSelectProps {
  onChange: (item: { value: string | number; display: string }) => void;
  children: React.ReactNode;
}

const MultiSelect = ({ onChange, children }: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<
    { value: string | number; display: string }[]
  >([]);
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);

  const handleItemClick = async (option: {
    value: string | number;
    display: string;
  }) => {
    if (selectedValues.includes(option.value)) {
      // console.log("removing", option);
      setSelectedOptions((prev) =>
        prev.filter((item) => item.value != option.value)
      );
      setSelectedValues((prev) =>
        prev.filter((value) => value != option.value)
      );
    } else {
      // console.log("adding", option);
      setSelectedOptions([...selectedOptions, option]);
      setSelectedValues([...selectedValues, option.value]);
    }
    onChange(option);
  };

  const contextValue = { handleItemClick, selectedOptions, selectedValues };

  return (
    <MultiSelectContext.Provider value={contextValue}>
      <div
        className="relative w-max"
        tabIndex={0}
        onBlur={() => setIsOpen(false)}
      >
        <div
          className="py-[6px] pl-2 pr-6 flex items-center rounded-md h-fit w-fit w-80 border border-[#2e2e2e] bg-[#1C1C1C] select-none cursor-pointer w-96 overflow-x-scroll no-scrollbar"
          onClick={() => setIsOpen((prevState) => !prevState)}
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
            {children}
          </div>
        ) : null}
      </div>
    </MultiSelectContext.Provider>
  );
};

export default MultiSelect;

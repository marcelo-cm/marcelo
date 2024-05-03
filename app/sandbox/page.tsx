"use client";

import React, { useEffect, useRef, useState } from "react";
import { ComponentContainer } from "./_components/ComponentContainer";
import { ToastContainer } from "./_components/ToastContainer";

import CustomLink from "../../components/ui/custom-link";
import Select from "./_components/(Select Components)/Select";
import SelectItem from "./_components/(Select Components)/SelectItem";
import SelectLabel from "./_components/(Select Components)/SelectLabel";
import MultiSelect from "./_components/(MultiSelect Components)/MultiSelect";
import MultiSelectItem from "./_components/(MultiSelect Components)/MultiSelectItem";
import MultiSelectLabel from "./_components/(MultiSelect Components)/MultiSelectLabel";
import ComponentDetails from "./_components/ComponentDetails";
import Combo from "./_components/(Combobox Components)/Combo";
import ComboItem from "./_components/(Combobox Components)/ComboItem";
import Tooltip from "./_components/(Tooltip Component)/Tooltip";
import Inspect from "inspx";

type Toast = { id: number; type: string; message: string; timeout: number };

export default function Playground() {
  // Combobox
  const [comboValues, setComboValues] = useState<(string | number)[]>([]);
  const comboRef = useRef<HTMLDivElement | null>(null);

  const handleComboChange = (option: { value: string | number }) => {
    if (comboValues.includes(option.value)) {
      setComboValues((prev) => prev.filter((item) => item !== option.value));
    } else {
      setComboValues([...multiSelectValues, option.value]);
    }
  };

  // MultiSelect
  const [multiSelectValues, setMultiSelectValues] = useState<
    (string | number)[]
  >([]);
  const multiSelectRef = useRef<HTMLDivElement | null>(null);

  const handleMultiSelectChange = (option: { value: string | number }) => {
    if (multiSelectValues.includes(option.value)) {
      setMultiSelectValues((prev) =>
        prev.filter((item) => item !== option.value)
      );
    } else {
      setMultiSelectValues([...multiSelectValues, option.value]);
    }
  };

  // Select
  const [selectValue, setSelectValue] = useState<string | number>(
    "Placeholder"
  );
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleSelectChange = (value: string | number) => {
    setSelectValue(value);
  };

  // Toasts
  const [allToasts, setAllToasts] = useState<Toast[]>([]);

  const toastTimeouts: { [key: number]: NodeJS.Timeout } = {};

  async function addToast(
    type: string,
    message: string,
    timeout: number = 3000
  ) {
    const id = Math.floor(Math.random() * 1000000);

    const newToast: Toast = {
      id: id,
      type: type,
      message: message,
      timeout: timeout,
    };

    console.log("adding toast");

    setAllToasts((prev) => [...prev, newToast]);

    toastTimeouts[id] = setTimeout(() => {
      closeToast(id);
    }, timeout);
  }

  async function closeToast(id: number) {
    setAllToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
    <Inspect disabled={false}>
      <div className="h-fit md:h-full w-[100dvw] flex flex-col gap-8 items-center pt-16 pb-24 px-8 overflow-y-scroll no-scrollbar">
        <ToastContainer toasts={allToasts} close={closeToast} />
        {/* TITLE & PAGE DESCRIPTION */}
        <div className="w-full flex flex-col gap-4 items-center">
          <h1 className="text-4xl max-w-[700px] w-4/5">
            Welcome to the Sandbox
            <p className="text-[#A0A0A0] inline font-light">
              –Grounds For Experimentation
            </p>
          </h1>
          <p className="max-w-[700px] w-4/5">
            A 2024 goal of mine is to code every single day. As a full stack
            engineer, I wanted to make sure I was sharpening both swords. Below
            is a collection of small components as projects/experiments I've
            worked on to keep my product design and front end skills sharp. No
            tutorials, just reading docs & experimenting. I work on this when I
            don't have an active project. Press option and hover over anything
            to see the dimensions!
          </p>
        </div>
        <div className="flex flex-col-reverse gap-8 max-w-[1100px] w-full">
          <ComponentContainer
            start="01.01.2024"
            end="0.1.05.2024"
            label="Component Container (Link Component as an Example)"
            handleToast={addToast}
          >
            <CustomLink to="https://www.qmind.ca/" icon underline={false}>
              QMIND
            </CustomLink>
          </ComponentContainer>
          <ComponentContainer
            start="01.02.2024"
            end="01.03.2024"
            label="Toast Component"
            handleToast={addToast}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() =>
                  addToast("success", "This is a success toast!", 3000)
                }
                className="bg-green-900/80 text-green-400 cursor-pointer py-2 px-3 rounded-md text-sm"
              >
                Click for success toast!
              </button>
              <button
                onClick={() =>
                  addToast("error", "This is an error toast!", 3000)
                }
                className="bg-red-900/80 text-red-400 cursor-pointer py-2 px-3 rounded-md text-sm"
              >
                Click for error toast!
              </button>
              <button
                onClick={() =>
                  addToast("warning", "This is a warning toast!", 3000)
                }
                className="bg-yellow-900/80 text-yellow-400 cursor-pointer py-2 px-3 rounded-md text-sm"
              >
                Click for warning toast!
              </button>
              <button
                onClick={() =>
                  addToast("message", "This is a message toast!", 3000)
                }
                className="bg-[#343434]/90 text-white cursor-pointer py-2 px-3 rounded-md text-sm"
              >
                Click for message toast!
              </button>
            </div>
          </ComponentContainer>
          <ComponentContainer
            start="01.04.2024"
            end="01.09.2024"
            label="Select Component"
            handleToast={addToast}
          >
            <Select onChange={handleSelectChange} ref={selectRef}>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value={"Apple"}>Apple</SelectItem>
              <SelectItem value={"Banana"}>Banana</SelectItem>
              <SelectItem value={"Cherry"}>Cherry</SelectItem>
              <SelectItem value={"Peach"}>Peach</SelectItem>
              <SelectItem value={"Strawberry"}>Strawberry</SelectItem>
              <SelectItem value={"Raspberry"}>Raspberry</SelectItem>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value={"Celery"}>Celery</SelectItem>
              <SelectItem value={"Tomatoes"}>Tomatoes</SelectItem>
              <SelectItem value={"Cheeseburger"}>Cheeseburger</SelectItem>
            </Select>
            <ComponentDetails>
              Learned about context providers, how to use React.forwardRef to
              pass a ref to a child, and using refs to make the component
              keyboard accessible.
            </ComponentDetails>
          </ComponentContainer>
          <ComponentContainer
            start="01.10.2024"
            end="01.14.2024"
            label="MultiSelect Component"
            handleToast={addToast}
          >
            <MultiSelect
              onChange={handleMultiSelectChange}
              ref={multiSelectRef}
            >
              <MultiSelectLabel>Fruits 1</MultiSelectLabel>
              <MultiSelectItem value={1}>Apple</MultiSelectItem>
              <MultiSelectItem value={2}>Banana</MultiSelectItem>
              <MultiSelectItem value={3}>Cherry</MultiSelectItem>
              <MultiSelectItem value={4}>Date</MultiSelectItem>
              <MultiSelectLabel>Fruits 2</MultiSelectLabel>
              <MultiSelectItem value={5}>Elderberry</MultiSelectItem>
              <MultiSelectItem value={6}>Fig</MultiSelectItem>
              <MultiSelectItem value={7}>Grape</MultiSelectItem>
              <MultiSelectItem value={8}>Honeydew</MultiSelectItem>
            </MultiSelect>
            <ComponentDetails>
              Learned about leveraging blur handlers to enhance the UX
              (especially with keyboard navigation). Also learned about how to
              use onMouseDown events to prevent the blur handler from firing
              when clicking on the component.
            </ComponentDetails>
          </ComponentContainer>
          <ComponentContainer
            label="Combobox Component"
            start="01.18.2024"
            handleToast={addToast}
          >
            <Combo onChange={handleComboChange} ref={comboRef}>
              <ComboItem value={1}>Apple</ComboItem>
              <ComboItem value={2}>Banana</ComboItem>
              <ComboItem value={3}>Cherry</ComboItem>
              <ComboItem value={4}>Date</ComboItem>
              <ComboItem value={5}>Elderberry</ComboItem>
              <ComboItem value={6}>Fig</ComboItem>
              <ComboItem value={7}>Grape</ComboItem>
              <ComboItem value={8}>Honeydew</ComboItem>
            </Combo>
          </ComponentContainer>
          {/* <ComponentContainer
          label="Tooltip"
          start="01.25.2024"
          handleToast={addToast}
        >
          <Tooltip content="Content here">Words here</Tooltip>
        </ComponentContainer> */}
        </div>
      </div>
    </Inspect>
  );
}

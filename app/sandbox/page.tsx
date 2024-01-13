"use client";

import React, { useEffect, useRef, useState } from "react";
import { ComponentContainer } from "./_components/ComponentContainer";
import { ToastContainer } from "./_components/ToastContainer";

import CustomLink from "../_components/CustomLink";
import Select from "./_components/(Select Components)/Select";
import SelectItem from "./_components/(Select Components)/SelectItem";
import SelectLabel from "./_components/(Select Components)/SelectLabel";
import SelectGroup from "./_components/(Select Components)/SelectGroup";
import MultiSelect from "./_components/(MultiSelect Components)/MultiSelect";
import MultiSelectItem from "./_components/(MultiSelect Components)/MultiSelectItem";
import MultiSelectGroup from "./_components/(MultiSelect Components)/MultiSelectGroup";
import MultiSelectLabel from "./_components/(MultiSelect Components)/MultiSelectLabel";

type Toast = { id: number; type: string; message: string; timeout: number };

export default function Playground() {
  // MultiSelect
  const [multiSelectValues, setMultiSelectValues] = useState<
    (string | number)[]
  >([]);

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
  useEffect(() => {
    console.log(selectRef);
  }, [selectRef]);

  const handleSelectChange = (value: string | number) => {
    setSelectValue(value);
  };

  // Toasts
  const [allToasts, setAllToasts] = useState<Toast[]>([]);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

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

    setAllToasts((prev) => [...prev, newToast]);

    toastTimeouts[id] = setTimeout(() => {
      closeToast(id);
    }, timeout);
  }

  async function closeToast(id: number) {
    setAllToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
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
          engineer, I wanted to make sure I was sharpening both swords. While I
          do LeetCode often, I wanted to make sure I kept my front end game
          strong as well.
        </p>
        <p className="max-w-[700px] w-4/5">
          Below is a collection of small components as projects/experiments I've
          worked on to keep my product design and front end skills sharp. 30-60
          minutes a day. No tutorials, just reading docs & experimenting. mins
          daily.
        </p>
      </div>
      <div className="flex flex-col-reverse gap-8 max-w-[1100px] w-full">
        <ComponentContainer
          start="01.01.2024"
          end="Present"
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
              onClick={() => addToast("error", "This is an error toast!", 3000)}
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
        >
          <Select onChange={handleSelectChange} ref={selectRef}>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value={"Apple"}>Apple</SelectItem>
              <SelectItem value={"Banana"}>Banana</SelectItem>
              <SelectItem value={"Cherry"}>Cherry</SelectItem>
              <SelectGroup>
                <SelectLabel>More Fruits</SelectLabel>
                <SelectItem value={"Peach"}>Peach</SelectItem>
                <SelectItem value={"Strawberry"}>Strawberry</SelectItem>
                <SelectItem value={"Raspberry"}>Raspberry</SelectItem>
              </SelectGroup>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value={"Celery"}>Celery</SelectItem>
              <SelectItem value={"Tomatoes"}>Tomatoes</SelectItem>
              <SelectItem value={"Cheeseburger"}>Cheeseburger</SelectItem>
            </SelectGroup>
          </Select>
        </ComponentContainer>
        <ComponentContainer
          start="01.10.2024"
          end="01.12.2024"
          label="MultiSelect Component"
        >
          <MultiSelect onChange={handleMultiSelectChange}>
            <MultiSelectGroup>
              <MultiSelectLabel>Fruits 1</MultiSelectLabel>
              <MultiSelectItem value={1}>Apple</MultiSelectItem>
              <MultiSelectItem value={2}>Banana</MultiSelectItem>
              <MultiSelectItem value={3}>Cherry</MultiSelectItem>
              <MultiSelectItem value={4}>Date</MultiSelectItem>
            </MultiSelectGroup>
            <MultiSelectGroup>
              <MultiSelectLabel>Fruits 2</MultiSelectLabel>
              <MultiSelectItem value={5}>Elderberry</MultiSelectItem>
              <MultiSelectItem value={6}>Fig</MultiSelectItem>
              <MultiSelectItem value={7}>Grape</MultiSelectItem>
              <MultiSelectItem value={8}>Honeydew</MultiSelectItem>
            </MultiSelectGroup>
          </MultiSelect>
        </ComponentContainer>
        <ComponentContainer
          label="Combobox Component"
          start="01.12.2024"
          end="Present"
        >
          Combobox Component Coming Soon
        </ComponentContainer>
      </div>
    </div>
  );
}

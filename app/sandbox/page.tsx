"use client";

import React, { useRef, useState } from "react";
import { ComponentContainer } from "./_components/ComponentContainer";
import { Toast } from "./_components/Toast";

import CustomLink from "../components/CustomLink";
import { clearInterval } from "timers";

export default function Playground() {
  const [toastTrigger, setToastTrigger] = useState([-1]);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const toastTimeouts: { [key: number]: NodeJS.Timeout } = {};

  async function handleToast(
    type: string = "success",
    message: string = "Done",
    timeout: number = 3000,
    id: number
  ) {
    setToastType(type);
    setToastMessage(message);

    setToastTrigger(toastTrigger.concat(id));
    toastTimeouts[id] = setTimeout(() => {
      closeToast(id);
    }, timeout);
  }

  async function closeToast(id: number) {
    setToastTrigger((currentTriggers) =>
      currentTriggers.filter((item) => item !== id)
    );
  }

  return (
    <div className="h-fit md:h-full w-[100dvw] flex flex-col gap-8 items-center py-16 px-8 overflow-y-scroll no-scrollbar">
      <Toast
        trigger={toastTrigger.includes(0)}
        close={() => closeToast(0)}
        type={toastType}
        message={toastMessage}
      />
      {/* TITLE & PAGE DESCRIPTION */}
      <div className="w-full flex flex-col gap-4 items-center">
        <h1 className="text-4xl max-w-[700px] w-4/5">
          Welcome to the Sandbox {String(toastTrigger)}{" "}
          {String(toastTrigger.includes(0))}
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
          worked on to keep my product design and front end skills sharp.
        </p>
      </div>
      <div className="flex flex-col-reverse gap-8 max-w-[1100px] w-full">
        <ComponentContainer
          date="01.01.2024"
          label="Component Container (Link Component as an Example)"
          handleToast={handleToast}
        >
          <CustomLink to="https://www.qmind.ca/" icon underline={false}>
            QMIND
          </CustomLink>
        </ComponentContainer>
        <ComponentContainer
          date="01.02.2024"
          label="Toast Component"
          handleToast={handleToast}
        >
          <div className="flex gap-4">
            <button
              onClick={() =>
                handleToast("success", "This is a success toast!", 2000, 0)
              }
              className="bg-green-700/25 text-green-500 cursor-pointer py-2 px-3 rounded-md text-sm"
            >
              Click for success toast!
            </button>
            <button
              onClick={() =>
                handleToast("error", "This is an error toast!", 2000, 0)
              }
              className="bg-red-500/25 text-red-500 cursor-pointer py-2 px-3 rounded-md text-sm"
            >
              Click for error toast!
            </button>
            <button
              onClick={() =>
                handleToast("message", "This is a message toast!", 2000, 0)
              }
              className="bg-gray-500/25 text-white cursor-pointer py-2 px-3 rounded-md text-sm"
            >
              Click for message toast!
            </button>
          </div>
        </ComponentContainer>
      </div>
    </div>
  );
}

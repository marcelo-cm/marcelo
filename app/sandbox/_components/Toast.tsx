"use client";

import { ClipboardCopyIcon, Cross2Icon } from "@radix-ui/react-icons";
import React, { useState, forwardRef } from "react";

export const Toast = ({
  trigger,
  close,
  message,
  children,
  type,
}: {
  trigger?: any;
  close?: Function;
  message: string;
  children?: any;
  type?: string;
}) => {
  return (
    <div
      onClick={() => close && close()}
      className={`cursor-pointer transition-all duration-300 absolute top-0 left-1/2 -translate-x-1/2 py-2 px-3 rounded-md text-sm z-50
      ${trigger ? "top-2 translate-y-0" : "top-0 -translate-y-[150%]"}
      ${
        type === "success"
          ? "bg-green-700/25 text-green-500"
          : type === "error"
          ? "bg-red-500/25 text-red-500"
          : "bg-gray-500/25 text-white"
      } `}
    >
      {message}
    </div>
  );
};

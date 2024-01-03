"use client";

import { ClipboardCopyIcon, Cross2Icon } from "@radix-ui/react-icons";
import React, { useState, forwardRef } from "react";

export const ToastContainer = ({
  toasts,
  close,
}: {
  toasts: any;
  close?: Function;
}) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 h-fit flex flex-col-reverse gap-2 items-center ${
        toasts.length > 0 ? "top-2 translate-y-0" : "-top-2 -translate-y-full"
      }`}
    >
      {toasts.map((toast: any) => (
        <div
          onClick={() => close && close(toast.id)}
          className={`w-fit cursor-pointer transition-all duration-300 py-2 px-3 rounded-md text-sm z-50
      ${
        toast.type === "success"
          ? "bg-green-900/80 text-green-400"
          : toast.type === "error"
          ? "bg-red-900/80 text-red-400"
          : toast.type === "warning"
          ? "bg-yellow-900/80 text-yellow-400"
          : "bg-[#343434]/90 text-white"
      }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

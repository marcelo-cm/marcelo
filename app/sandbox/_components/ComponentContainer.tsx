"use client";

import { ClipboardCopyIcon, Cross2Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import toJsxString from "react-element-to-jsx-string";

export const ComponentContainer = ({
  start,
  end,
  label,
  handleToast,
  className,
  children,
}: {
  start: string;
  end?: string;
  label?: string;
  handleToast?: Function;
  className?: string;
  children?: any;
}) => {
  const [sourceOpen, setSourceOpen] = useState(false);
  const childrenSource = toJsxString(children);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Handle the success case - maybe show a tooltip, change icon, etc.
      console.log("Text copied to clipboard");
    } catch (err) {
      // Handle the error case
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-full border border-[1px] border-[#2e2e2e] border-dashed hover:border-dotted p-16 rounded-lg ">
        {children}
      </div>
      <div className="flex gap-2 z-50 justify-between p-2 text-xs text-[#a0a0a0] flex-wrap">
        <p className="break-keep">{label}</p>
        <p className="break-keep">
          {start} {end ? `- ${end}` : null}
        </p>
      </div>
      <div className="hidden md:flex w-fit left-1/2 -translate-x-1/2 absolute bottom-[3px] flex justify-center">
        <button
          onClick={() => setSourceOpen((prev) => !prev)}
          className="w-fit active:ring-1 ring-[#A0A0A0] text-xs text-[#a0a0a0] select-none	hover:text-white hover:bg-[#232323] py-1 px-2 rounded-md break-keep"
        >
          Source Code
        </button>
        {sourceOpen ? (
          <div className="absolute top-8 bg-[#161616] w-[700px] overflow-scroll no-scrollbar border border-[#2e2e2e] rounded-lg p-4">
            <div className="absolute top-2 right-2 flex gap-0 text-[#A0A0A0]">
              <button
                onClick={async () => {
                  await copyToClipboard(childrenSource);
                  handleToast && handleToast("success", "Copied!", 3000);
                  setSourceOpen(false);
                }}
                className="p-2 hover:bg-[#2e2e2e]/75 hover:text-white rounded-md active:ring-1 ring-[#A0A0A0]"
              >
                <ClipboardCopyIcon />
              </button>
              <button
                onClick={() => setSourceOpen(false)}
                className="p-2 hover:bg-red-700/10 hover:text-red-500 rounded-md active:ring-1 ring-red-600"
              >
                <Cross2Icon />
              </button>
            </div>
            <pre className="text-xs text-pretty whitespace-pre-wrap">
              {childrenSource}
            </pre>
          </div>
        ) : null}
      </div>
    </div>
  );
};

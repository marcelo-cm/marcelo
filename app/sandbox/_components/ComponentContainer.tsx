'use client';

import React, { useState } from 'react';

import {
  CaretDownIcon,
  ClipboardCopyIcon,
  Cross2Icon,
} from '@radix-ui/react-icons';

import toJsxString from 'react-element-to-jsx-string';

import ComponentDetails from './ComponentDetails';

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
  const childrenSource = toJsxString(React.Children.toArray(children)[0]);
  const childrenArray = React.Children.toArray(children);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Handle the success case - maybe show a tooltip, change icon, etc.
      console.log('Text copied to clipboard');
      handleToast && handleToast('success', 'Copied!', 3000);
    } catch (err) {
      // Handle the error case
      console.error('Failed to copy: ', err);
      handleToast && handleToast('error', 'Failed to Copy', 3000);
    }
  };

  const detailsChildren = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === ComponentDetails,
  );

  const learnings =
    React.isValidElement(detailsChildren) &&
    detailsChildren.type === ComponentDetails;

  const [isLearningOpen, setIsLearningOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className="w-full border border-[#2e2e2e] border-dashed hover:border-dotted px-8 py-16 rounded-lg flex flex-row justify-center">
        {childrenArray[0]}
      </div>
      <div className="flex gap-2 flex-col p-2 text-xs text-[#a0a0a0]">
        <div className="flex gap-2 z-40 justify-between flex-wrap relative">
          {/* Label + Learnings */}
          <div className="break-keep flex flex-row gap-1 items-center relative">
            {label}
            <div className="hidden md:flex">
              {learnings ? (
                <div
                  onBlur={() => setIsLearningOpen(false)}
                  className="relative"
                  tabIndex={0}
                >
                  <button
                    onClick={() => setIsLearningOpen((prev) => !prev)}
                    className="p-[2px] rounded-full active:ring-1 ring-[#A0A0A0] text-xs text-[#a0a0a0] select-none	hover:text-white hover:bg-[#232323]"
                  >
                    <CaretDownIcon />
                  </button>
                  {isLearningOpen ? (
                    <div
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                    >
                      {detailsChildren}{' '}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
          <p className="break-keep">
            {start} {end ? `- ${end}` : null}
          </p>
          {/* Source Code */}
          {/* <div
            onBlur={() => setSourceOpen(false)}
            className='hidden md:flex w-fit left-1/2 -translate-x-1/2 absolute -bottom-[2px] flex justify-center'
          >
            <button
              onClick={() => setSourceOpen((prev) => !prev)}
              className='w-fit active:ring-1 ring-[#A0A0A0] text-xs text-[#a0a0a0] select-none	hover:text-white hover:bg-[#232323] py-1 px-2 rounded-md break-keep'
            >
              Source Code
            </button>
            {sourceOpen ? (
              <div
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
                className='absolute top-8 bg-[#161616] w-[700px] overflow-scroll no-scrollbar border border-[#2e2e2e] rounded-lg p-4'
              >
                <div className='absolute top-2 right-2 flex gap-0 text-[#A0A0A0]'>
                  <button
                    onClick={async () => {
                      await copyToClipboard(childrenSource);
                      setSourceOpen(false);
                    }}
                    className='p-2 hover:bg-[#2e2e2e]/75 hover:text-white rounded-md active:ring-1 ring-[#A0A0A0]'
                  >
                    <ClipboardCopyIcon />
                  </button>
                  <button
                    onClick={() => setSourceOpen(false)}
                    className='p-2 hover:bg-red-700/10 hover:text-red-500 rounded-md active:ring-1 ring-red-600'
                  >
                    <Cross2Icon />
                  </button>
                </div>
                <pre className='text-xs text-pretty whitespace-pre-wrap'>
                  {childrenSource}
                </pre>
              </div>
            ) : null}
          </div> */}
        </div>
      </div>
    </div>
  );
};

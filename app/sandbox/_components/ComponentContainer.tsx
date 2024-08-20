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
      <div className="flex w-full flex-row justify-center rounded-lg border border-dashed border-[#2e2e2e] px-8 py-16 hover:border-dotted">
        {childrenArray[0]}
      </div>
      <div className="flex flex-col gap-2 p-2 text-xs text-[#a0a0a0]">
        <div className="relative z-40 flex flex-wrap justify-between gap-2">
          {/* Label + Learnings */}
          <div className="relative flex flex-row items-center gap-1 break-keep">
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
                    className="select-none rounded-full p-[2px] text-xs text-[#a0a0a0] ring-[#A0A0A0] hover:bg-[#232323] hover:text-white active:ring-1"
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

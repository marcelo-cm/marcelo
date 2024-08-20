'use client';

import React from 'react';

export const ToastContainer = ({
  toasts,
  close,
}: {
  toasts: any;
  close?: Function;
}) => {
  return (
    <div
      className={`absolute left-1/2 z-50 flex h-fit -translate-x-1/2 flex-col-reverse items-center gap-2 transition-all duration-300 ${
        toasts.length > 0 ? 'top-2 translate-y-0' : '-top-2 -translate-y-full'
      }`}
    >
      {toasts.map((toast: any, key: number) => (
        <div
          key={key}
          onClick={() => close && close(toast.id)}
          className={`z-50 w-fit cursor-pointer rounded-md px-3 py-2 text-sm transition-all duration-300 ${
            toast.type === 'success'
              ? 'bg-green-900/80 text-green-400'
              : toast.type === 'error'
                ? 'bg-red-900/80 text-red-400'
                : toast.type === 'warning'
                  ? 'bg-yellow-900/80 text-yellow-400'
                  : 'bg-[#343434]/90 text-white'
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

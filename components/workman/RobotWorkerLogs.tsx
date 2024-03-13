"use client";

import React from "react";

const RobotWorkerLogs = ({ data }: { data: { [key: string]: number } }) => {
  return (
    <div className="w-1/3 max-w-[500px] bg-[#161616] h-full border-l border-[#1E1E1E] px-8 pt-36 pb-12 flex flex-col gap-8">
      <div className="flex flex-col h-fit relative">
        {Object.entries(data).map(([key, value], k) =>
          key === "REPEAT START" ? (
            <p className="text-xs font-semibold text-workman-purp-secondary pl-4 py-1">
              ACTION START
            </p>
          ) : key === "REPEAT END" ? (
            <p className="text-xs font-semibold text-workman-purp-secondary pl-4 py-1">
              ACTION REPEATED: {value}
            </p>
          ) : (
            <div key={k} className="z-10 flex gap-4 h-8 items-center">
              <div
                className={`${
                  value === 2
                    ? "w-[3px] bg-workman-purp"
                    : value === 1
                    ? "w-[3px] bg-workman-purp-secondary"
                    : null
                } h-full`}
              />
              {key}
            </div>
          )
        )}
        <div className="z-0 h-full w-[1px] ml-[1px] bg-gradient-to-b from-zinc-800 via-neutral-400 to-zinc-800 absolute" />
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-400 mb-1">
          ROBOT LOGS
        </p>
        <div className="relative bg-neutral-950 rounded-lg border border-[#1E1E1E] p-4 border-stone-900 h-32" />
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-400 mb-1">LIVE VIEW</p>
        <div className="relative bg-neutral-950 rounded-lg border border-[#1E1E1E] p-4 border-stone-900 h-64" />
      </div>
    </div>
  );
};

export default RobotWorkerLogs;

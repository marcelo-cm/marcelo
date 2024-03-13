"use client";

import { Button } from "@/components/ui/button";
import { useJobAppFormContext } from "@/lib/hooks/useJobAppFormContext";
import React from "react";

const JobAppActionBar = () => {
  const context = useJobAppFormContext();

  if (!context) {
    return <div>Could not mount context</div>;
  }

  const { states, functions, data } = context;
  const { canSubmit } = states;

  return (
    <div className="bg-[#161616] w-full h-fit py-4 px-12 border-t border-[#1E1E1E] flex justify-end">
      <Button disabled={!canSubmit}>Run Robot</Button>
    </div>
  );
};

export default JobAppActionBar;

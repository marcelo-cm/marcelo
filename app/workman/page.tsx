"use client";

import "@radix-ui/themes/styles.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { JobAppFormProvider } from "./JobAppForm/JobAppFormContext";
import JobAppForm from "./JobAppForm/JobAppForm";
import { Button } from "@/components/ui/button";
import { useJobAppFormContext } from "@/lib/hooks/useJobAppFormContext";
import JobAppActionBar from "./JobAppForm/JobAppActionBar";
import RobotWorkerLogs from "@/components/workman/RobotWorkerLogs";
import { useState } from "react";

function WorkmanForm() {
  const [robotLogs, setRobotLogs] = useState({
    "Robot Reading Your Inputs": 2,
    "REPEAT START": 0,
    "Visiting Job Application Link": 2,
    "Filling in Job Application": 1,
    "Reviewing Inputs": 0,
    "Submitting Application": 0,
    "REPEAT END": 4,
    "Checking we didn't miss a spot": 0,
  });

  return (
    <JobAppFormProvider className="font-inter flex flex-col w-full grow text-purple-50">
      <div className="flex flex-col md:flex-row h-[100dvh] md:h-full overflow-scroll">
        <div className="flex-1 px-8 py-24 md:py-36 md:px-24">
          <div className="flex flex-col gap-2 mb-12">
            <h1 className="text-4xl font-semibold text-workman-purp">
              Job Application Robot{" "}
            </h1>
            <p className="font-light">
              We hate filling in the same form a million times too... but we’ll
              do it for you. <br />
              All you need to do is fill in the form below, once.
            </p>
          </div>
          <div className="flex flex-1">
            <JobAppForm />
          </div>
        </div>
        <RobotWorkerLogs data={robotLogs} />
      </div>
      <JobAppActionBar />
      <BackgroundBeams className="-z-50 bg-[#161616]" />
    </JobAppFormProvider>
  );
}

export default WorkmanForm;

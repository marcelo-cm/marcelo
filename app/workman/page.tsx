"use client";

import "@radix-ui/themes/styles.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { JobAppFormProvider } from "./JobAppForm/JobAppFormContext";
import JobAppForm from "./JobAppForm/JobAppForm";
import { Button } from "@/components/ui/button";
import { useJobAppFormContext } from "@/lib/hooks/useJobAppFormContext";
import JobAppActionBar from "./JobAppForm/JobAppActionBar";

function WorkmanForm() {
  return (
    <JobAppFormProvider className="font-inter flex flex-col w-full grow text-purple-50">
      <div className="flex flex-row items-center h-full">
        <div className="flex-1 px-24">
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
          {/* form */}
          <div className="flex flex-1">
            <JobAppForm />
          </div>
        </div>
        {/* worker */}
        <div className="w-1/3 max-w-[500px] bg-[#111110] h-full border-l border-[#1E1E1E]">
          Logs
        </div>
      </div>
      <JobAppActionBar />
      <BackgroundBeams className="-z-50 bg-[#111110]" />
    </JobAppFormProvider>
  );
}

export default WorkmanForm;

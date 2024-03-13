import { JobAppFormContext } from "@/app/workman/JobAppForm/JobAppFormContext";
import { useContext } from "react";

export const useJobAppFormContext = () => {
  return useContext(JobAppFormContext);
};

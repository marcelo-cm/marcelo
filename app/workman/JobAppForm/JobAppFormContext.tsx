import { ReactNode, createContext, useEffect, useState } from "react";

interface JobAppFormContextProps {
  functions: {
    handleChange: (e: React.ChangeEventHandler<HTMLInputElement> | any) => void;
  };
  states: {
    canSubmit: boolean;
  };
  data: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    grad_year: string;
    school: string;
    major: string;
    grade: string;
    resume: null | File | any;
  };
}

const defaultJobAppFormContext: JobAppFormContextProps = {
  functions: {
    handleChange: () => {},
  },
  states: {
    canSubmit: false,
  },
  data: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    grad_year: "",
    school: "",
    major: "",
    grade: "",
    resume: null,
  },
};

export const JobAppFormContext = createContext<JobAppFormContextProps>(
  defaultJobAppFormContext
);

export const JobAppFormProvider = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [data, setData] = useState(defaultJobAppFormContext.data);

  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const isFormFilled = Object.values(data).every(
      (value) => value !== null || (value && String(value).trim() !== "")
    );

    setCanSubmit(isFormFilled);
  }, [data]);

  const handleChange = (
    e: React.ChangeEventHandler<HTMLInputElement> | any
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={className}>
      <JobAppFormContext.Provider
        value={{
          data: data,
          states: { canSubmit },
          functions: {
            handleChange,
          },
        }}
      >
        {children}
      </JobAppFormContext.Provider>
    </div>
  );
};

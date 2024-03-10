"use client";

import { MagnifyingGlassIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { TextField, Theme } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import "@radix-ui/themes/styles.css";
import { useEffect, useState } from "react";

const questions = [
  {
    id: "first_name",
    value: "first name",
    question: "What is your first name?",
    placeholder: "Enter your first name",
    type: "text",
  },
  {
    id: "last_name",
    value: "last name",
    question: "What is your last name?",
    placeholder: "Enter your last name",
    type: "text",
  },
  {
    id: "email",
    value: "email",
    question: "What is your email?",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    id: "phone",
    value: "phone number",
    question: "What is your phone number?",
    placeholder: "+1 905 123 4567",
    type: "text",
  },
  {
    id: "resume",
    value: "resume",
    question: "Please submit your resume.",
    placeholder: "File",
    type: "file",
  },
];

function WorkmanForm() {
  const initialFormState = questions.reduce(
    (acc: { [key: string]: any }, question) => {
      // Set initial value to '' for text and email, and null for file types
      acc[question.id] = question.type === "file" ? { name: "" } : "";
      return acc;
    },
    {}
  );

  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const { files } = e.target;
    console.log(e);
    if (files.length > 0) {
      setFormState((prevState) => ({
        ...prevState,
        resume: files[0], // Only considering single file upload here
      }));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Theme appearance="dark">
        <div className="flex flex-col gap-4">
          <Form.Root className="w-[520px] flex flex-col gap-4">
            {questions.map((question, k) =>
              question.type === "file" ? (
                <Form.Field
                  key={k}
                  name={question.id}
                  className="w-full border border-[#43474E] bg-[#0D0D0E] rounded-sm text-white font-normal relative hover:opacity-80"
                >
                  <Form.Label className="text-[15px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {formState.resume.name
                      ? formState.resume.name
                      : question.question}
                  </Form.Label>
                  <input
                    type="file"
                    className="appearance-none opacity-0 w-full border cursor-pointer"
                    onChange={handleFileChange}
                  />
                </Form.Field>
              ) : (
                <Form.Field key={k} name={question.id}>
                  <div className="flex items-baseline justify-between mb-[2px]">
                    <Form.Label className="text-[15px] font-semibold text-white">
                      {question.question}
                    </Form.Label>
                    <Form.Message
                      className="text-[13px] text-white opacity-[0.8]"
                      match="valueMissing"
                    >
                      Please enter your {question.value}
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <TextField.Input
                      placeholder={question.placeholder}
                      required
                      onChange={handleInputChange}
                    />
                  </Form.Control>
                </Form.Field>
              )
            )}

            <Form.Submit
              className="flex items-center justify-center w-full h-8 bg-[#1d4ed8] text-[15px] rounded-md text-white font-semibold"
              type="submit"
            >
              Submit
            </Form.Submit>
          </Form.Root>
        </div>
      </Theme>
    </div>
  );
}

export default WorkmanForm;

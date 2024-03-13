import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useJobAppFormContext } from "@/lib/hooks/useJobAppFormContext";
import React from "react";

const JobAppForm = () => {
  const context = useJobAppFormContext();

  if (!context) {
    return <div>Could not mount context</div>;
  }

  const { states, functions, data } = context;
  const { canSubmit } = states;
  const { handleChange } = functions;

  const formFields: { [key: string]: string | string[] }[] = [
    {
      label: "First Name",
      name: "first_name",
      type: "text",
      placeholder: "Marcelo",
    },
    {
      label: "Last Name",
      name: "last_name",
      type: "text",
      placeholder: "Chaman Mallqui",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "marcechaman@gmail.com",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "text",
      placeholder: "+1 905 599 3866",
    },
    {
      label: "Graduation Year",
      name: "grad_year",
      type: "text",
      placeholder: "2026",
    },
    {
      label: "School",
      name: "school",
      type: "text",
      placeholder: "Queen's University",
    },
    {
      label: "Major",
      name: "major",
      type: "text",
      placeholder: "Commerce",
    },
    {
      label: "Grade",
      name: "grade",
      type: "text",
      placeholder: "4.13/4.3",
    },
    {
      label: "Resume",
      name: "resume",
      type: "file",
      placeholder: "MarceloChamanMallquiResume.pdf",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {formFields.map((field, k) =>
        field.type === "dropdown" ? (
          <div key={k} className="flex">
            <Label htmlFor={field.name.toString()}>{field.label}</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-full">
                  {data[field.name as keyof typeof data] || "Select"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={data[field.name as keyof typeof data]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        type: "checkbox",
                        name: field.name,
                        value: value,
                      },
                    })
                  }
                >
                  {Array.isArray(field.options) &&
                    field.options.map((option) => (
                      <DropdownMenuRadioItem key={option} value={option}>
                        {option}
                      </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : field.type === "checkbox" ? (
          <div className="flex items-center justify-between pr-2" key={k}>
            <Label htmlFor={field.name.toString()}>{field.label}</Label>
            <Checkbox
              onCheckedChange={() =>
                handleChange({
                  target: {
                    type: "checkbox",
                    name: field.name,
                    value: !data[field.name as keyof typeof data],
                  },
                })
              }
              name={field.name.toString()}
              checked={data[field.name as keyof typeof data]}
            />
          </div>
        ) : field.type === "long_text" ? (
          <div key={k} className="flex flex-row">
            <Label htmlFor={field.name.toString()}>{field.label}</Label>
            <Textarea
              onChange={handleChange}
              name={field.name.toString()}
              placeholder={field.placeholder.toString()}
              value={data[field.name as keyof typeof data]}
            />
            <p className="text-xs flex justify-end mt-1">
              Word Count:{" "}
              {data[field.name as keyof typeof data]?.split(" ").length - 1 ||
                0}
            </p>
          </div>
        ) : (
          <div key={k} className="flex flex-row items-center">
            <Label
              htmlFor={field.name.toString()}
              className="w-[120px] leading-tight"
            >
              {field.label}
            </Label>
            <Input
              onChange={handleChange}
              name={field.name.toString()}
              type={field.type.toString()}
              placeholder={field.placeholder.toString()}
              value={data[field.name as keyof typeof data]}
            />
          </div>
        )
      )}
    </div>
  );
};

export default JobAppForm;

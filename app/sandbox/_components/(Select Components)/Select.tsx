import { FunctionComponent, forwardRef, useRef } from "react";

interface SelectProps {
  children: React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(({ children }, ref) => {
  console.log(ref);
  return <div ref={ref}>{children}</div>;
});

export default Select;

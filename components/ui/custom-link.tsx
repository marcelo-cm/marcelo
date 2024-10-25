import React, { ReactNode } from 'react';

import Image from 'next/image';

interface CustomLinkProps {
  to: string;
  icon?: boolean;
  underline?: boolean;
  children: ReactNode;
}

const CustomLink = ({
  to,
  icon = true,
  underline = true,
  children,
}: CustomLinkProps) => {
  return (
    <a
      className="inline-flex flex-wrap items-center gap-[6px] fill-u-300 text-u-300 underline underline-offset-2 hover:fill-white hover:text-white"
      href={to}
      target="_blank"
    >
      {children}
      {icon ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[2px] hidden md:inline md:h-fit"
        >
          <path
            d="M13.001 16H2.00098C0.896407 16 0.000976562 15.1046 0.000976562 14V3C0.000976562 1.89543 0.896407 1 2.00098 1H6.00098V3H2.00098V14H13.001V10H15.001V14C15.001 15.1046 14.1055 16 13.001 16ZM7.70098 9.707L6.29098 8.293L12.584 2H9.00098V0H16.001V7H14.001V3.415L7.70098 9.707Z"
            className="fill-current"
          />
        </svg>
      ) : null}
    </a>
  );
};

export default CustomLink;

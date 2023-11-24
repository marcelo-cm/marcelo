"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import path from "path";

const Navbar = () => {
  const NavbarItem = ({
    href,
    children,
    target,
  }: {
    href: string;
    children: React.ReactNode;
    target?: string;
  }) => {
    const pathname = usePathname();
    const isActive = pathname.endsWith(href);

    return (
      <a
        className={`py-[6px] px-4 rounded-full h-fit w-fit hover:opacity-75 active:bg-white/10 active:[text-shadow:_0_0_5px_rgb(255_255_255_/_10%)] active:drop-shadow-[0_0_5px_rgb(255_255_255_/_80%)]: transition-all ${
          isActive
            ? "bg-white/10 [text-shadow:_0_0_5px_rgb(255_255_255_/_10%)] drop-shadow-[0_0_5px_rgb(255_255_255_/_80%)]"
            : " "
        }`}
        href={href}
        target={target}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="z-50 w-fit h-fit p-[4px] border-[1px] flex flex-row flex-nowrap gap-2 border-[#2e2e2e] bg-[#1C1C1C] absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full">
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/about">About</NavbarItem>
      <NavbarItem href="mailto:marcechaman@gmail.com" target="_black">
        Contact
      </NavbarItem>
    </div>
  );
};

export default Navbar;

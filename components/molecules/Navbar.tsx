'use client';

import React from 'react';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import path from 'path';

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
        className={`h-fit w-fit rounded-full px-4 py-[6px] transition-all hover:opacity-75 active:bg-white/10 active:drop-shadow-[0_0_5px_rgb(255_255_255_/_80%)] active:[text-shadow:_0_0_5px_rgb(255_255_255_/_10%)] ${
          isActive
            ? 'bg-white/10 drop-shadow-[0_0_5px_rgb(255_255_255_/_80%)] [text-shadow:_0_0_5px_rgb(255_255_255_/_10%)]'
            : ' '
        }`}
        href={href}
        target={target}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="absolute bottom-8 left-1/2 z-50 flex h-fit w-fit -translate-x-1/2 flex-row flex-nowrap gap-2 rounded-full border-[1px] border-[#2e2e2e] bg-[#1C1C1C] p-[4px]">
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/about">About</NavbarItem>
      <NavbarItem href="mailto:marcechaman@gmail.com" target="_black">
        Contact
      </NavbarItem>
    </div>
  );
};

export default Navbar;

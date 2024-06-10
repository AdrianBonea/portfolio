'use client';

import React from 'react';

import { useMenuStore } from '@/store';

type HomePageWrapperProps = {
  children: React.ReactNode;
};

const HomePageWrapper = ({ children }: HomePageWrapperProps) => {
  const isOpen = useMenuStore((state) => state.menuIsOpen);
  return (
    <main
      className={`mx-6 h-screenMinusNavbar flex-row items-center justify-center  ${isOpen ? 'hidden' : 'flex'}`}
    >
      {children}
    </main>
  );
};

export { HomePageWrapper };

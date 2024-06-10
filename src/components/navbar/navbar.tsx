'use client';

import { useEffect } from 'react';

import { useScreenSize } from '@/hooks';
import { useMenuStore } from '@/store';

import { NavbarDesktop } from './navbar-desktop';
import { NavbarMobile } from './navbar-mobile';

type NavbarProps = {
  title: string;
  home: string;
  about: string;
  contact: string;
  projects: string;
  findMe: string;
};

export const Navbar = ({
  title,
  home,
  about,
  contact,
  projects,
  findMe,
}: NavbarProps): JSX.Element => {
  const isOpen: boolean = useMenuStore((state) => state.menuIsOpen);
  const setOpen = useMenuStore((state) => state.toggleMenu);

  const width: number = useScreenSize().width;

  useEffect(() => {
    if (width > 1024 && isOpen) {
      setOpen();
    }
  }, [width]);

  useEffect(() => {
    const matchMedia = window.matchMedia('(max-width: 768px)'); // Adjust this value to your 'sm' breakpoint

    if (isOpen && matchMedia.matches) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={`flex h-16  border-b-[1px] border-lines text-base font-[450] text-secondary-grey  ${isOpen ? 'h-full flex-col' : 'flex-row'}`}
    >
      <NavbarDesktop
        isOpen={isOpen}
        title={title}
        home={home}
        about={about}
        projects={projects}
        contact={contact}
        setOpen={setOpen}
      />

      <NavbarMobile
        about={about}
        isOpen={isOpen}
        title={title}
        setOpen={setOpen}
        home={home}
        projects={projects}
        contact={contact}
        findMe={findMe}
      />
    </nav>
  );
};

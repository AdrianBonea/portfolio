'use client';

import { useScreenSize } from '@/hooks';
import { useMenuStore } from '@/store';
import { useEffect } from 'react';
import { NavbarInHeader } from './NavbarDesktop';
import { NavbarHamburger } from './NavbarMobile';

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

  return (
    <nav
      className={`flex h-16 border-b-[1px] border-lines text-base font-[450] text-secondary-grey  ${isOpen ? 'h-screen flex-col' : 'flex-row'}`}
    >
      <NavbarInHeader
        isOpen={isOpen}
        title={title}
        home={home}
        about={about}
        projects={projects}
        contact={contact}
        setOpen={setOpen}
      />

      <NavbarHamburger
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

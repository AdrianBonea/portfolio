'use client';

import Link from 'next/link';

type NavbarProps = {
  title: string;
  home: string;
  about: string;
  contact: string;
  projects: string;
};

export const Navbar = ({
  title,
  home,
  about,
  contact,
  projects,
}: NavbarProps): JSX.Element => {
  return (
    <nav className='flex h-16 flex-row  border-b-[1px] border-lines text-base font-[450] text-secondary-grey '>
      <div className='flex w-auto flex-row items-center whitespace-nowrap'>
        <h2 className='border-lines py-5 pl-6 hover:cursor-default lg:border-r-[1px] lg:pr-40'>
          {title}
        </h2>
        <Link
          href='./'
          className='hidden border-r-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white lg:flex'
        >
          {home}
        </Link>
        <Link
          href='/about'
          className='hidden border-r-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white lg:flex'
        >
          {about}
        </Link>
        <Link
          href='./projects'
          className='hidden border-r-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white lg:flex'
        >
          {projects}
        </Link>
      </div>
      <div className='hidden w-full  justify-end whitespace-nowrap border-lines lg:flex'>
        <Link
          href='contact'
          className='border-l-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
        >
          {contact}
        </Link>
      </div>

      <div className='flex w-full  justify-end whitespace-nowrap border-lines lg:hidden'>
        <i className='ri-menu-fill px-8 py-5 text-body hover:border-b-accent-orange hover:text-white'></i>
      </div>
    </nav>
  );
};

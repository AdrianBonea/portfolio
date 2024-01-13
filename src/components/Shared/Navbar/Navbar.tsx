'use client';

import Link from 'next/link';

type NavbarProps = {
  title: string;
  home: string;
  about: string;
  contact: string;
};

export const Navbar = ({ title, home, about, contact }: NavbarProps) => {
  return (
    <nav className='flex h-16 flex-row border-b-[1px] border-lines text-base font-[450] text-secondary-grey'>
      <div className='flex w-auto flex-row items-center whitespace-nowrap'>
        <h2 className='border-r-[1px] border-lines py-5 pl-6 pr-40 hover:cursor-default'>
          {title}
        </h2>
        <Link
          href=''
          className='border-r-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
        >
          _hello
        </Link>
        <Link
          href=''
          className='border-r-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
        >
          _about-me
        </Link>
        <Link
          href=''
          className='border-r-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
        >
          _projects
        </Link>
      </div>
      <div className='flex w-full justify-end  whitespace-nowrap border-lines'>
        <Link
          href=''
          className='border-l-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
        >
          _contact-me
        </Link>
      </div>
    </nav>
  );
};

import { Link } from '@/navigation';
import { HamburgerIcon } from '../icons/hamburger-icon';

type NavbarInHeaderProps = {
  isOpen: boolean;
  title: string;
  home: string;
  about: string;
  projects: string;
  contact: string;
  setOpen: () => void;
};

const NavbarDesktop = ({
  isOpen,
  title,
  home,
  about,
  projects,
  contact,
  setOpen,
}: NavbarInHeaderProps) => {
  return (
    <>
      <div
        className={`w-auto flex-row items-center whitespace-nowrap ${isOpen ? 'hidden' : 'flex'}`}
      >
        <h2 className='hidden border-lines py-5 pl-6 hover:cursor-default lg:flex lg:border-r-[1px] lg:pr-40'>
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
      <h2
        className={`whitespace-nowrap border-lines py-5 pl-6 hover:cursor-default lg:hidden lg:border-r-[1px] lg:pr-40 ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        {title}
      </h2>
      <button
        className={`${
          isOpen ? 'hidden' : 'flex'
        } w-full justify-end whitespace-nowrap border-lines lg:hidden`}
        onClick={setOpen}
      >
        <HamburgerIcon />
      </button>
    </>
  );
};

export { NavbarDesktop };

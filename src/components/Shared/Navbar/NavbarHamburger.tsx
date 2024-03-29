import { gitProfileUrl, linkedinUrl } from '@/constants/Shared/urls';
import Link from 'next/link';
import { LocaleSwitcher } from '../Footer/LangButton';

type NavbarHamburgerProps = {
  isOpen: boolean;
  title: string;
  setOpen: () => void;
  home: string;
  projects: string;
  about: string;
  contact: string;
  findMe: string;
};

const NavbarHamburger = ({
  isOpen,
  title,
  setOpen,
  home,
  projects,
  about,
  contact,
  findMe,
}: NavbarHamburgerProps) => {
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } z-50 h-screen w-full flex-col bg-primary-light lg:hidden`}
    >
      <div className='flex w-full flex-row justify-between border-b-[1px] border-lines'>
        <h2 className='flex whitespace-nowrap border-lines py-5 pl-6 hover:cursor-default lg:border-r-[1px] lg:pr-40'>
          {title}
        </h2>
        <button
          className={`whitespace-nowrap border-lines lg:hidden`}
          onClick={setOpen}
        >
          <i className='ri-menu-fill px-8 py-5 text-body hover:border-b-accent-orange hover:text-white'></i>
        </button>
      </div>
      <Link
        href='./'
        className='border-b-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
      >
        {home}
      </Link>
      <Link
        href='/about'
        className='border-b-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
      >
        {about}
      </Link>
      <Link
        href='/projects'
        className='border-b-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
      >
        {projects}
      </Link>
      <Link
        href='/contact'
        className='border-b-[1px] border-lines px-8 py-5 hover:border-b-[2px] hover:border-b-accent-orange hover:text-white'
      >
        {contact}
      </Link>

      <div className='flex h-full w-auto flex-row items-end whitespace-nowrap'>
        <div className='flex w-full items-center border-t-[1px] border-lines'>
          <h2 className='flex h-10 items-center self-center px-4 py-2 hover:cursor-default'>
            {findMe}
          </h2>
          <Link
            target={'_blank'}
            href={linkedinUrl}
            className='h-10 items-center border-l-[1px] border-r-[1px] border-lines '
          >
            <i className='ri-linkedin-box-fill flex h-10 items-center  px-4 py-1 text-3xl hover:text-white'></i>
          </Link>

          <Link
            target={'_blank'}
            href={gitProfileUrl}
            className='h-10 items-center  border-r-[1px] border-lines '
          >
            <i className='ri-github-fill flex h-10 items-center px-4 py-1 text-3xl hover:text-white'></i>
          </Link>

          <div className='flex h-10 w-auto flex-row items-center whitespace-nowrap'>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavbarHamburger };

import { gitProfileUrl, linkedinUrl } from '@/constants/Shared/urls';
import { useScreenSize } from '@/hooks';
import { Link, usePathname } from '@/navigation';

import { HamburgerIcon } from '../icons/hamburger-icon';
import { LocaleSwitcher } from '../lang-switcher/lang-switcher';

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

type LinksList = {
  href: string;
  text: string;
};

const NavbarMobile = ({
  isOpen,
  title,
  setOpen,
  home,
  projects,
  about,
  contact,
  findMe,
}: NavbarHamburgerProps) => {
  const pathName = usePathname();
  const width: number = useScreenSize().width;

  const linksList: LinksList[] = [
    { href: '/', text: home },
    { href: '/about', text: about },
    { href: '/projects', text: projects },
    { href: '/contact', text: contact },
  ];

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
          <HamburgerIcon />
        </button>
      </div>

      {linksList.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={setOpen}
          className={`border-b-[1px] ${
            pathName === link.href ? 'border-b-accent-orange ' : 'border-lines '
          } px-8 py-5 text-white hover:border-b-accent-orange`}
        >
          {link.text}
        </Link>
      ))}

      <div className='flex h-full w-auto flex-row items-end whitespace-nowrap'>
        <div
          className={`flex w-full items-center border-t-[1px] border-lines ${width < 768 && 'justify-between'}`}
        >
          {width > 768 && (
            <h2 className='flex h-10 items-center self-center px-4 py-2 hover:cursor-default'>
              {findMe}
            </h2>
          )}

          <div className='flex flex-row'>
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
          </div>

          <div className='flex h-10 w-auto flex-row items-center whitespace-nowrap'>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavbarMobile };

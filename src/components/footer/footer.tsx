import Link from 'next/link';

import { designUrl, gitUrl, linkedinUrl } from '@/constants/Shared/urls';

import { LocaleSwitcher } from '../lang-switcher/lang-switcher';

type GithubData = {
  url: string;
  name: string;
};

const getGithubData = async () => {
  const response: Response = await fetch(gitUrl, {
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) return;

  const data: GithubData = await response.json();

  return data;
};

type FooterProps = {
  findMe: string;
  design: string;
  designer: string;
};

export const Footer = async ({ findMe, design, designer }: FooterProps) => {
  const githubData: GithubData | undefined = await getGithubData();

  return (
    <footer className='absolute bottom-1 hidden w-full text-base font-[450] text-secondary-grey lg:block'>
      <div className='flex h-10 flex-row items-center justify-between border-t-[1px] border-lines'>
        <div className='flex w-auto flex-row items-center whitespace-nowrap'>
          <h2 className='px-4 py-2 hover:cursor-default'>{findMe}</h2>
          <Link
            target={'_blank'}
            href={linkedinUrl}
            className='border-l-[1px] border-r-[1px] border-lines '
          >
            <i className='ri-linkedin-box-fill px-4 py-2 text-3xl hover:text-white'></i>
          </Link>
          {/* <i className='ri-mail-fill border-r-[1px] border-lines px-4 text-3xl'></i> */}
        </div>

        <div className='flex w-full flex-row items-center justify-end  whitespace-nowrap '>
          <div className='flex w-auto flex-row items-center whitespace-nowrap border-l-[1px] border-lines'>
            <LocaleSwitcher />
          </div>
          <h2 className='overflow-hidden border-l-[1px] border-lines px-4 py-2 hover:cursor-default'>
            {design}
            <Link
              href={designUrl}
              target={'_blank'}
              className='text-accent-orange'
            >
              {designer}
            </Link>
          </h2>
          <Link
            target={'_blank'}
            href={githubData?.url ?? 'https://github.com/AdrianBonea'}
            className='flex items-center gap-1 border-l-[1px] border-lines px-4 hover:text-white'
          >
            <p>@{githubData?.name?.toLocaleLowerCase() ?? ''}</p>
            <i className='ri-github-fill text-3xl'></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

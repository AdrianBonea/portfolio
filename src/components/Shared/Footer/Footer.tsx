'use client';

import { NextComponentType } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

type GithubData = {
  url: string;
  name: string;
};

const linkedinUrl = 'https://www.linkedin.com/in/adrian-mirel-bonea/';
const gitUrl = 'https://api.github.com/users/AdrianBonea';
const designUrl = 'https://www.behance.net/darelova';

export const Footer: NextComponentType = () => {
  const [githubData, setGithubData] = useState<GithubData>({
    url: '',
    name: '',
  });

  useEffect(() => {
    axios
      .get(gitUrl)
      .then((gitData) => {
        setGithubData((prev) => ({
          ...prev,
          url: gitData.data.html_url,
          name: gitData.data.login,
        }));
      })
      .catch((err) => {
        console.warn('Error fetching github url: ', err);
      });
  }, []);

  return (
    <footer className='absolute bottom-1 w-full text-base font-[450] text-secondary-grey'>
      <div className='flex h-10 flex-row items-center justify-between border-t-[1px] border-lines'>
        <div className='flex w-auto flex-row items-center whitespace-nowrap'>
          <h2 className='px-4 py-2 hover:cursor-default'>find me in:</h2>
          <Link
            href={linkedinUrl}
            className='border-l-[1px] border-r-[1px] border-lines '
          >
            <i className='ri-linkedin-box-fill px-4 py-2 text-3xl hover:text-white'></i>
          </Link>
          {/* <i className='ri-mail-fill border-r-[1px] border-lines px-4 text-3xl'></i> */}
        </div>
        <div className='flex w-full flex-row items-center justify-end  whitespace-nowrap'>
          <h2 className='overflow-hidden border-l-[1px] border-lines px-4 py-2 hover:cursor-default'>
            design by:{' '}
            <Link href={designUrl} className='text-accent-orange'>
              yanka-darelova
            </Link>
          </h2>
          <Link
            href={githubData.url}
            className='flex items-center gap-1 border-l-[1px] border-lines px-4 hover:text-white'
          >
            <p>@{githubData.name.toLocaleLowerCase()}</p>
            <i className='ri-github-fill text-3xl'></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

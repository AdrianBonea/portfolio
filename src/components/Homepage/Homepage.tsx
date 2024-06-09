'use server';

import { gitHubLink } from '@/constants/homepage/constants';
import { HomePageWrapper } from './homepage-wrapper';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type HomepageProps = {
  presentation: string;
  name: string;
  role: string;
  description1: string;
  description2: string;
};

export const Homepage = ({
  presentation,
  name,
  role,
  description1,
  description2,
}: HomepageProps) => {
  const t = useTranslations();

  return (
    <HomePageWrapper>
      <section className='relative mr-0 flex h-full flex-col justify-around xl:mr-16'>
        <div>
          <h3 className='text-body font-[450] text-white'>{presentation}</h3>
          <h1 className='text-sub-headline font-[400] text-white md:text-headline'>
            {name}
          </h1>
          <h2 className='mb-20 text-body font-[450] text-secondary-blue md:text-sub-headline'>
            {role}
          </h2>
        </div>

        <div>
          <p className='mb-1 text-label font-[450] text-secondary-grey'>
            {description1}
          </p>
          <p className='mb-1 text-label font-[450] text-secondary-grey'>
            {description2}
          </p>
          <div className='mb-1 text-code font-[500] md:text-label'>
            <span className='text-secondary-blue'>
              {t('Homepage.code.const')}
            </span>
            <span className='text-secondary-green'>
              {t('Homepage.code.gitHubLink')}{' '}
            </span>
            <span className='text-white'> = </span>
            <Link href={gitHubLink} target='_blank'>
              <span className='text-accent-pink'>&quot;{gitHubLink}&quot;</span>
            </Link>
          </div>
          <div className='flex xl:hidden'>
            <div className='gradientGreen -z-30 !w-56 object-contain object-contain !opacity-20'></div>
            <div className='gradientPurple !left-0 -z-30 !w-56 object-contain !opacity-20'></div>
          </div>
        </div>
      </section>

      <section className='gameBg hidden h-96 xl:ml-16  xl:flex'>
        <div className='gradientGreen'></div>
        <div className='gradientPurple overscroll-contain'></div>
      </section>
    </HomePageWrapper>
  );
};

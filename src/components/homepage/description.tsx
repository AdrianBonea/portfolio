'use client';

import { useTranslations } from 'next-intl';

import { gitHubLink } from '@/constants/homepage/constants';
import { useScreenSize } from '@/hooks';
import { Link } from '@/navigation';

type DescriptionProps = {
  description1: string;
  description2: string;
};

export const Description = ({
  description1,
  description2,
}: DescriptionProps) => {
  const t = useTranslations();
  const width = useScreenSize().width;
  return (
    <div>
      <p className='mb-1 text-label font-[450] text-secondary-grey'>
        {description1}
      </p>
      <p className='mb-1 text-label font-[450] text-secondary-grey'>
        {description2}
      </p>
      <div className='mb-1 break-words text-code font-[500] md:text-label'>
        <span className='text-secondary-blue'>{t('Homepage.code.const')}</span>
        <span className='text-secondary-green'>
          {t('Homepage.code.gitHubLink')}{' '}
        </span>
        <span className='text-white'> = </span>
        <Link href={gitHubLink} target='_blank'>
          <p
            className={`break-words text-accent-pink ${width < 768 && 'text-xs'}`}
          >
            &quot;{gitHubLink}&quot;
          </p>
        </Link>
      </div>
      <div className='flex xl:hidden'>
        <div className='gradientGreen -z-30 !w-56 object-contain object-contain !opacity-20'></div>
        <div className='gradientPurple !left-0 -z-30 !w-56 object-contain !opacity-20'></div>
      </div>
    </div>
  );
};

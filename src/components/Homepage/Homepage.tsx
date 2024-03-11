import { gitHubLink } from '@/constants/homepage/constants';
import Link from 'next/link';

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
  return (
    <section className='mx-6 flex h-screenMinusNavbar flex-row items-center justify-center'>
      <div className='mr-0 xl:mr-16'>
        <h3 className='text-body font-[450] text-white'>{presentation}</h3>
        <h1 className='text-sub-headline font-[400] text-white md:text-headline'>
          {name}
        </h1>
        <h2 className='mb-20 text-body font-[450] text-secondary-blue md:text-sub-headline'>
          {role}
        </h2>
        <p className='mb-1 text-label font-[450] text-secondary-grey'>
          {description1}
        </p>
        <p className='mb-1 text-label font-[450] text-secondary-grey'>
          {description2}
        </p>
        <div className='mb-1 text-code font-[500] md:text-label'>
          <span className='text-secondary-blue'>const </span>
          <span className='text-secondary-green'>githubLink </span>
          <span className='text-white'> = </span>
          <Link href={gitHubLink} target='_blank'>
            <span className='text-accent-orange'>&quot;{gitHubLink}&quot;</span>
          </Link>
        </div>
      </div>

      <div className='gameBg flex hidden h-96 w-96 xl:ml-16 xl:flex'>
        <div className='gradientGreen'></div>
        <div className='gradientPurple'></div>
      </div>
    </section>
  );
};

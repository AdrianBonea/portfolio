'use server';

import { Description } from './description';
import { HomePageWrapper } from './homepage-wrapper';

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

        <Description description1={description1} description2={description2} />
      </section>

      <section className='gameBg hidden h-96 xl:ml-16  xl:flex'>
        <div className='gradientGreen'></div>
        <div className='gradientPurple overscroll-contain'></div>
      </section>
    </HomePageWrapper>
  );
};

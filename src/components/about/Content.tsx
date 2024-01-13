'use client';

type ContentProps = {
  dict: any;
};

export const Content = ({ dict }: ContentProps) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <h1 className='text-center text-3xl font-bold text-accent-orange'>
        {dict.navbar.name}
      </h1>
    </div>
  );
};

'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';

const locales: string[] = ['en', 'ro'];

export function LocaleSwitcher() {
  const pathName: string = usePathname();
  const { lang } = useParams();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className='flex h-max flex-row'>
      <ul className='flex flex-row'>
        {locales.map((locale: string) => {
          return (
            <li
              key={locale}
              className={`px-4 py-2 ${lang === locale && 'text-accent-orange'} ${lang !== locale && 'hover:text-white'} `}
            >
              <Link href={redirectedPathName(locale)}>
                {locale.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

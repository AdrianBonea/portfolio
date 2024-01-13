'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';

export function LocaleSwitcher() {
  const locales = ['en', 'ro'];
  const pathName = usePathname();
  const { lang } = useParams();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className='flex flex-row'>
      <ul className='flex flex-row'>
        {locales.map((locale) => {
          return (
            <li
              key={locale}
              className={`pl-2 ${lang === locale && 'text-accent-orange'} ${lang !== locale && 'hover:text-white'} `}
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

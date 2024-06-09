'use client';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';

const locales: string[] = ['en', 'ro'];

export function LocaleSwitcher() {
  const lang = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='flex h-max flex-row'>
      <ul className='flex flex-row'>
        {locales.map((locale: string) => {
          return (
            <li
              key={locale}
              className={`px-4 py-2 ${lang === locale && 'text-accent-orange'} ${lang !== locale && 'hover:text-white'} `}
            >
              <button
                onClick={() => {
                  console.log(locale);
                  router.push(pathname, { locale });
                }}
              >
                {locale.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

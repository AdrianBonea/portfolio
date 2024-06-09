import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { Footer, Navbar } from '@/components';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { NextFont } from 'next/dist/compiled/@next/font';

import './globals.css';
import 'remixicon/fonts/remixicon.css';

const fira: NextFont = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bonea Adrian Mirel',
  description: 'Personal website of Bonea Adrian Mirel, a software developer.',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { lang: 'en' | 'ro' };
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<RootLayoutProps>) {
  const t = useTranslations();

  return (
    <html lang={lang}>
      <body className={`${fira.className} w-full bg-primary-light`}>
        <NextIntlClientProvider>
          <Navbar
            title={t('Navbar.name')}
            home={t('Navbar.home')}
            about={t('Navbar.about')}
            contact={t('Navbar.contact')}
            projects={t('Navbar.projects')}
            findMe={t('Footer.findMe')}
          />
          {children}
          <Footer
            findMe={t('Footer.findMe')}
            design={t('Footer.design')}
            designer={t('Footer.designer')}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Fira_Code } from 'next/font/google';
import { useTranslations } from 'next-intl';

import { Footer, Navbar } from '@/components';
import { ProviderManager } from '@/providers/providers';

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
        <ProviderManager>
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
        </ProviderManager>
      </body>
    </html>
  );
}

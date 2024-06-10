import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

type ProviderManagerProps = {
  children: React.ReactNode;
};

export const ProviderManager = async ({ children }: ProviderManagerProps) => {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
};

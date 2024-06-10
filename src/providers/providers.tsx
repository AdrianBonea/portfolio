import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

type ProviderManagerProps = {
  children: React.ReactNode;
};

export const ProviderManager = ({ children }: ProviderManagerProps) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};

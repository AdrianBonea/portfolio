import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

type ProviderManagerProps = {
  children: React.ReactNode;
};

export const ProviderManager = ({ children }: ProviderManagerProps) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};

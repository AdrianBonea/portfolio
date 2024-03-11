import { Homepage } from '@/components';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  return (
    <Homepage
      presentation={t('Homepage.presentation')}
      name={t('Homepage.name')}
      role={t('Homepage.role')}
      description1={t('Homepage.description')}
      description2={t('Homepage.description2')}
    />
  );
}

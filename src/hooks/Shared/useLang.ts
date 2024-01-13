import { getDictionary } from '@/app/[lang]/dictionaries';
import { useLangStore } from '@/store';

export const useLang = async () => {
  const lang = useLangStore((state) => state.lang);

  const dict = await getDictionary(lang);

  return {
    dict,
  };
};

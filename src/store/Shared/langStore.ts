import { create } from 'zustand';

type State = {
  lang: 'en' | 'ro';
};

type Actions = {
  setLang: (lang: 'en' | 'ro') => void;
};

export const useLangStore = create<State & Actions>((set) => ({
  lang: 'en',
  setLang: (lang: 'en' | 'ro') => set({ lang }),
}));

import { create } from 'zustand';

type State = {
  language: 'en' | 'ro';
};

type Actions = {
  setLanguage: (lang: 'en' | 'ro') => void;
};

export const useLangStore = create<State & Actions>((set) => ({
  language: 'en',
  setLanguage: (language: 'en' | 'ro') => set({ language }),
}));

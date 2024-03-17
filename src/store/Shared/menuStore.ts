import { create } from 'zustand';

type State = {
  menuIsOpen: boolean;
};

type Actions = {
  toggleMenu: () => void;
};

export const useMenuStore = create<State & Actions>((set) => ({
  menuIsOpen: false,
  toggleMenu: () => set((state) => ({ menuIsOpen: !state.menuIsOpen })),
}));

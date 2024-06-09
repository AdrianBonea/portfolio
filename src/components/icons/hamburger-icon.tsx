import { useMenuStore } from '@/store';

export const HamburgerIcon = (): JSX.Element => {
  const open = useMenuStore((state) => state.menuIsOpen);
  return (
    <i
      className={`${open ? 'ri-menu-5-fill' : 'ri-menu-fill'} px-8 py-5 hover:border-b-accent-orange hover:text-white`}
    />
  );
};

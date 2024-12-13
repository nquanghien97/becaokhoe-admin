export interface MenuSidebarType {
  key: number;
  title: string;
  path: string;
  children?: MenuSidebarType[];
}

export const MenuSidebar: MenuSidebarType[] = [
  {
    key: 1,
    title: 'Tin tức',
    path: 'tin-tuc'
  },
]
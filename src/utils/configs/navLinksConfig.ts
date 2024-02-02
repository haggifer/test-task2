export interface INavLink {
  name: string;
  title: string;
  href: string;
  children?: {
    name: string;
    title: string;
    href: string;
  }[];
}

export const navLinks: INavLink[] = [
  {
    name: 'home',
    title: 'home',
    href: '/home',
  },
  {
    name: 'features',
    title: 'features',
    href: '/features',
    children: [
      {
        name: 'feature1',
        title: 'feature 1',
        href: '/features/feature1',
      },
      {
        name: 'feature2',
        title: 'feature 2',
        href: '/features/feature2',
      },
      {
        name: 'feature3',
        title: 'feature 3',
        href: '/features/feature3',
      },
    ],
  },
  {
    name: 'blog',
    title: 'blog',
    href: '/blog',
  },
  {
    name: 'shop',
    title: 'shop',
    href: '/shop',
  },
  {
    name: 'about',
    title: 'about',
    href: '/about',
  },
  {
    name: 'contact',
    title: 'contact',
    href: '/contact',
  },
];

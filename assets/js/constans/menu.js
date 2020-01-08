import {PRIVATE_ROUTES, PUBLIC_ROUTES} from './routes';

export const menuItems = [
  {
    label: 'symfony',
    to: `/${PUBLIC_ROUTES.SYMFONY}`
  },
  {
    label: 'react',
    to: `/${PUBLIC_ROUTES.REACT}`,
  },
  {
    label: 'css',
    to: `/${PUBLIC_ROUTES.CSS}`,
  }
];

export const adminMenuItems = [
  {
    label: 'symfony',
    to: `/${PUBLIC_ROUTES.SYMFONY}`
  },
  {
    label: 'react',
    to: `/${PUBLIC_ROUTES.REACT}`,
  },
  {
    label: 'css',
    to: `/${PUBLIC_ROUTES.CSS}`,
  },
  {
    label: 'admin',
    to: `/admin`,
  }
];

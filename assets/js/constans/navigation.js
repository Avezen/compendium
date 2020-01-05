import {PRIVATE_ROUTES, PUBLIC_ROUTES} from './routes';

export const navigationItems = [
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
    label: 'login',
    to: `/login`,
  }
];

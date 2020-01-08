import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './routes';
import {Home} from "../pages/Home";
import {ReactJS} from "../pages/ReactJS";
import {CSS} from "../pages/CSS";
import {Symfony} from "../pages/Symfony";
import {Admin} from "../pages/Admin";

export const DEFAULT_ROUTE = `/${PUBLIC_ROUTES.MAIN}`;

export const GLOBAL_ROUTES = [
  {
    Component: Home,
    messagePrefix: 'homePage',
    path: `/${PUBLIC_ROUTES.MAIN}`,
  },
  {
    Component: Symfony,
    messagePrefix: 'symfonyPage',
    path: `/${PUBLIC_ROUTES.SYMFONY}`,
  },
  {
    Component: Symfony,
    messagePrefix: 'symfonyPage',
    path: `/${PUBLIC_ROUTES.SYMFONY}/:category`,
  },
  {
    Component: Symfony,
    messagePrefix: 'symfonyPage',
    path: `/${PUBLIC_ROUTES.SYMFONY}/:category/:topic`,
  },
  {
    Component: ReactJS,
    messagePrefix: 'reactPage',
    path: `/${PUBLIC_ROUTES.REACT}`,
  },
  {
    Component: ReactJS,
    messagePrefix: 'reactPage',
    path: `/${PUBLIC_ROUTES.REACT}/:category`,
  },
  {
    Component: ReactJS,
    messagePrefix: 'reactPage',
    path: `/${PUBLIC_ROUTES.REACT}/:category/:topic`,
  },
  {
    Component: ReactJS,
    messagePrefix: 'reactPage',
    path: `/${PUBLIC_ROUTES.REACT}/:category/:subcategory/:topic`,
  },
  {
    Component: CSS,
    messagePrefix: 'cssPage',
    path: `/${PUBLIC_ROUTES.CSS}`,
  },
  {
    Component: CSS,
    messagePrefix: 'cssPage',
    path: `/${PUBLIC_ROUTES.CSS}/:category`,
  },
  {
    Component: CSS,
    messagePrefix: 'cssPage',
    path: `/${PUBLIC_ROUTES.CSS}/:category/:topic`,
  },
  {
    Component: Admin,
    messagePrefix: 'adminPage',
    path: `/${PRIVATE_ROUTES.ADMIN}`,
  }
];


export const NESTED_ROUTES = [
  {
    Component: Home,
    messagePrefix: 'symfony',
    path: matchUrl => `${matchUrl}/${PUBLIC_ROUTES.SYMFONY}`,
  }
];

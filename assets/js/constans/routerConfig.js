import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './routes';
import {Main} from "../pages/Main";
import {About} from "../pages/About";

export const DEFAULT_ROUTE = `/${PUBLIC_ROUTES.MAIN}`;

export const GLOBAL_ROUTES = [
  {
    Component: Main,
    messagePrefix: 'mainPage',
    path: `/${PUBLIC_ROUTES.MAIN}`,
  },
  {
    Component: About,
    messagePrefix: 'aboutPage',
    path: `/${PUBLIC_ROUTES.ABOUT}`,
  }
];


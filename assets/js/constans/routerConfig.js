import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './routes';
import {Home} from "../pages/Home";
import {ReactJS} from "../pages/ReactJS";
import {CSS} from "../pages/CSS";
import {Symfony} from "../pages/Symfony";

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
    path: `/${PUBLIC_ROUTES.SYMFONY}/:topic`,
  },
    {
        Component: Symfony,
        messagePrefix: 'symfonyPage',
        path: `/${PUBLIC_ROUTES.SYMFONY}/:topic/:example`,
    },
  {
    Component: ReactJS,
    messagePrefix: 'reactPage',
    path: `/${PUBLIC_ROUTES.REACT}`,
  },
  {
    Component: CSS,
    messagePrefix: 'cssPage',
    path: `/${PUBLIC_ROUTES.CSS}`,
  }
];


export const NESTED_ROUTES = [
  {
    Component: Home,
    messagePrefix: 'symfony',
    path: matchUrl => `${matchUrl}/${PUBLIC_ROUTES.SYMFONY}`,
  }
];

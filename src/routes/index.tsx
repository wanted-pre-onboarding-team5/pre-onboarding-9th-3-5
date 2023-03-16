import { createBrowserRouter, RouteObject } from 'react-router-dom';

import mainLoader from './loaders';

import { Main } from '@/pages/main';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
  },
];

export const router = createBrowserRouter(routes);

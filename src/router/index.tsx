import { createBrowserRouter } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';
import { Error, Root } from '@/pages';

import { rootLoader } from './loaders';

const routes = [
  {
    path: PATH_ROUTE.root,
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
  },
];

export const router = createBrowserRouter(routes);

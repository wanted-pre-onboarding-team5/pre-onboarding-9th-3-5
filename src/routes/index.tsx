import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';

import loader from './loader';

import Error from '@/pages/error';
import Main from '@/pages/main';

const routes: RouteObject[] = [{ path: '/', element: <Main />, errorElement: <Error />, loader }];

const router = createBrowserRouter(routes);

export default function PageRouter() {
  return <RouterProvider router={router} />;
}

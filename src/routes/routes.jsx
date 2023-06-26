import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/shared/MainLayout';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
]);

export default router;
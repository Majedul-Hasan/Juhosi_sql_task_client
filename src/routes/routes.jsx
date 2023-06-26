import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/shared/MainLayout';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;

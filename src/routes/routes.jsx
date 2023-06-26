import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/shared/MainLayout';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import AdminPage from '../pages/AdminPage';
import OrderPage from '../pages/OrderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
      {
        path: '/admin',
        element: (
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/order',
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;

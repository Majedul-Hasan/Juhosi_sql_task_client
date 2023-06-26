import { Navigate, useLocation } from 'react-router';
import useUser from '../hookes/useUser';

const PrivateRoute = ({ children }) => {
  const { loading, user } = useUser();

  const location = useLocation();

  if (loading) {
    return <progress className='progress w-56'></progress>;
  }

  if (user?.role?.length) {
    return children;
  }
  return (
    <Navigate
      to='/login'
      state={{ from: location }}
      replace></Navigate>
  );
};

export default PrivateRoute;

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const token = localStorage.getItem('token');
  console.log({ token, userRole });

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:3000/auth/role', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserRole(response.data?.role);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching role:', error);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <progress className='progress w-56'></progress>;
  }

  if (userRole.length) {
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

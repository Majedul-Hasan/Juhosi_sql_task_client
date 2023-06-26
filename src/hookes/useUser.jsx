import axios from 'axios';
import { useEffect, useState } from 'react';

const useUser = () => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:3000/auth/role', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          //   console.log(response.data);
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching role:', error);
        });
    } else {
      setLoading(false);
    }
  }, [token]);

  return { loading, user };
};

export default useUser;

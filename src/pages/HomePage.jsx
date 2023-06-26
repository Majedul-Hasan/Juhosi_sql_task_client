import useUser from '../hookes/useUser';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const { loading, user } = useUser();
  console.log(user);

  return (
    <>
      {loading ? (
        <progress className='progress w-56'></progress>
      ) : (
        <div>
          {user.role === 'admin' ? (
            <Navigate to='/admin' />
          ) : user.role === 'customer' ? (
            <Navigate to='/order' />
          ) : (
            <Navigate to='/login' />
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;

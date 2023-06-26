import { Link, useNavigate } from 'react-router-dom';
import useUser from '../../hookes/useUser';

const Header = () => {
  const { loading, user, setUser } = useUser();

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };
  return (
    <div className='navbar bg-base-100'>
      <div className='flex justify-around w-full'>
        <Link
          to='/'
          className='btn btn-ghost normal-case text-xl'>
          Juhosi Software
        </Link>

        {user ? (
          <button
            onClick={handleLogOut}
            className='btn btn-success'>
            logout
          </button>
        ) : (
          <Link
            to='/login'
            className='btn btn-primary'>
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

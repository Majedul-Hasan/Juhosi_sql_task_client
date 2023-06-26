import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import service from '../assets/Customer Service_Two Color.png';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/Ai';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [visible, setVisible] = useState(false);
  const [responseError, setResponseError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        user_id: data.user_id,
        password: data.password,
      });

      // Access the JWT token from the response
      const token = response.data.token;

      localStorage.setItem('token', token);
      navigate(from);
    } catch (error) {
      // Handle error responses
      setResponseError(error.response.data.message);
      console.error('Login error:', error.response.data.message);
    }
  };

  return (
    <section className='h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0'>
      <div className='md:w-1/3 max-w-sm'>
        <img
          src={service}
          alt='Sample image'
        />
      </div>
      <div className='md:w-1/3 max-w-sm'>
        <h2 className='my-9 text-2xl font-bold'>
          {' '}
          Please login using your credential
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='text'
            {...register('user_id', { required: true })}
            placeholder='user Id'
          />
          <div className='flex justify-between items-center'>
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type={visible ? 'text' : 'password'}
              {...register('password', {
                required: true,
              })}
              placeholder='Password'
            />

            <input
              id='myCheckbox'
              type='checkbox'
              className='mr-auto -ml-7 -mb-5  hidden'
              onClick={() => setVisible((x) => !x)}
            />
            <label
              // onClick={() => setVisible((x) => !x)}
              htmlFor='myCheckbox'
              className='checkbox-label mr-auto -ml-7 -mb-5'>
              {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </label>
          </div>

          <div className='mt-4 flex justify-between font-semibold text-sm'>
            <label className='flex text-slate-500 hover:text-slate-600 cursor-pointer'>
              <input
                className='mr-1'
                type='checkbox'
              />
              <span>Remember Me</span>
            </label>
            <a
              className='text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4'
              href='#'>
              Forgot Password?
            </a>
          </div>
          <div className='text-center md:text-left'>
            <button
              className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'
              type='submit'>
              Login
            </button>
          </div>
        </form>
        <div className='mt-4 font-semibold text-sm text-slate-500 text-center md:text-left'>
          Do not have an account?{' '}
          <Link
            className='text-red-600 hover:underline hover:underline-offset-4'
            to='/signup'>
            Register
          </Link>
        </div>
        {responseError?.length > 0 && (
          <p className='text-red-600'>{responseError}</p>
        )}
        {errors.password?.type === 'required' && (
          <p className='text-red-600'>Password is required</p>
        )}
      </div>
    </section>
  );
};

export default Login;

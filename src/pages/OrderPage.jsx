import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import service from '../assets/Customer Service_Two Color.png';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const OrderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = localStorage.getItem('token');

  const onSubmit = (data) => {
    axios
      .post('http://localhost:3000/order', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('Form submitted successfully');
        alert('Form submitted successfully');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle errors
      });
  };

  console.log(errors);

  return (
    <section className='flex  justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-9 mx-5 md:mx-0 md:my-0 py-10'>
      <div className='md:w-1/3 max-w-sm'>
        <h2 className='my-9 text-2xl font-bold'>Please order</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Date:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='date'
            name='date'
            {...register('date', { required: true })}
          />
          {errors.date && (
            <span className='text-red-600'>Date is required</span>
          )}

          <label>Company:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='text'
            name='company'
            {...register('company', { pattern: /^[a-zA-Z0-9\s]+$/ })}
          />
          {errors.company && (
            <span className='text-red-600'>
              Company name should be alphanumeric
            </span>
          )}

          <label>Owner:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='text'
            name='owner'
            {...register('owner', { pattern: /^[a-zA-Z0-9\s]+$/ })}
          />
          {errors.owner && (
            <span className='text-red-600'>
              Owner name should contain only alphabets
            </span>
          )}

          <label>Item:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='number'
            name='item'
            {...register('item', { required: true })}
          />

          <label>Quantity:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='number'
            name='quantity'
            {...register('quantity', {
              required: true,
            })}
          />
          {errors.quantity && (
            <span className='text-red-600'>
              Owner name should contain only alphabets
            </span>
          )}

          <label>Shipment:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='text'
            name='shipment'
            {...register('shipment', {
              required: true,
            })}
          />

          <label>Weight:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='number'
            step='0.01'
            name='weight'
            {...register('weight', {
              required: true,
            })}
          />

          <label>Tracking ID:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='text'
            name='trackingId'
            {...register('trackingId', {
              required: true,
            })}
          />

          <label>Shipment Size (LxWxH):</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='text'
            name='shipmentSize'
            {...register('shipmentSize', {
              required: true,
            })}
          />

          <label>Box Count:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='number'
            name='boxCount'
            {...register('boxCount', {
              required: true,
            })}
          />

          <label>Specification:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='text'
            name='specification'
            {...register('specification', {
              required: true,
            })}
          />

          <label>Chaklist Quantity:</label>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='text'
            name='chaklistQuantity'
            {...register('chaklistQuantity', {
              required: true,
            })}
          />

          <button
            type='submit'
            className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderPage;

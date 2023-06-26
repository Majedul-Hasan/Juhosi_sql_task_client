import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const token = localStorage.getItem('token');
  const [customer1Quantity, setCustomer1Quantity] = useState(0);
  const [customer1Box, setCustomer1Box] = useState(0);
  const [customer1weight, setCustomer1weight] = useState(0);
  const [customer2Quantity, setCustomer2Quantity] = useState(0);
  const [customer2Box, setCustomer2Box] = useState(0);
  const [customer2weight, setCustomer2weight] = useState(0);

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:3000/customers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          response.data?.forEach((element) => {
            if (element?.userId === 'customer1') {
              setCustomer1Quantity(element.total_quantity);
              setCustomer1Box(element.total_box_count);
              setCustomer1weight(element.total_weight);
            }
            if (element?.userId === 'customer2') {
              setCustomer2Quantity(element.total_quantity);
              setCustomer2Box(element.total_box_count);
              setCustomer2weight(element.total_weight);
            }
          });
        })
        .catch((error) => {
          console.error('Error fetching role:', error);
        });
    }
  }, [token]);

  return (
    <div className='max-w-3xl mx-auto my-10'>
      <h1 className='my-5 text-2xl text-center font-bold'>Admin Panel</h1>

      <div className='table-container'>
        <h1 className='table-title text-xl text-center font-bold my-5 '>
          Customer order Overview
        </h1>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th className='bg-cyan-400  '>Item/Customer</th>
                <th>Customer1</th>
                <th>Customer2</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Quantity</th>
                <td>{customer1Quantity}</td>
                <td>{customer2Quantity}</td>
                <td>{customer1Quantity + customer2Quantity}</td>
              </tr>

              <tr>
                <th>weight</th>
                <td>{customer1weight.toFixed(2)}</td>
                <td>{customer2weight.toFixed(2)}</td>
                <td>{(customer1weight + customer2weight).toFixed(2)}</td>
              </tr>

              <tr>
                <th>Box Count</th>
                <td>{customer1Box}</td>
                <td>{customer2Box}</td>
                <td>{customer1Box + customer2Box}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartSelector } from "../../redux/useSelectors";
import "./Checkout.css";
import { createStripeSession } from '../../services/paymentService';
import { toast } from 'react-toastify';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCartSelector();

  const [formData, setFormData] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
            const res = await createStripeSession(formData);
            // window.location.href = res.url;
          } catch (err) {
            toast.error('Stripe error: ' + err.response?.data?.message || err.message);
          }

  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <div className="row py-lg-4 py-2">
        {/* Order Summary Section */}
        <div className="col-lg-5 col-md-6">
          {cart.map((item) => (

            <div className="row mb-3" key={item.product_id}>
              <div className="col-3">
                <img
                src={item.image ? item.image : ""}
                alt={item.name}
                className="img-fluid"
              />
              </div>
              <div className="col-9">
                  <div>{item.name}</div>
                  <div>Price: {item.price}</div>
                  <div> Qty: {item.quantity}</div>
                  <div>₹ {item.price * item.quantity}</div>
              </div>

            </div>

          ))}
         <hr/>
          <h5>Total Amount: ₹ {totalPrice}</h5>
        
        </div>



        {/* Shipping Address Form */}
        <div className="col-lg-7 col-md-6">
          <h3 className='text-center'>Shipping Address</h3>
           <form onSubmit={handlePlaceOrder}>
          <div className='mb-2'>
            <label htmlFor="address" className="form-label">Address</label>
            <input 
              id='address'
              name="address"
              type='text'
              className="form-control" 
             value={formData.address} 
             onChange={handleChange} 
             required />
          </div>

          <div className='mb-3'>
            <label htmlFor='city' className='form-label'>City</label>
            <input
             id='city' 
              type='text'
              name='city'
              className='form-control'
             value={formData.city} 
             onChange={handleChange} 
             required />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='postalCode'>Postal Code</label>
            <input 
            id='postalCode'
            type='text' 
            name='postalCode'
            className='form-control'
            value={formData.postalCode} 
            onChange={handleChange} 
            required />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='country'>Country</label>
            <input 
            type='text'
            id='country'
            name='country'
            className='form-control'
            value={formData.country} 
            onChange={handleChange} 
            required />
          </div>

          <button type="submit" className="button">Place Order</button>
        </form>
        </div>
      </div>

    </div>
  );
};

export default Checkout;

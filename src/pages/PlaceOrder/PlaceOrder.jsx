import { useState } from 'react';
import { useCartSelector } from "../../redux/useSelectors";
import "./PlaceOrder.css";
import stripe from "../../assets/Frontend_Assets/stripe-logo-svg-vector.svg"
import razorpay from "../../assets/Frontend_Assets/Razorpay_logo.svg";
import { toast } from 'react-toastify';
import { placeOrder } from "../../services/orderService"
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("cod")
  const { cart } = useCartSelector();

  const [formData, setFormData] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone:"",
  });

   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 0;
  const total = subtotal + shippingFee;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
      let orderData = {
        address:formData,
        items: cart,
        amount:total
      }

      switch(method){
        case 'cod':
         try {
           const res = await placeOrder(orderData);
           toast.success(res?.message)
            navigate("/order")
         } catch (error) {
             toast.error(error?.response?.data?.error)
         }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error)
    }
   

  };


  return (
    <div className="container">
      <form onSubmit={handlePlaceOrder}>
      <div className="row py-lg-4 py-2">

        {/* Shipping Address Form */}
        <div className="col-lg-6 col-md-6">
          <h4 className='mb-3'>DELIVERY INFORMATION</h4>
             <div className='mb-2'>
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input 
              id='phone'
              name="phone"
              type='text'
              className="form-control" 
             value={formData.phone} 
             onChange={handleChange} 
             required />
          </div>


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
        </div>

        {/* Order Summary Section */}
         <div className="col-lg-6 col-md-6  px-lg-5">
             <h4 className="mb-4">CART TOTALS</h4>
            <div className="d-flex justify-content-between">
              <h6>Subtotal</h6>
              <h6>${subtotal}</h6>
            </div> <hr/>

             <div className="d-flex justify-content-between">
              <h6>Shipping Fee</h6>
              <h6>{shippingFee === 0 ? "Free" : `${shippingFee}`}</h6>
            </div> <hr/>

           <div className="d-flex justify-content-between mb-4">
              <h6 className="fw-bold">Total</h6>
              <h6 className="fw-bold">${total}</h6>
            </div>

            <div className='mt-lg-5'>
              <h5 className='mb-lg-4'>PAYMENT METHOD</h5>
              <div className="row">
                <div className="col-3">
                  <div className='payment-option p-3'>
                    <img src={stripe} alt="strpe" className='img-fluid' />
                  </div>
                </div>
                <div className="col-4">
                   <div className='payment-option p-3'>
                    <img src={razorpay} alt="razorpay" className='img-fluid' />
                   </div>
                  
                </div>
        
                <div className="col-5">
                  <div className='payment-option'>
                    <span className="bg-success rounded-circle d-inline-block dot"></span>
                     <span className='cod'>Cash On Delivery</span>
                   </div>
                </div>
              </div>
            </div>

            <div className='text-end mt-3'> 
            <button type="submit" className="button2">Place Order</button>
          </div>

          </div>

       </div>
      </form>
    </div>
  );
};

export default PlaceOrder;

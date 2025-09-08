import { useState } from 'react';
import { useCartSelector } from "../../redux/useSelectors";
import "./PlaceOrder.css";


const PlaceOrder = () => {

  const { cart } = useCartSelector();

  const [formData, setFormData] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
   

  };

   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 0;
  const total = subtotal + shippingFee;

  return (
    <div className="container">
      <form onSubmit={handlePlaceOrder}>
      <div className="row py-lg-4 py-2">

        {/* Shipping Address Form */}
        <div className="col-lg-7 col-md-7 px-lg-5">
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
         <div className="col-lg-5 col-md-5  px-lg-5">
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
            <div className='text-end'> 
            <button type="submit" className="button">Place Order</button>
          </div>

          </div>

        {/* <div className="col-lg-5 col-md-6">
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
           <div className='text-end'> 
            <button type="submit" className="button">Place Order</button>
          </div>
        </div> */}
      </div>
      </form>
    </div>
  );
};

export default PlaceOrder;

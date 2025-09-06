import { useCartSelector } from "../../redux/useSelectors";
import { useDispatcher } from "../../redux/useDispatcher";
import { toast } from "react-toastify";
import "./Cart.css";
import { useNavigate } from 'react-router-dom';


function Cart() {
  const navgation = useNavigate();
  const { cart } = useCartSelector();
  const { removeItem } = useDispatcher();

    // 🔹 Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 0;
  const total = subtotal + shippingFee;
 

  return (
    <div className="container py-lg-4 py-2">
     {
      cart.length === 0 ? (
         <div className="text-center">
          <h4>Your cart is empty 🛒</h4>
          <p>Start adding some products to your cart!</p>
        </div>
      ):
      <>
         <table className="table align-middle text-center">
        <thead>
          <tr>
            <th>Product</th>
            <th className="d-none d-md-table-cell">Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product,index)=>(
              <tr key={index}>
            <td>
              <img src={product.image} alt={product.name} className="cart-product-image" />
            </td>
            <td className="d-none d-md-table-cell">{product.name}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>${product.price * product.quantity}</td>
            <td>
              <button 
              className="button" 
              onClick={()=>{
                removeItem({product_id:product.product_id,size:product.size})
                toast.success("Product Remove successfully.")
              }}>X</button>
            </td>
              </tr>
            ))
          }
        </tbody>
        </table>

        <div className="container">
         <div className="row my-5">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
             <h4 className="mb-4">Cart Totals</h4>
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
            <div className="text-end">
              <button className="checkout-button" onClick={()=>navgation('/checkout')}>Proceed To Checkout</button>
            </div>
          </div>
         
         </div>
        </div>
      </>
     }
    </div>
  );
}

export default Cart;

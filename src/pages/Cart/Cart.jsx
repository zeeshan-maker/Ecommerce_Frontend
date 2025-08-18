import { useCartSelector } from "../../redux/useSelectors";
import { useDispatcher } from "../../redux/useDispatcher";
function Cart() {
  const { cart } = useCartSelector();
  const { removeItem } = useDispatcher()
 

  return (
    <div className="container py-lg-4 py-2">
     {
      cart.length === 0 ? (
         <div className="text-center">
          <h4>Your cart is empty 🛒</h4>
          <p>Start adding some products to your cart!</p>
        </div>
      ):
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
            cart.map((product)=>(
              <tr key={product.id}>
            <td>
              <img src={product.image} alt={product.name} className="w-lg-25 w-75" />
            </td>
            <td className="d-none d-md-table-cell">{product.name}</td>
            <td>${product.new_price}</td>
            <td>{product.quantity}</td>
            <td>${product.new_price * product.quantity}</td>
            <td>
              <button className="btn btn-sm btn-danger" onClick={()=>removeItem(product.id)}>X</button>
            </td>
          </tr>
            ))
          }
        </tbody>
      </table>
     }
    </div>
  );
}

export default Cart;

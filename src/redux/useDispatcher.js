import { useDispatch} from "react-redux";
import { addToCart,
     removeFromCart,
      decreaseQuantity, 
      clearCart } from "./features/cartSlice";

export function useDispatcher() {
  const dispatch = useDispatch();
 
  return {
    addItem: (product) => dispatch(addToCart(product)),
    removeItem: (id) => dispatch(removeFromCart(id)),
    decreaseQty: (id) => dispatch(decreaseQuantity(id)),
    clear: () => dispatch(clearCart()),
  };
}

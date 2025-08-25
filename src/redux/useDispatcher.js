import { useDispatch } from "react-redux";
import { login, logout } from "./features/authSlice";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
} from "./features/cartSlice";

export function useDispatcher() {
  const dispatch = useDispatch();

  return {
    login: (token, user) => {
      dispatch(login(token, user));
    },

    logout: () => {
      dispatch(logout());
    },

    addItem: (product) => dispatch(addToCart(product)),
    removeItem: (id) => dispatch(removeFromCart(id)),
    decreaseQty: (id) => dispatch(decreaseQuantity(id)),
    clear: () => dispatch(clearCart()),
  };
}

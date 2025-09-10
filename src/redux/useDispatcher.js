import { useDispatch } from "react-redux";
import { login, logout } from "./features/authSlice";
import {
  addToCart,
  removeFromCart,
  clearCart
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
    removeItem: (product_id) => dispatch(removeFromCart(product_id)),
    clearCart:()=>dispatch(clearCart())
  };
}

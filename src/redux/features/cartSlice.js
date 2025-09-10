// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cart.find((i) => i.product_id === item.product_id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },


    removeFromCart: (state, action) => {
      const {product_id}=action.payload;
      state.cart = state.cart.filter((i) => i.product_id !== product_id );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

     //Clear cart
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
 
  },
});

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

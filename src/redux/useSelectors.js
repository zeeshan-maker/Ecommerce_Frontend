import { useSelector } from "react-redux";

export const useCartSelector = ()=>{
    return{
        cart: useSelector((state) => state.cart.items)
        
    }
};

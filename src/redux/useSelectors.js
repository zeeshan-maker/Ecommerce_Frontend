import { useSelector } from "react-redux";

export const useCartSelector = ()=>{
    return{
        cart: useSelector((state) => state.cart.cart),
        
    }
};


export const useAuthSelector = () =>{
    return {
        token: useSelector((state)=> state.auth.token),
        user: useSelector((state)=> state.auth.user)
    }
}

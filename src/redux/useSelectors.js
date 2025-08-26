import { useSelector } from "react-redux";

export const useCartSelector = ()=>{
    return{
        cart: useSelector((state) => state.cart.items),
        
    }
};


export const useAuthSelector = () =>{
    return {
        token: useSelector((state)=> state.auth.token)
    }
}

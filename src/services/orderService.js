import api from "./api";

export const placeOrder = async (orderData)=>{
    const res = await api.post("/order/place",orderData)
    return res.data;

}

export const placeOrderWithStripe = async (orderData)=>{
    const res = await api.post("/order/stripe",orderData)
    return res.data;
}


export const placeOrderWithRazorpay = async (orderData)=>{
    const res = await api.post("/order/razorpay",orderData)
    return res.data;
}


export const updateOrder = async ()=>{
    
}


export const getAllOrders = async ()=>{
    
}


export const getUserOrder = async () =>{
    const res = await api.get("/order/user-order");
    return res.data;
}
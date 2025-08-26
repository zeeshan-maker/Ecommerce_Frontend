import api from "./api"

export const getAllProduct = async ()=>{
    const res = await api.get("/product");
    return res.data;
}


export const getProductById = async (product_id) =>{
    const res = await api.get(`/product/${product_id}`);
    return res.data;
}
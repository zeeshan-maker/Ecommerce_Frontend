import api from "./api"

export const getAllProduct = async ()=>{
    const res = await api.get("/product");
    return res?.data;
}


export const getProductById = async (product_id) =>{
    const res = await api.get(`/product/${product_id}`);
    return res?.data;
}

export const deleteProduct = async (product_id)=>{
    const res = await api.delete(`/product/${product_id}`);
    return res?.data;
}

export const addProduct = async (product)=>{
    const res = await api.post("/product",product);
    return res.data;
}
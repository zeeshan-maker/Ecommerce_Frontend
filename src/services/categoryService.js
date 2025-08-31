import api from "./api";

export const addCategories =async(name)=>{
   const res =await api.post("/category",{name:name});
    return res?.data;
   
}


export const fetchCategories = async () =>{
    const res = await api.get("/category")
    return res?.data;
}
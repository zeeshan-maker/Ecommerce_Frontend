import api from "./api";

export const addCategories =async(name)=>{
   const res =await api.post("/category",{name:name});
    return res.data;
   
}
import  { useState } from "react";
import { addCategories } from "../../../services/categoryService";
import { toast } from "react-toastify";


const CategoryPage = () => {
  const [name, setName] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    try {
        const res= await addCategories(name);
        toast.success(res.message);
        setName("");
    } catch (error) {
        toast.error(error?.response?.data?.message || "Some error")
    }

  };

  return (
   
      <div className="h-100 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit} className="w-50 shadow-lg p-lg-4">
          <h4 className="mb-3">Add New Category</h4>
          <div className="d-flex">
            <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="button ms-2">Add</button>
          </div>
          
        
        </form>
      </div>
    
  );
};

export default CategoryPage;

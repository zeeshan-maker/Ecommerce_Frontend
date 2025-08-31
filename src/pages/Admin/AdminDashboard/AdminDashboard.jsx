import "./AdminDashboard.css";
import { useState, useEffect } from "react";
import { getAllProduct, deleteProduct } from "../../../services/productService";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProduct = async () => {
      try {
        const res = await getAllProduct();
        setProducts(res?.products);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };

  const deleteItem = async (product_id) => {
    try {
      const res =await deleteProduct(product_id);
      toast.success(res?.message);
      fetchAllProduct();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    fetchAllProduct();
  }, []);

  if (products.length === 0) {
    return <h1 className="product-heading">Data Not Found</h1>;
  }

  return (
    <div className="product-list-container">
      <h4 className="product-heading">All Products List</h4>
      <div className="product-table">
        <div className="product-header">
          <span>Image</span>
          <span>Title</span>
          <span>Price</span>
          <span>Category</span>
          <span>Action</span>
        </div>
        <div className="list">
          {products.map((product) => (
            <div className="product-row" key={product.product_id}>
              <div>
                <img src={product.images[0]} alt={product.name} />
              </div>
              <div>{product.name}</div>
              <div>₹{product.price}</div>
              <div>{product?.Category?.name}</div>
              <div>
                <button className="remove-btn" onClick={() => deleteItem(product?.product_id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

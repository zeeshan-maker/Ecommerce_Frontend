import "./Popular.css"
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/productService";
import { toast } from "react-toastify";
function Popular() {
  const [products, setProducts] = useState([])
    
    useEffect(()=>{
        const fetchAllProduct = async ()=>{
          try {
            const res= await getAllProduct();
            setProducts(res.products)
          } catch (error) {
            toast.error(error.response.data.message)
          }
        }
        fetchAllProduct()
    },[])
  return (
   <div className="container py-lg-4 py-md-3 py-2">
        <div className="row">
          <h1 className="text-center">POPULAR IN WOMEN</h1>
          <hr className="underline" />
        </div>
        <div className="row">
          {
          products.map((product) => (
              <div key={product.product_id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card 
              product_id={product.product_id} 
              image={product.images[0]}
              name={product.name}
              price={product.price}
              old_price={product.old_price}
              />
            </div>
           
          )
        )
          }
        </div>
      </div>
  )
}

export default Popular

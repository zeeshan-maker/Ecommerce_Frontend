import Card from "../Card/Card"
import { getAllProduct } from "../../services/productService";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function NewCollections() {
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
    <div className="container py-lg-4">
        <div className="row">
            <h1 className="text-center">NEW COLLECTIONS</h1>
             <hr className="underline" />
        </div>
        <div className="row">
            {
                products.map((product)=>(
                    <div key={product.product_id} className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-md-3 mb-2 ">
                        <Card
                        product_id={product.product_id}
                        name={product.name}
                        image={product.images[0]}
                        price={product.price}
                        old_price={product.old_price}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewCollections

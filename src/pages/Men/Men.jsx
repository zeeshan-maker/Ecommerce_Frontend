import banner from "../../assets/Frontend_Assets/banner_mens.png"
import Card from "../../components/Card/Card"
import { useEffect, useState } from "react"
import { getAllProduct } from "../../services/productService"
import { toast } from "react-toastify"
function Men() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
         const fetchAllProduct = async ()=>{
           try {
             const res= await getAllProduct();
             setProducts(res?.products)
           } catch (error) {
             toast.error(error.response.data.message)
           }
         }
         fetchAllProduct()
     },[])
  return (
    <div>
      <img src={banner} alt="banner" className="img-fluid" />
      <div className="container">
        <div className="row py-4">
          {
            products?.map((product)=>(
              product.Category.name === "Men" ?(
                <div key={product.product_id} className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-2">
                <Card
                product_id={product.product_id}
                name={product.name}
                price={product.price}
                old_price={product.old_price}
                image={product.images[0]}
                />
              </div>
              ):""
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Men

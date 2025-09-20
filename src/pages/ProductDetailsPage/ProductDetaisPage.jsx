import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css";
import { useEffect, useState } from "react";
import { useDispatcher } from "../../redux/useDispatcher"
import { toast } from 'react-toastify';
import {getProductById} from "../../services/productService"
import Loader from "../../components/Loader/Loader";


function ProductDetaisPage() {
   const { addItem } = useDispatcher();
  const { product_id } = useParams();
  const [product, setProduct] = useState("");
  const [sizes, setSizes] =useState(null)
   const [selectedSize, setSelectedSize] = useState("S");
   const [mainImage, setMainImage] = useState(null);
   const [loading, setLoading] = useState(true);

  
   useEffect(()=>{
    const fetchSingleProduct = async ()=>{
      
      try {
         setLoading(true);
        const res = await getProductById(product_id)
        setProduct(res.product)
        setSizes(JSON.parse(res?.product?.sizes))
        setMainImage(res.product.images[0])
      } catch (error) {
        toast.error(error?.response?.data.message)
      }
      finally {
        setLoading(false);
      }
    }

    fetchSingleProduct();
    
   },[product_id])

    if (loading) return <Loader />;

  return (
    <div className="container py-4">
       <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-2 order-2 order-sm-1  image-column">
              {
              product?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.name}
                  onClick={() => setMainImage(img)}
                />
              ))
              }
            </div>
            <div className="col-lg-10 order-1 order-sm-2">
              <img src={mainImage} alt={product.name} className="img-fluid product-image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h4 className="mb-3 mt-3 fw-bold text-secondary">{product.name}</h4>
          <h6 className="mb-3 fs-2 text-secondary">₹{product.price}</h6>
          <h6 className="text-danger fw-bold">Description</h6>
          <p className="text-secondary">{product.description}</p>
          <h6 className="mb-lg-4">Select Size</h6>
         <div className="mb-lg-4 mb-3 size-options">
        {

        sizes?.map((size) => (
          <div
            key={size}
            className={`size-option ${selectedSize === size ? "active" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </div>
        ))

        }
         </div>
         <button 
         className="add-to-card-button" 
         onClick={()=>{
          addItem({product_id:product.product_id,image:product.images[0],name:product.name,price:product.price,size:selectedSize, category_id:product.category_id})
          toast.success("Product Added!")
         }}>Add To Cart</button>
        </div>
      </div> 
    </div>
  )
}

export default ProductDetaisPage

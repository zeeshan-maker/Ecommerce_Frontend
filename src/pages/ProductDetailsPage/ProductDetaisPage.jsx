import { useParams } from "react-router-dom";
import products from "../../assets/Frontend_Assets/all_product";
import "./ProductDetailsPage.css";
import { useState } from "react";
import { useDispatcher } from "../../redux/useDispatcher"
import { toast } from 'react-toastify';


function ProductDetaisPage() {
   const { addItem } = useDispatcher();
  const { product_id } = useParams();
   const [selectedSize, setSelectedSize] = useState("S");
  const product = products.find((p) => p.id === parseInt(product_id));
   const [mainImage, setMainImage] = useState(product.image[0]);
 

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-6 ">
          <div className="row">
            <div className="col-lg-2 order-2 order-sm-1  image-column">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.name}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div className="col-lg-10 order-1 order-sm-2">
              <img src={mainImage} alt={product.name} className="img-fluid main-image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h4 className="mb-3 mt-3 fw-bold text-secondary">{product.name}</h4>
          <h6 className="mb-3 fs-2 text-secondary">${product.new_price}</h6>
          <h6 className="text-danger fw-bold">Description</h6>
          <p className="text-secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <h6 className="mb-lg-4">Select Size</h6>
         <div className="mb-lg-4 mb-3 size-options">
      {product.sizes.map((size) => (
        <div
          key={size}
          className={`size-option ${selectedSize === size ? "active" : ""}`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </div>
      ))}
         </div>
         <button 
         className="add-to-card-button" 
         onClick={()=>{
          addItem({product_id:product.id,image:product.image,name:product.name,price:product.new_price,size:selectedSize})
          toast.success("Product Added!")
         }}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetaisPage

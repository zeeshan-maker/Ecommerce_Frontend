import { useParams } from "react-router-dom";
import products from "../../assets/Frontend_Assets/all_product";
import "./ProductDetailsPage.css";
import { useState } from "react";

function ProductDetaisPage() {
  const { product_id } = useParams();
   const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const product = products.find((p) => p.id === parseInt(product_id));
 

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-2 order-2 order-sm-1  image-column">
              <img src={product.image} alt={product.name} className="img-fluid " />
              <img src={product.image} alt={product.name} className="img-fluid " />
              <img src={product.image} alt={product.name} className="img-fluid " />
              <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-lg-10 order-1 order-sm-2">
              <img src={product.image} alt={product.name} className="img-fluid main-image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h4 className="mb-3 mt-3">{product.name}</h4>
          <h6 className="mb-3">Price: ${product.new_price}</h6>
          <h6 className="text-secondary">Description</h6>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <h6 className="mb-lg-4">Select Size</h6>
         <div className="mb-lg-4 mb-3 size-options">
      {sizes.map((size) => (
        <div
          key={size}
          className={`size-option ${selectedSize === size ? "active" : ""}`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </div>
      ))}
         </div>
         <button className="add-to-card-button">Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetaisPage

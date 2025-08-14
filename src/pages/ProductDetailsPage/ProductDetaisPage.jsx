import { useParams } from "react-router-dom";
// import all_product from "../../assets/Frontend_Assets/all_product";
// import { useEffect, useState } from "react";

function ProductDetaisPage() {
  const { product_id } = useParams();


  return (
    <div className="container mt-4">
      <p>Product Details Page {product_id}</p>
    </div>
  )
}

export default ProductDetaisPage

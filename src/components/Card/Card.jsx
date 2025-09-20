import "./Card.css"
import star from "../../assets/Frontend_Assets/star_icon.png"
import star_dull from "../../assets/Frontend_Assets/star_dull_icon.png"
import { Link } from "react-router-dom";


function Card({product_id,image,name,price,old_price}) {
  return (
    <div className='card my-card overflow-hidden'>
        <Link to={`/product/${product_id}`}>
        <img src={image} alt="name" className="img-fluid  first-image" />
        </Link>
        <div className="p-2">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star_dull} alt="" />
            <img src={star_dull} alt="" />
           <p className="mb-0 prduct-name">{name.length > 25 ? name.substring(0, 25) + "..." : name}</p>
           <p>
            <span className="price">₹{price}</span>
            <span className="old-price">₹{old_price}</span>

           </p>
        </div>
    </div>
  )
}

export default Card

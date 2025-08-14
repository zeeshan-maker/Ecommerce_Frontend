import "./Offers.css"
import exclusive from "../../assets/Frontend_Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className="container-fluid offers-container">
     <div className="container py-lg-4">
        <div className="row">
            <div className="col-lg-6 col-sm-6 d-flex align-items-center justify-content-center"> 
                <div>
                <h1 className="exclusive-heading">
                    Exclusive <br/>
                    Offers For You
                </h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="main-button px-5">Check now</button>
                </div>
            </div>
            <div className="col-lg-6 col-sm-6 d-flex align-items-center justify-content-center">
                <img src={exclusive} alt="exclusive offer" className="img-fluid h-75"/>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Offers

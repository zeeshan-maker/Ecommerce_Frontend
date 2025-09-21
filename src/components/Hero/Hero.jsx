import hero_image from "../../assets/Frontend_Assets/Hero_image1.png"
import arrow from "../../assets/Frontend_Assets/arrow.png"
import "./Hero.css"
function Hero() {
  return (
    <div className="container-fluid">
        <div className="container py-lg-5 py-5">
        <div className="row">
           <div className="col-lg-6 d-flex align-items-center justify-content-center order-2 order-sm-1">
             <div className="w-100">
              <p className="new-arrivles">NEW ARRIVLES ONLY</p>
              <h1 className="hero-new-collection">
                Gold Earrings For <br/>
               Women
              </h1>
             
            <button className="main-button mt-3">
              Latest Collection
              <img src={arrow} className="img-fluid ms-2"  alt="" />
              </button>
             </div>
           </div>

           <div className="col-lg-6 d-flex align-items-center justify-content-center order-1 order-sm-2 position-relative">
                <img src={hero_image} className="img-fluid" alt="" />
                <div className="background"></div>
           </div>
        </div>

         </div>
    </div>
  )
}

export default Hero

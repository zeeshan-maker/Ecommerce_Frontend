import hero_image from "../../assets/Frontend_Assets/hero_image.png"
import arrow from "../../assets/Frontend_Assets/arrow.png"
import hand from "../../assets/Frontend_Assets/hand_icon.png"
import "./Hero.css"
function Hero() {
  return (
    <div className="container-fluid bg-color">
        <div className="container">
        <div className="row">
           <div className="col-lg-6 d-flex align-items-center justify-content-center">
             <div>
              <p className="new-arrivles">NEW ARRIVLES ONLY</p>
              <h1 className="hero-new-collection">
                new <img src={hand} className="hand-img" alt="" /> <br/>
                collections <br/>
                for everyone
              </h1>
             
            <button className="main-button mt-3">
              Latest Collection
              <img src={arrow} className="img-fluid ms-2"  alt="" />
              </button>
             </div>
           </div>

           <div className="col-lg-6 d-flex align-items-center justify-content-center ">
                <img src={hero_image} className="img-fluid" alt="" />
           </div>
        </div>
    </div>
    </div>
  )
}

export default Hero

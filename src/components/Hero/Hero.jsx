import hero_image from "../../assets/Frontend_Assets/hero_image.png"
import "./Hero.css"
function Hero() {
  return (
    <div className="container-fluid bg-color">
        <div className="container">
        <div className="row">
           <div className="col-lg-6">
             <h1>Sale Off</h1>
            <h1>Up To 30 %</h1>
            <button className="main-button">Explore Now</button>
           </div>

           <div className="col-lg-6">
                <img src={hero_image} className="img-fluid" alt="" />
           </div>
        </div>
    </div>
    </div>
  )
}

export default Hero

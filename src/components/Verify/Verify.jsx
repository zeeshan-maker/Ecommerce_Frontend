import "./Verify.css"
import success_icon from "../../assets/Frontend_Assets/success.png";

function Verify({text}) {
  return (
    <div className="d-flex align-items-center justify-content-center verify">
          <div className='d-flex flex-column align-items-center'>
              <div className='img-container'>
                <img src={success_icon} alt="" className='img-fluid w-75' />
              </div>
            <h3 className='text-center'>{text}</h3>
          </div>
        </div>
  )
}

export default Verify

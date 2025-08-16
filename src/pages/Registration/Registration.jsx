import user from "../../assets/Frontend_Assets/person.png"
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="container">
        <div className="row py-4 d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8 col-12">
           <div className="login-card p-lg-4 p-2">
            <div className="text-center mb-2"><img src={user} alt="" className="img-fluid" /></div>
             <h3 className="text-center mb-3 login-heading">Create Account</h3>
            <form>
              <input
                type="text"
                class="form-control mb-3"
                placeholder="Enter your name"
              />
              <input
                type="email"
                class="form-control mb-3"
                placeholder="Enter your email"
              />
              <input
                type="password"
                class="form-control mb-3"
                placeholder="Enter your password"
              />
      
              <button className="btn btn-login w-100">Sign Up</button>
            </form> 
            <p className="mt-4 text-center">Already have an account ?  
                <Link className="text-primary" to="/login"> Login</Link>
                </p>
           </div>
          </div>
        </div>
      </div>
  )
}

export default Registration

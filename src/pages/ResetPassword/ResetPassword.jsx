import lock from "../../assets/Frontend_Assets/reset-password.png"
function ResetPassword() {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
     <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-6 col-12 p-lg-5 p-3 shadow-lg">
          <h4 className="text-center mb-3">Create New Password</h4>
          <div className="text-center">
            <img src={lock} alt="lock" className="mb-3" />
          </div>
          <p className="fphs mb-3">
            Your new password must be different from previous used passwords.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label ">Password</label>
              <input
              type="password"
              id="password"
              className="form-control"
              required
            />
            </div>
             <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label ">Confirm Password</label>
              <input
              type="password"
              id="confirmPassword"
              className="form-control"
              required
            />
            </div>
            <button className="button my-3 w-100">Reset Password</button>
                  
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword

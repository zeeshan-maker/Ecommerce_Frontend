import "./Footer.css";
import footer_image from "../../assets/Frontend_Assets/footer.jpg"
function Footer() {
  return (
    <>
    <div className="footer-top">
       <div className="footer-top-content">
         <h6 className="footer-top-heading">NEED HELP ?</h6>
        <h1 className="footer-top-second-heading">We are here to help</h1>
        <p className="footer-top-para">Our team are here to make your shopping stress free.</p>
        <button className="main-button-outline">Contact Us</button>
       </div>
        <img src={footer_image} alt="" className="img-fluid"/>
    </div>

    <div className="container-fluid py-lg-4 py-3 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6">
            <h6>Contact</h6>
            <ul className="list-unstyled ">
              <li>9876753211</li>
              <li>zeeshan@gmail.com</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <h6>Shop</h6>
            <ul className="list-unstyled ">
              <li>Tops</li>
              <li>Bottoms</li>
              <li>New in</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <h6>Company</h6>
            <ul className="list-unstyled ">
              <li>Cookies</li>
              <li>Payments</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-4 col-12">
            <h6>Newsletter</h6>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Subscribe"
              />
              <button className="btn btn-danger" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;

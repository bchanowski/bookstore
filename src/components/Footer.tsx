import "../styles/Footer.css"
import Newsletter from "./Newsletter";
import Partners from "./Partners";

const Footer = () => {
  return <div className="footer-div"><div className="footer-data-map-div">
    <div className="footer-info-div">
      <div className="footer-section">
        <h2>About</h2>
        <p>Company</p>
        <p>Shops</p>
        <p>Careers</p>
        <p>Buisness Partners</p>
        <p>Self publishing</p>
        <p>Mobile App</p>
      </div>
      <div className="footer-section">
        <h2>Products</h2>
        <p>All Book Categories</p>
        <p>School Equipemnt</p>
        <p>Electronics</p>
        <p>Gift Cards</p>
        <p>Digital Goods</p>
        <p>Outlet</p>
        <h2>Shopping Information</h2>
        <p>Track an Order</p>
        <p>Shipping</p>
        <p>Returns Policy</p>
        <p>Reclamation</p>
      </div>
     <div className="footer-section">
        <h2>Your Account</h2>
        <p>Profile</p>
        <p>Orders</p>
        <p>Cart</p>
        <p>Resources</p>
        <h2>Help</h2>
        <p>Contact</p>
        <p>Regulations</p>
        <p>Consent Forms</p>
        <p>Privacy Policy</p>
      </div>
    </div>
    <div>
      <h1>MAP</h1>
    </div>
  </div>
  <Newsletter /><Partners /></div>;
};

export default Footer;

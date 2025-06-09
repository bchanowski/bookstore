import "../styles/Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="nav-div">
      <div className="nav-logo-div">
        <p className="nav-text">Book Store</p>
      </div>
      <div className="nav-section-div">
        <p className="nav-text">Categories</p>
        <p className="nav-text">Sales</p>
        <p className="nav-text">New</p>
        <SearchBar />
        <p>Account</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navbar;

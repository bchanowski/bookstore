import "../../styles/Shared/Navbar.css";
import SearchBar from "../Shared/SearchBar";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { PiBookOpenUserBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="nav-div">
      <div className="nav-logo-div">
        <PiBookOpenUserBold className="nav-logo" />
        <p className="nav-text">Book Store</p>
      </div>
      <div className="nav-section-div">
        <p className="nav-text">Categories</p>
        <div className="vertical-line"></div>
        <p className="nav-text">Sales</p>
        <div className="vertical-line"></div>
        <p className="nav-text">New</p>
        <SearchBar />
        <div className="nav-icons">
          <VscAccount className="nav-icon" />
          <PiShoppingCartSimpleBold className="nav-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import "../../styles/Shared/NavbarItems.css";
import { useNavigate } from "react-router";
const NavbarItems = () => {
  const navigate = useNavigate();
  return (
    <>
      <p className="nav-text" onClick={() => navigate("/product-list")}>
        Categories
      </p>
      <div className="vertical-line"></div>
      <p className="nav-text">Sales</p>
      <div className="vertical-line"></div>
      <p className="nav-text">New</p>
      <div className="nav-icons">
        <VscAccount className="nav-icon" />
        <PiShoppingCartSimpleBold className="nav-icon" />
      </div>
    </>
  );
};

export default NavbarItems;

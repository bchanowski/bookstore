import "../../styles/Shared/Navbar.css";
import SearchBar from "../Shared/SearchBar";
import { PiBookOpenUserBold } from "react-icons/pi";
import { useState } from "react";
import MobileNav from "./MobileNav";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const isMobile = () => {
    if (window.innerWidth <= 1200) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  window.addEventListener("resize", isMobile);
  return (
    <div className="nav-div">
      <div className="nav-logo-div">
        <PiBookOpenUserBold className="nav-logo" />
        <p className="logo-text">Book Store</p>
      </div>
      <div className="nav-section-div">
        {mobile ? (
          <>
            <NavbarItems />
          </>
        ) : (
          <MobileNav />
        )}
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;

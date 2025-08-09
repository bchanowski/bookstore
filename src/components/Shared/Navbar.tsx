import "../../styles/Shared/Navbar.css";
import SearchBar from "../Shared/SearchBar";
import { PiBookOpenUserBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import NavbarItems from "./NavbarItems";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [mobile, setMobile] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isMobile = () => {
      if (window.innerWidth <= 1200) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };
    isMobile();
    window.addEventListener("resize", isMobile);
    return () => {
      document.removeEventListener("resize", isMobile);
    };
  }, []);

  return (
    <div className="nav-div">
      <div className="logo-text-div">
        <div className="nav-logo-div" onClick={() => navigate("/")}>
          <PiBookOpenUserBold className="nav-logo" />
          <p className="logo-text">Book Store</p>
        </div>

        {mobile ? (
          <div className="navbar-items-div">
            <NavbarItems />
          </div>
        ) : (
          <MobileNav />
        )}
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;

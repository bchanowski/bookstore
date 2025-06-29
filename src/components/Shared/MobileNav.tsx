import { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import "../../styles/Shared/MobileNav.css";
import NavbarItems from "./NavbarItems";
const MobileNav = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <>
      <CgDetailsMore
        className="close-icon"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      />
      {isMenuToggled && (
        <div className="mobile-nav">
          <MdClose
            className="close-icon"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          />
          <div className="mobile-nav-items">
            <NavbarItems />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;

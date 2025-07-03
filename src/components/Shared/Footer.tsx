import footerData from "../../data/footerData";
import "../../styles/Shared/Footer.css";
import FooterSection from "../Shared/FooterSection";
import Map from "./Map";
import Newsletter from "./Newsletter";
import Partners from "./Partners";
import { PiBookOpenUserBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-data-map-div">
        <div className="footer-info-div">
          <div className="footer-sections-div">
            {footerData.map((footerSection, index) => (
              <FooterSection section={footerSection} key={index} />
            ))}
          </div>
          <div className="address-info">
            <PiBookOpenUserBold className="footer-icon" />
            Get your books immedietly, come to our stationary shop at Gdynia
            Krakowska Rd 12!
          </div>
        </div>
        <Map />
      </div>
      <Newsletter />
      <Partners />
    </div>
  );
};

export default Footer;

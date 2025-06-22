import footerData from "../data/footerData";
import "../styles/Footer.css";
import FooterSection from "./FooterSection";
import Newsletter from "./Newsletter";
import Partners from "./Partners";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-data-map-div">
        <div className="footer-info-div">
          {footerData.map((footerSection) => (
            <FooterSection section={footerSection} />
          ))}
        </div>
        <div>
          <h1>MAP</h1>
        </div>
      </div>
      <Newsletter />
      <Partners />
    </div>
  );
};

export default Footer;

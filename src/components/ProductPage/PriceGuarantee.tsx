import "../../styles/ProductPage/PriceGuarantee.css";
import { IoMdPricetags } from "react-icons/io";

const PriceGuarantee = () => {
  return (
    <div className="guarantee-div">
      <div className="guarantee-main">
        <IoMdPricetags />
        <p className="guarantee-main-text">Lowest Price Guarantee</p>
      </div>
      <p className="guarantee-text">
        This product has a lowest price guarantee. If you find it in a different
        place at a lower price than in our shop than we'll match that value!{" "}
        <span className="guarantee-link">See details here.</span>
      </p>
    </div>
  );
};

export default PriceGuarantee;

import type { IProduct } from "../../types/ProductInterface";
import "../../styles/ProductPage/SingleProductInfo.css";
import ProductOption from "./ProductOption";
import PriceGuarantee from "./PriceGuarantee";
import AmountCounter from "./AmountCounter";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import DeliveryInfo from "./DeliveryInfo";
import ProductDetails from "./ProductDetails";

type Props = { id: string; product: IProduct };

const SingleProductInfo = ({ id, product }: Props) => {
  const options = ["Soft", "Hard"];
  return (
    <div className="product-page-info-div">
      <div className="product-basic-info-div">
        <p className="basic-info-text">#{id}</p>
        <h2 className="title-text">{product.name}</h2>
        <p className="basic-info-text">{product.author}</p>
      </div>
      <div className="horizontal-line-info" />
      <p className="desc-text">{product.desc}</p>
      <div className="horizontal-line-info" />
      <div className="price-amount-div">
        <p>
          <span className="price-text">{product.price}€</span>{" "}
          <span className="price-reduced-text">
            {(product.price * 0.8).toFixed(2)}€
          </span>
        </p>
        <p className="counter-text">Amount:</p>
        <AmountCounter max={5} />
      </div>
      <div className="horizontal-line-info" />
      <ProductOption name="Cover" options={options} />
      <div className="horizontal-line-info" />
      <button className="add-to-cart-btn">
        <PiShoppingCartSimpleBold className="cart-logo" /> ADD TO CART
      </button>
      <PriceGuarantee />
      <DeliveryInfo />
      <ProductDetails />
    </div>
  );
};

export default SingleProductInfo;

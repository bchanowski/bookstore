import type { IProduct } from "../../types/ProductInterface";
import "../../styles/ProductPage/SingleProductInfo.css";
import ProductOption from "./ProductOption";
import PriceGuarantee from "./PriceGuarantee";
import AmountCounter from "./AmountCounter";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

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
      <div className="price-amount-div">
        <p>{product.price} €</p>
        <p className="counter-text">Amount:</p>
        <AmountCounter max={5} />
      </div>
      <div className="horizontal-line-info" />
      <ProductOption name="Cover" options={options} />
      <div className="horizontal-line-info" />
      <PriceGuarantee />
      <button className="add-to-cart-btn">
        <PiShoppingCartSimpleBold className="cart-logo" /> ADD TO CART
      </button>
      <div>details</div>
      <div>delivery info</div>
    </div>
  );
};

export default SingleProductInfo;

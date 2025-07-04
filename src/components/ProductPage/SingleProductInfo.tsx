import type { IProduct } from "../../types/ProductInterface";
import "../../styles/ProductPage/SingleProductInfo.css";
import ProductOption from "./ProductOption";
import PriceGuarantee from "./PriceGuarantee";

type Props = { id: string; product: IProduct };

const SingleProductInfo = ({ id, product }: Props) => {
  const options = ["Soft", "Hard"];
  return (
    <div className="product-page-info-div">
      <p>#{id}</p>
      <h2>{product.name}</h2>
      <p>{product.author}</p>
      <p>{product.price}</p>
      <ProductOption name="Cover" options={options} />
      <div>select number</div>
      <PriceGuarantee />
      <button>add to cart</button>
      <div>details</div>
      <div>delivery info</div>
    </div>
  );
};

export default SingleProductInfo;

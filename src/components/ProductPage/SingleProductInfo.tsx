import type { IProduct } from "../../types/ProductInterface";
import "../../styles/ProductPage/SingleProductInfo.css";

type Props = { id: string; product: IProduct };

const SingleProductInfo = ({ id, product }: Props) => {
  return (
    <div className="product-page-info-div">
      <p>#{id}</p>
      <h2>{product.name}</h2>
      <p>{product.author}</p>
      <p>{product.price}</p>
      <div>select option</div>
      <div>select number</div>
      <div>lower price guarantee</div>
      <button>add to cart</button>
      <div>details</div>
      <div>delivery info</div>
    </div>
  );
};

export default SingleProductInfo;

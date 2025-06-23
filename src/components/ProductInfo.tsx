import "../styles/ProductInfo.css";
import type { IProduct } from "../types/ProductInterface";
import StarSystem from "./StarSystem";

type Props = {
  product: IProduct;
};

const ProductInfo = ({ product }: Props) => {
  return (
    <div className="product-image-div">
      <img src={product.imageUrl} className="product-image" />
      <div className="product-info-div">
        <StarSystem rating={product.rating} />
        <p className="product-text">{product.name}</p>
        <p className="author-text">{product.author}</p>
        <hr className="horizontal-line"></hr>
        <p className="product-text">{product.price} €</p>
      </div>
    </div>
  );
};

export default ProductInfo;

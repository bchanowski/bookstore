import "../../styles/MainPage/ProductInfo.css";
import type { IProduct } from "../../types/ProductInterface";
import StarSystem from "../Shared/StarSystem";

type Props = {
  product: IProduct;
};

const ProductInfo = ({ product }: Props) => {
  return (
    <div className="product-image-div">
      <img src={product.imageUrl} className="product-image" />
      <div className="product-info-div">
        <StarSystem rating={product.rating} />
        <div className="moving-text">
          <p className="product-text">{product.name}</p>
        </div>
        <p className="author-text">{product.author}</p>
        <hr className="horizontal-line"></hr>
        <p className="product-price">{product.price} €</p>
      </div>
    </div>
  );
};

export default ProductInfo;

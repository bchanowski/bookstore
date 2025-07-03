import type { IProduct } from "../../types/ProductInterface";
import StarSystem from "../Shared/StarSystem";
import "../../styles/ProductPage/SingleProduct.css";
import ImageZoomInOut from "../Shared/ImageZoomInOut";
import SingleProductInfo from "./SingleProductInfo";

type Props = {
  id: string;
  product: IProduct;
};

const SingleProduct = ({ id, product }: Props) => {
  return (
    <div className="product-page-div">
      <div className="product-page-image-star-div">
        <div>
          <ImageZoomInOut imageUrl={product.imageUrl} />
        </div>
        <div className="product-page-star-div">
          <StarSystem rating={product.rating} />
          (5,089)
        </div>
      </div>
      <SingleProductInfo id={id} product={product} />
    </div>
  );
};

export default SingleProduct;

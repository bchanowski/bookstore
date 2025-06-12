import type { IProduct } from "../types/ProductInterface";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import "../styles/ProductsSlider.css";

type Props = {
  products: IProduct[];
  direction: string;
};

const ProductsSlider = ({ direction, products }: Props) => {
  return (
    <div className={direction + " products-slider-div"}>
      <div className="products-images-div">
        {products.map((product) => (
          <div className="product-image-div">
            <img src={product.imageUrl} className="product-image" />
            <p className="product-text">{product.name}</p>
            <p className="product-text">{product.price} €</p>
          </div>
        ))}
      </div>
      <button>
        <LiaAngleLeftSolid />
      </button>
      <button>
        <LiaAngleRightSolid />
      </button>
    </div>
  );
};

export default ProductsSlider;

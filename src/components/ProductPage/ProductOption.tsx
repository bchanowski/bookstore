import { useState } from "react";
import "../../styles/ProductPage/ProductOption.css";

type Props = {
  name: string;
  options: string[];
};

const ProductOption = ({ name, options }: Props) => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className="product-option-div">
      <p className="product-option-text">{name}:</p>
      <div className="options-div">
        {options.map((option, index) => (
          <div
            className={
              isSelected === index
                ? "selected-option product-option"
                : "product-option"
            }
            onClick={() => setIsSelected(index)}
            key={index}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOption;

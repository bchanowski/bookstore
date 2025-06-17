import type { IProduct } from "../types/ProductInterface";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import "../styles/ProductsSlider.css";
import { useEffect, useRef, useState } from "react";
import ProductInfo from "./ProductInfo";

type Props = {
  header: string;
  products: IProduct[];
};

const ProductsSlider = ({ header, products }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const firstProduct = sliderRef.current.querySelector(
        ".product-image-div"
      ) as HTMLElement;
      if (firstProduct) {
        const style = window.getComputedStyle(firstProduct);
        const margin =
          parseFloat(style.marginRight) + parseFloat(style.marginLeft);
        setItemWidth(firstProduct.offsetWidth + margin);
      }

      setMaxScroll(
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      );
    }
  }, [products]);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        setMaxScroll(
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      const newPosition = Math.min(currentPosition + itemWidth * 3, maxScroll);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setCurrentPosition(newPosition);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const newPosition = Math.max(currentPosition - itemWidth * 3, 0);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setCurrentPosition(newPosition);
    }
  };

  return (
    <div className="products-slider-div">
      <div className="category-div">
        <p className="category-text">{header}</p>
        <button className="showmore-btn">Show More {">"}</button>
      </div>
      <div className="products-div">
        <button
          className="products-buttons"
          style={{ left: 0 }}
          onClick={prevSlide}
        >
          <LiaAngleLeftSolid />
        </button>
        <div className="products-images-div" ref={sliderRef}>
          {products.map((product) => (
            <>
              <ProductInfo product={product} />
              <div className="product-vertical-line"></div>
            </>
          ))}
        </div>
        <button
          className="products-buttons"
          style={{ right: 0 }}
          onClick={nextSlide}
        >
          <LiaAngleRightSolid />
        </button>
      </div>
    </div>
  );
};

export default ProductsSlider;

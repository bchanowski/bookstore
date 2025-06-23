import { useState, useEffect, useRef, useCallback } from "react";
import "../styles/MainSlider.css";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { FaCircle, FaRegCircle } from "react-icons/fa6";
import CategoriesList from "./CategoriesList";

type Props = {
  imagesUrls: string[];
};

const MainSlider = ({ imagesUrls }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  function showLastImage() {
    setImageIndex((index) => {
      if (index === 0) return imagesUrls.length - 1;
      return index - 1;
    });
  }
  function showNextImage() {
    setImageIndex((index) => {
      if (index === imagesUrls.length - 1) return 0;
      return index + 1;
    });
  }
  const startTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!isPaused && imagesUrls.length > 0) {
      timerRef.current = window.setInterval(() => {
        setImageIndex((prev) =>
          prev === imagesUrls.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
  }, [isPaused, imagesUrls.length]);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [startTimer]);

  return (
    <div className="slider-div">
    <CategoriesList />
    <div
      className="main-slider-div"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="images-div">
        {imagesUrls.map((url) => (
          <img
            src={url}
            key={url}
            className="main-slider-images"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className="main-slider-buttons"
        style={{ left: 0 }}
        onClick={showLastImage}
      >
        <LiaAngleLeftSolid />
      </button>
      <button
        className="main-slider-buttons"
        style={{ right: 0 }}
        onClick={showNextImage}
      >
        <LiaAngleRightSolid />
      </button>
      <div className="index-buttons-div">
        {imagesUrls.map((_, index) => (
          <button
            className="index-btns"
            key={index}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <FaCircle /> : <FaRegCircle />}
          </button>
        ))}
      </div>
    </div></div>
  );
};

export default MainSlider;

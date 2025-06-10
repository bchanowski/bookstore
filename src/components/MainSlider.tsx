import { useState } from "react";
import "../styles/MainSlider.css";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

type Props = {
  imagesUrls: string[];
};

const MainSlider = ({ imagesUrls }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
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
  return (
    <div className="main-slider-div">
      <img src={imagesUrls[imageIndex]} className="main-slider-images" />
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
    </div>
  );
};

export default MainSlider;

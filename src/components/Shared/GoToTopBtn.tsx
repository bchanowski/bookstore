import { useState } from "react";
import "../../styles/Shared/GoToTopBtn.css";
import { CiCircleChevUp } from "react-icons/ci";

const GoToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const showBtn = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.addEventListener("scroll", showBtn);
  return (
    <>
      {showButton && (
        <CiCircleChevUp className="top-btn" onClick={scrollToTop} />
      )}
    </>
  );
};

export default GoToTopBtn;

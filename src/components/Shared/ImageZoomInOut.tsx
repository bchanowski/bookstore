import { useEffect, useRef, useState } from "react";
import "../../styles/Shared/ImageZoomInOut.css";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { MdClear } from "react-icons/md";

type Props = {
  imageUrl: string;
};
const ImageZoomInOut = ({ imageUrl }: Props) => {
  const [scale, setScale] = useState(1);
  const [position, setPosistion] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const handleZoomIn = () => {
    setScale((scale) => Math.min(scale + 0.1, 2.0));
  };

  const handleZoomOut = () => {
    setScale((scale) => Math.max(scale - 0.1, 0.5));
  };
  const clearZoom = () => {
    setScale(1);
    setPosistion({ x: 0, y: 0 });
  };
  useEffect(() => {
    const image = imageRef.current;
    let isDragging = false;
    let prevPosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPosition.x;
      const deltaY = e.clientY - prevPosition.y;
      prevPosition = { x: e.clientX, y: e.clientY };
      setPosistion((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY,
      }));
    };
    const handleMouseUp = () => {
      isDragging = false;
    };
    image?.addEventListener("mousedown", handleMouseDown);
    image?.addEventListener("mousemove", handleMouseMove);
    image?.addEventListener("mouseup", handleMouseUp);
    return () => {
      image?.removeEventListener("mousedown", handleMouseDown);
      image?.removeEventListener("mousemove", handleMouseMove);
      image?.removeEventListener("mouseup", handleMouseUp);
    };
  }, [imageRef, scale]);
  return (
    <div className="image-zoom-div">
      <div className="btn-div">
        <IoMdAdd
          onClick={() => {
            handleZoomIn();
          }}
          className="zoom-btn"
        />
        <IoMdRemove
          onClick={() => {
            handleZoomOut();
          }}
          className="zoom-btn"
        />
        <MdClear
          className="zoom-btn"
          onClick={() => {
            clearZoom();
          }}
        />
      </div>
      <img
        ref={imageRef}
        src={imageUrl}
        alt=""
        className="zoom-img"
        draggable={false}
        style={{
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
};

export default ImageZoomInOut;

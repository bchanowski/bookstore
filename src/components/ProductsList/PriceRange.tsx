import React, { useState, useRef, useEffect, useCallback } from "react";
import type { PriceRangeI } from "../../types/PriceRangeInterface";
import "../../styles/ProductsList/PriceRange.css";

const PriceRange: React.FC<PriceRangeI> = ({
  min = 0,
  max = 1000,
  step = 10,
  initialMin = 100,
  initialMax = 800,
  currency = "$",
}) => {
  const [minVal, setMinVal] = useState(initialMin);
  const [maxVal, setMaxVal] = useState(initialMax);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percent = Math.max(
        0,
        Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
      );
      const value =
        Math.round(((percent / 100) * (max - min) + min) / step) * step;

      if (dragging === "min") {
        const newMin = Math.max(min, Math.min(value, maxVal - step));
        setMinVal(newMin);
      } else {
        const newMax = Math.min(max, Math.max(value, minVal + step));
        setMaxVal(newMax);
      }
    },
    [dragging, max, maxVal, min, minVal, step]
  );

  useEffect(() => {
    if (!dragging) return;

    const handleMouseUp = () => setDragging(null);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, minVal, maxVal, handleMouseMove]);

  const handleInputChange = (type: "min" | "max", value: string) => {
    const numVal = parseInt(value) || 0;
    if (type === "min") {
      const newMin = Math.max(min, Math.min(numVal, maxVal - step));
      setMinVal(newMin);
    } else {
      const newMax = Math.min(max, Math.max(numVal, minVal + step));
      setMaxVal(newMax);
    }
  };

  return (
    <>
      <div className="price-range-container">
        <div className="price-inputs">
          <div className="price-input">
            <label>Min Price</label>
            <input
              type="number"
              value={minVal}
              onChange={(e) => handleInputChange("min", e.target.value)}
              min={min}
              max={max}
              step={step}
            />
          </div>
          <div className="price-input">
            <label>Max Price</label>
            <input
              type="number"
              value={maxVal}
              onChange={(e) => handleInputChange("max", e.target.value)}
              min={min}
              max={max}
              step={step}
            />
          </div>
        </div>

        <div ref={sliderRef} className="slider-container">
          <div
            className="slider-track"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />

          <div
            className={`slider-handle ${dragging === "min" ? "dragging" : ""}`}
            style={{ left: `${minPercent}%` }}
            onMouseDown={() => setDragging("min")}
          />

          <div
            className={`slider-handle ${dragging === "max" ? "dragging" : ""}`}
            style={{ left: `${maxPercent}%` }}
            onMouseDown={() => setDragging("max")}
          />
        </div>

        <div className="slider-labels">
          <span>
            {currency}
            {min}
          </span>
          <span>
            {currency}
            {max}
          </span>
        </div>
      </div>
    </>
  );
};

export default PriceRange;

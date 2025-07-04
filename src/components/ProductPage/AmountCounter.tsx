import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import "../../styles/ProductPage/AmountCounter.css";

type Props = {
  max: number;
};

const AmountCounter = ({ max }: Props) => {
  const [open, setOpen] = useState(false);
  const [counterValue, setCounterValue] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    if (newValue <= max) setCounterValue(newValue);
  };
  return (
    <div className="counter-div" onMouseLeave={() => setOpen(false)}>
      <FaAngleDown
        className="counter-icon"
        onClick={() => setOpen((isOpen) => !isOpen)}
      />
      <input
        value={counterValue}
        className="counter-input"
        type="number"
        onChange={(e) => handleChange(e)}
      />
      {open && (
        <div className="counter-dropdown">
          {[...Array(max)]
            .map((_, i) => i + 1)
            .map((i) => (
              <p
                className="dropdown-option"
                key={i}
                onClick={() => {
                  setCounterValue(i);
                  setOpen(false);
                }}
              >
                {i}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default AmountCounter;

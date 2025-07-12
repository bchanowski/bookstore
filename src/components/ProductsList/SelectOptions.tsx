import { useState } from "react";
import "../../styles/ProductsList/SelectOptions.css";

type Props = {
  options: string[];
  title: string;
};
const SelectOptions = ({ options, title }: Props) => {
  const [showMore, setShowMore] = useState(false);
  let firstFiveElements = [];
  let restOfElements!: string[];
  if (options.length > 4) {
    firstFiveElements = options.slice(0, 5);
    restOfElements = options.slice(5, options.length);
  } else {
    firstFiveElements = options;
  }
  return (
    <div>
      {title !== "" && <p className="checkbox-title">{title}:</p>}
      {firstFiveElements.map((option, index) => (
        <div className="checkbox-div" key={index}>
          <input
            className="checkbox"
            type="checkbox"
            id={"option" + option + index}
          />
          <label htmlFor={"option" + option + index}>
            <p className="checkbox-text">{option}</p>
          </label>
        </div>
      ))}
      {options.length > 4 && showMore === false ? (
        <>
          <button
            className="showmore-option-btn"
            onClick={() => setShowMore(true)}
          >
            Show More...
          </button>
        </>
      ) : (
        <></>
      )}
      {showMore && <SelectOptions title="" options={restOfElements} />}
    </div>
  );
};

export default SelectOptions;

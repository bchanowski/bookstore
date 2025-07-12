import StarSystem from "../Shared/StarSystem";
import "../../styles/ProductsList/FilterRating.css";

const FilterRating = () => {
  return (
    <div>
      <p className="rating-title">Select Rating:</p>
      {[...Array(5)].map((_, index) => (
        <div className="rating-filter-div" key={index}>
          <input
            type="checkbox"
            id={"rating" + index}
            name={"rating" + index}
          />
          <label htmlFor={"rating" + index}>
            <StarSystem rating={(index + 1).toString()} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterRating;

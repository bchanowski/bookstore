import StarSystem from "../Shared/StarSystem";

const FilterRating = () => {
  return (
    <div>
      <p>Select Rating:</p>
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <input type="checkbox"></input>
          <StarSystem rating={(index + 1).toString()} />
        </div>
      ))}
    </div>
  );
};

export default FilterRating;

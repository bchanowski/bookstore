import "../../styles/ProductsList/SortBy.css";

const SortBy = () => {
  const options = [
    "Popularity",
    "Price(High to Low)",
    "Price(Low to High",
    "Newest",
    "Oldest",
  ];
  return (
    <div>
      <p className="sort-title">Sort By:</p>
      <select className="sort-select">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;

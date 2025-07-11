import "../../styles/ProductsList/FilterOptions.css";
import FilterRating from "./FilterRating";
import PriceRange from "./PriceRange";
import SelectOptions from "./SelectOptions";
import SortBy from "./SortBy";

const FilterOptions = () => {
  const availability_options = ["Tommorow", "2 Days", "Week", "Month"];
  return (
    <div className="filter-div">
      <SortBy />
      <p>category</p>
      <SelectOptions options={availability_options} />
      <PriceRange
        min={0}
        max={1000}
        step={10}
        initialMin={100}
        initialMax={800}
        currency="€"
      />
      <FilterRating />
      <button>show results</button>
    </div>
  );
};

export default FilterOptions;

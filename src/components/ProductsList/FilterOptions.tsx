import "../../styles/ProductsList/FilterOptions.css";
import FilterRating from "./FilterRating";
import PriceRange from "./PriceRange";
import SelectOptions from "./SelectOptions";
import SortBy from "./SortBy";

const FilterOptions = () => {
  const availability_options = ["Tommorow", "2 Days", "Week", "Month"];
  const categories = [
    "Fantasy",
    "Historical",
    "Romance",
    "Biography",
    "War",
    "Drama",
    "Crime",
    "Political",
    "Educational",
    "Self-Improvment",
    "Sport",
  ];
  return (
    <div className="filter-div">
      <SortBy />
      <SelectOptions title="Categories" options={categories} />
      <SelectOptions title="Availability" options={availability_options} />
      <PriceRange
        min={0}
        max={1000}
        step={10}
        initialMin={100}
        initialMax={800}
        currency="€"
      />
      <FilterRating />
      <button className="show-results-btn">show results</button>
    </div>
  );
};

export default FilterOptions;

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
      <p>Sort By:</p>
      <select>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;

import FilterOptions from "../components/ProductsList/FilterOptions";
import ListOfProducts from "../components/ProductsList/ListOfProducts";

const ProductsList = () => {
  return (
    <div style={{ display: `flex` }}>
      <FilterOptions />
      <ListOfProducts />
    </div>
  );
};

export default ProductsList;

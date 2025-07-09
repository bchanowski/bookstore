import fantasyProducts from "../../data/FantasyProducts";
import ProductInfo from "../MainPage/ProductInfo";
import "../../styles/ProductsList/ListOfProducts.css";

const ListOfProducts = () => {
  return (
    <div className="products-list-div">
      {fantasyProducts.map((product, index) => (
        <>
          <ProductInfo product={product} key={index} />
          <ProductInfo product={product} key={index} />
          <ProductInfo product={product} key={index} />
        </>
      ))}
    </div>
  );
};

export default ListOfProducts;

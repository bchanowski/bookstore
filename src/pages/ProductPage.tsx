import { useParams } from "react-router";
import type { IProduct } from "../types/ProductInterface";
import fantasyProducts from "../data/FantasyProducts";
import ProductsSlider from "../components/MainPage/ProductsSlider";
import SingleProduct from "../components/ProductPage/SingleProduct";

const ProductPage = () => {
  let { id } = useParams();
  const product: IProduct = fantasyProducts[0];
  return (
    <>
    {id !== undefined ? <><SingleProduct id={id} product={product}/>
      <ProductsSlider header="SIMILAR PRODUCTS" products={fantasyProducts}/></> : <p>Error Occured. Try Again Later!</p>}
      
    </>
  );
};

export default ProductPage;

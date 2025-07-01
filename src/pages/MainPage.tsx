import MainSlider from "../components/MainPage/MainSlider";
import ProductsSlider from "../components/MainPage/ProductsSlider";
import photo1 from "../assets/mainslider/slider1.png";
import photo2 from "../assets/mainslider/slider2.png";
import photo3 from "../assets/mainslider/slider3.png";
import photo4 from "../assets/mainslider/slider4.png";
import fantasyProducts from "../data/FantasyProducts";

const IMAGES = [photo1, photo2, photo3, photo4];

const MainPage = () => {
  return (
    <>
      <MainSlider imagesUrls={IMAGES} />
      <ProductsSlider header="FANTASY" products={fantasyProducts} />
      <ProductsSlider header="ROMANCE" products={fantasyProducts} />
      <ProductsSlider header="EDUCATIONAL" products={fantasyProducts} />
    </>
  );
};

export default MainPage;

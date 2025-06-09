import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import Navbar from "../components/Navbar";
import ProductsSlider from "../components/ProductsSlider";

const MainPage = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <MainSlider />
      <ProductsSlider direction="left" />
      <ProductsSlider direction="right" />
      <ProductsSlider direction="left" />
      <Footer />
    </>
  );
};

export default MainPage;

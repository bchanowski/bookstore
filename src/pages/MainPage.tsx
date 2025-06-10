import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import Navbar from "../components/Navbar";
import ProductsSlider from "../components/ProductsSlider";
import photo1 from "../assets/mainslider/slider1.png";
import photo2 from "../assets/mainslider/slider2.png";
import photo3 from "../assets/mainslider/slider3.png";
import photo4 from "../assets/mainslider/slider4.png";

const IMAGES = [photo1, photo2, photo3, photo4];

const MainPage = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <MainSlider imagesUrls={IMAGES} />
      <ProductsSlider direction="left" />
      <ProductsSlider direction="right" />
      <ProductsSlider direction="left" />
      <Footer />
    </>
  );
};

export default MainPage;

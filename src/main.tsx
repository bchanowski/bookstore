import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./pages/MainPage";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Announcement from "./components/Shared/Announcement";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import GoToTopBtn from "./components/Shared/GoToTopBtn";
import ProductPage from "./pages/ProductPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
      <Footer />
      <GoToTopBtn />
    </BrowserRouter>
  </StrictMode>
);

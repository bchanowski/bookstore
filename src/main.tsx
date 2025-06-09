import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./pages/MainPage";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);

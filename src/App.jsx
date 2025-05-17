import React from "react";
import Header from "./Components/Header";
import "./App.css";
import HeroSection from "./Components/Hero Section/HeroSection";
import DontPutNazar from "./Components/Don't Put Nazar/DontPutNazar";
import TopCategories from "./Components/Top Categories/TopCategories";
import NishoramaYoung from "./Components/Nishorama Young/NishoramaYoung";
import Afreen from "./Components/Nishorama Young/Afreen";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import footerImg from "./Components/img/footer/Footer-BG.png";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <HeroSection />
      <DontPutNazar />
      <TopCategories />
      <NishoramaYoung />
      <Afreen />

      <div className="section-title s2-title-section text-center">
        <h2 className="section-heading">Let customers speak for us</h2>
      </div>

      <Slider />
      <Footer />

      <div className="footer--end--section">
        <div className="footer-img-cont container-fluid">
          <img
            className="footer-img"
            src={footerImg}
            alt="footer_background_image"
          />

          <div className="footer--end-section container-fluid text-center">
            <p>&copy; 2024 Nishorama . All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

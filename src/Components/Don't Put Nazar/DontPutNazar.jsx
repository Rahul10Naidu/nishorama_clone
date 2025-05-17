import React from "react";
import "./DPN.css";
import img1front from "../img/section1/model-1-front.webp";
import img1back from "../img/section1/model-1-back.webp";
import Card from "./Card";

const DontPutNazar = () => {
  return (
    <div>
      <div className="section--1 container-fluid">
        <div className="section-title text-center">
          <h2 className="section-heading">Don't Put Nazar SS1</h2>
        </div>

        <div className="section--content container-fluid ">
          <div className="content--card col-lg-2 col-md-4 col-sm-6 col-xs-1">
            <div className="media">
              <div className="main-img-cont">
                <img className="main-img" src={img1front} />
              </div>
              <div className="hover-img-cont">
                <img className="hover-img" src={img1back} />
              </div>
              <div className="hover-btns-cont d-flex">
                <div className="btn-cont heart-btn-cont">
                  <button className="img-btns s1-heart-btn  ">
                    <i className="bi bi-heart"></i>
                  </button>
                  <div className="hover-wish-text">Quick View</div>
                </div>
                <div className="btn-cont eye-btn-cont">
                  <button className="img-btns eye-btn  ">
                    <i className="bi bi-eye"></i>
                  </button>
                  <div className="hover-see-text">Add to Wishlist</div>
                </div>
              </div>
              <div className="hover-texts-cont d-flex gap-3 text-center"></div>
            </div>
            <div className="s1-title-section">
              <h3 className="s1-title text-center">
                Simran Halterneck Corset Kurti
              </h3>
              <h3 className="s1-price text-center">Rs. 1695.00</h3>
            </div>
            <div className="s1-btn-section ">
              <button className="s1-btn btn btn-outline-dark border-1">
                SELECT OPTIONS
              </button>
            </div>
          </div>

          <Card img1={img1front} img2={img1back} />

          <Card img1={img1front} img2={img1back} />

          <Card img1={img1front} img2={img1back} />

          <Card img1={img1front} img2={img1back} />
          <Card img1={img1front} img2={img1back} />
        </div>

        <div className="section--content container-fluid ">
          <div className="content--card col-lg-2 col-md-4 col-sm-6 col-xs-1">
            <div className="media">
              <div className="main-img-cont">
                <img className="main-img" src={img1front} />
              </div>
              <div className="hover-img-cont">
                <img className="hover-img" src={img1back} />
              </div>
              <div className="hover-btns-cont d-flex">
                <div className="btn-cont heart-btn-cont">
                  <button className="img-btns s1-heart-btn  ">
                    <i className="bi bi-heart"></i>
                  </button>
                  <div className="hover-wish-text">Quick View</div>
                </div>
                <div className="btn-cont eye-btn-cont">
                  <button className="img-btns eye-btn  ">
                    <i className="bi bi-eye"></i>
                  </button>
                  <div className="hover-see-text">Add to Wishlist</div>
                </div>
              </div>
              <div className="hover-texts-cont d-flex gap-3 text-center"></div>
            </div>
            <div className="s1-title-section">
              <h3 className="s1-title text-center">
                Simran Halterneck Corset Kurti
              </h3>
              <h3 className="s1-price text-center">Rs. 1695.00</h3>
            </div>
            <div className="s1-btn-section ">
              <button className="s1-btn btn btn-outline-dark border-1">
                SELECT OPTIONS
              </button>
            </div>
          </div>

          <Card img1={img1front} img2={img1back} />

          <Card img1={img1front} img2={img1back} />

          <Card img1={img1front} img2={img1back} />

          <Card img1={img1front} img2={img1back} />
          <Card img1={img1front} img2={img1back} />
        </div>

        <div className="s1-shopall-section d-flex align-item-center justify-content-center mt-5 ">
          <button className="s1-shopall btn btn-outline-dark border-1">
            SHOP ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default DontPutNazar;

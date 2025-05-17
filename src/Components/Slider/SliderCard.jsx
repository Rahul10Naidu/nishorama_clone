import React from "react";
import "./slider.css";

const SliderCard = (props) => {
  return (
    <div className="slides sliderCard">
      <div className="sliderCard-section sc-side"></div>
      <div className="sliderCard-section sc-main">
        <div className="sc-main-3 sc-main-3-name">
          <h3 className="customer-name">{props.name}</h3>
          <h4 className="customer-rating">{props.rating}</h4>
        </div>
        <div className="sc-main-3 sc-main-3-review">
          <p className="customer-review">{props.review}</p>
        </div>
        <div className="sc-main-3 sc-main-3-img">
          <img className="customer-img" alt="customer_image" src={props.img} />
        </div>
      </div>
      <div className="sliderCard-section sc-side"></div>
    </div>
  );
};

export default SliderCard;

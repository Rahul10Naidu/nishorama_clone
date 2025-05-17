import React from "react";
import "./ny.css";

const Card3 = (props) => {
  return (
    <div className="card-content-3">
      <a href={props.link} target="_blank">
        <div className="media-s3">
          <div className="main-img-cont-s3">
            <img className="main-img-s3" src={props.img1} />
          </div>
          <div className="hover-img-cont-s3">
            <img className="hover-img-s3" src={props.img2} />
          </div>

          <div className="like-cont btn-cont heart-btn-cont">
            <button className="img-btns s1-heart-btn  ">
              <i className="bi bi-heart"></i>
            </button>
            <div className="like-text-s3 hover-wish-text">Add to Wishlist</div>
          </div>

          <div className="hover-btns-cont-s3  d-flex">
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
        </div>
      </a>

      <div className="s1-title-section">
        <h3 className="s1-title text-center">{props.productName}</h3>
        <h3 className="s1-price text-center">{props.productPrice}</h3>
      </div>
    </div>
  );
};

export default Card3;

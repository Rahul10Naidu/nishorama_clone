import React, { useRef, useEffect, useState } from "react";
import "./product.css";
import img1 from "../img/product/img1.webp";
import img2 from "../img/product/img2.webp";
import img3 from "../img/product/img3.webp";
import img4 from "../img/product/img4.webp";

const ProductWindow = () => {
  const prSliderRef = useRef(null);
  const prBtnLeftRef = useRef(null);
  const prBtnRightRef = useRef(null);
  const [slider, setSlider] = useState();
  const [slides, setSlides] = useState(0);

  let currentSlide = 0;

  useEffect(() => {
    //Getting the number of slides
    const prSlider = prSliderRef.current;
    const prSlides = prSlider.querySelectorAll(".pr-slide");
    setSlides(prSlides.length);

    // Getting the slider Length
    const sliderLength = prSlider.getBoundingClientRect().width;
    console.log(sliderLength);

    //Slider Function
    const goToSlide = (sl) => {
      prSlider.style.transform = `translateX(-${(100 / slides) * sl}%)`;
    };

    goToSlide(currentSlide);

    //Next & Prev Functions
    function next() {
      if (currentSlide >= prSlides.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      goToSlide(currentSlide);
    }

    function prev() {
      if (currentSlide <= 0) {
        currentSlide = prSlides.length - 1;
      } else {
        currentSlide--;
      }
      goToSlide(currentSlide);
    }

    // Getting the btns
    const prBtnLeft = prBtnLeftRef.current;
    const prBtnRight = prBtnRightRef.current;

    // Adding Event Listeners to the buttons
    prBtnLeft.addEventListener("click", prev);
    prBtnRight.addEventListener("click", next);

    // Removing Event Listeners on dismount
    return () => {
      prBtnLeft.removeEventListener("click", prev);
      prBtnRight.removeEventListener("click", next);
    };
  }, [slides]);

  //Product Quantity
  // ------------------------------------------------------------------------------------------
  const [quantity, setQuantity] = useState(1);

  const addProductQuantity = () => {
    let productQuantity = quantity;
    let newProductQunatity = productQuantity + 1;
    setQuantity(newProductQunatity);
  };

  const minusProductQuantity = () => {
    let productQuantity = quantity;
    let newProductQunatity = productQuantity - 1;
    if (newProductQunatity <= 0) {
      return;
    }
    setQuantity(newProductQunatity);
  };

  // Set Product Size
  // --------------------------------------------------------------------------------------------

  const [size, setSize] = useState("");

  const getProductSize = (e) => {
    let newProductSize = e.target.value;
    setSize(newProductSize);
  };

  return (
    <div className="product-container">
      <div className="product-box fcc">
        <button className="product-close-btn btn">
          <i className="bi bi-x"></i>
        </button>

        {/* Section-1 */}
        <div className="pb-section pb-s1">
          <div ref={prSliderRef} className="pr-slider">
            <div className="pr-slide">
              <img src={img4} alt="product_img_4" className="pr-img" />
            </div>
            <div className="pr-slide">
              <img src={img3} alt="product_img_3" className="pr-img" />
            </div>
            <div className="pr-slide">
              <img src={img2} alt="product_img_2" className="pr-img" />
            </div>

            <div className="pr-slide">
              <img src={img1} alt="product_img_1" className="pr-img" />
            </div>
          </div>

          <div className="pr-nav-cont">
            <div className="pr-nav-box pr-nav-left fcc">
              <button ref={prBtnLeftRef} className="pr-btn pr-next-btn">
                <i className="bi bi-chevron-left"></i>
              </button>
            </div>
            <div className="pr-nav-box pr-nav-right fcc">
              <button ref={prBtnRightRef} className="pr-btn">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Section2 */}

        {/* Sub-Section 1*/}
        <div className="pb-section pb-s2 fcc">
          <div className="pb-s2-text">
            <a
              className="pb-link-h2"
              href="https://www.nishorama.com/products/dabu-black-modal"
              target="_blank"
            >
              Simran Halterneck Corset Kurti
            </a>
            <h3 className="pb-price">Rs. 1695.00</h3>
            <p className="pb-desc">
              Composition:100% Pure cotton | Fit: Body Hugging with corset back
              | Print: Ajrak | Technical Details: Hand Block Printed
            </p>
            <a
              className="pb-link-p"
              href="https://www.nishorama.com/products/dabu-black-modal"
              target="_blank"
            >
              <p className="pb-desc">View Details</p>
            </a>
          </div>

          {/* Sub-Section 2*/}
          <div className="pb-s2-radio">
            <p className="pb-desc pb-s2-greendot">25 in Quantity</p>
            <p className="pb-desc">Size : {}</p>
            <div className="input-box-cont fcc gap-3">
              <div className="input-box fcc">
                <input
                  className="pb-radio-btn"
                  type="radio"
                  id="XXS"
                  name="product-size"
                  value="XXS"
                  onChange={(e) => {
                    getProductSize(e);
                  }}
                />
                <label className="pb-radio-label" htmlFor="XXS">
                  XXS
                </label>
              </div>
              <div className="input-box fcc">
                <input
                  className="pb-radio-btn"
                  type="radio"
                  id="XS"
                  name="product-size"
                  value="XS"
                  onChange={(e) => {
                    getProductSize(e);
                  }}
                />
                <label className="pb-radio-label" htmlFor="XS">
                  XS
                </label>
              </div>
              <div className="input-box fcc">
                <input
                  className="pb-radio-btn"
                  type="radio"
                  id="S"
                  name="product-size"
                  value="S"
                  onChange={(e) => {
                    getProductSize(e);
                  }}
                />
                <label className="pb-radio-label" htmlFor="S">
                  S
                </label>
              </div>
              <div className="input-box fcc">
                <input
                  className="pb-radio-btn"
                  type="radio"
                  id="M"
                  name="product-size"
                  value="M"
                  onChange={(e) => {
                    getProductSize(e);
                  }}
                />
                <label className="pb-radio-label" htmlFor="M">
                  M
                </label>
              </div>
              <div className="input-box fcc">
                <input
                  className="pb-radio-btn"
                  type="radio"
                  id="L"
                  name="product-size"
                  value="L"
                  onChange={(e) => {
                    getProductSize(e);
                  }}
                />
                <label className="pb-radio-label" htmlFor="L">
                  L
                </label>
              </div>
              <div className="input-box fcc">
                <input
                  className="pb-radio-btn"
                  type="radio"
                  id="XL"
                  name="product-size"
                  value="XL"
                  onChange={(e) => {
                    getProductSize(e);
                  }}
                />
                <label className="pb-radio-label" htmlFor="XL">
                  XL
                </label>
              </div>
              <div className="input-box fcc">
                <input
                  className="pb-radio-btn"
                  type="radio"
                  id="XXL"
                  name="product-size"
                  value="XXL"
                  onChange={(e) => {
                    getProductSize(e);
                  }}
                />
                <label className="pb-radio-label" htmlFor="XXL">
                  XXL
                </label>
              </div>
            </div>
          </div>

          {/* Sub-Section 3*/}
          <div className="pb-s2-cart fcc">
            <h3 className="pb-desc pb-s2-cart-h3">Quantity</h3>
            <div className="pb-s2-quantity fcc">
              <div className="pb-quantity-cont fcc">
                <div className="pb-Btn-cont fcc">
                  <button
                    onClick={() => {
                      addProductQuantity();
                    }}
                    className="pb-addBtn btn"
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
                <div className="pb-product-quantity fcc">{quantity}</div>
                <div className="pb-Btn-cont fcc">
                  <button
                    onClick={() => {
                      minusProductQuantity();
                    }}
                    className="pb-minusBtn btn"
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                </div>
              </div>
              <div className="pb-add-sec s3-shopall-section d-flex align-item-center justify-content-center ">
                <a
                  className="pb-add-link s3-shopall-link"
                  href="https://www.nishorama.com/collections/nisho-young"
                  target="_blank"
                >
                  <button className="pb-buy-btn  s3-shopall btn btn-outline-dark border-1">
                    ADD TO CART
                  </button>
                </a>
              </div>
            </div>
            <div className=" pb-buy s3-shopall-section d-flex align-item-center justify-content-center ">
              <a
                className="pb-buy-link s3-shopall-link"
                href="https://www.nishorama.com/collections/nisho-young"
                target="_blank"
              >
                <button className="pb-buy-btn  s3-shopall btn btn-outline-dark border-1">
                  BUY IT NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWindow;

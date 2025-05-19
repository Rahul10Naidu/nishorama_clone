import React, { useContext, useEffect, useRef } from "react";
import "./search.css";
import { Context } from "../Context/Context";

const SearchHeader = () => {
  const { screenWidth, searchHeaderFunction, isSearchActive } =
    useContext(Context);

  const section1Ref = useRef(null);
  const searchHeaderRef = useRef(null);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  const addSection1 = () => {
    const section1 = section1Ref.current;
    screenWidth < 768
      ? section1.classList.add("s-h-1-visible")
      : section1.classList.remove("s-h-1-visible");
  };

  useEffect(() => {
    addSection1();
  }, []);

  useEffect(() => {
    addSection1();
  }, [screenWidth]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const closeBtn = closeBtnRef.current;

    overlay.addEventListener("click", function () {
      searchHeaderFunction();
    });

    closeBtn.addEventListener("click", function () {
      searchHeaderFunction();
    });

    return () => {
      overlay.removeEventListener("click", function () {
        searchHeaderFunction();
      });

      closeBtn.removeEventListener("click", function () {
        searchHeaderFunction();
      });
    };
  }, [isSearchActive]);

  return (
    <div>
      <div
        ref={searchHeaderRef}
        className={`search-header container-fluid d-flex flex-column gap-5 ${
          isSearchActive ? "search-header-visible" : ""
        }`}
      >
        <div ref={section1Ref} className="s-h--3 s-h-1 d-flex ">
          <div className="s-h-1-sub">
            <p className="s-h-p">Search our Store</p>
          </div>
          <div ref={closeBtnRef} className="s-h-1-sub">
            <button className=" s-h-btn s-h-close-btn btn btn-outline-dark">
              <i className="bi bi-x"></i>
            </button>
          </div>
        </div>
        <div className="s-h--3 s-h-2 d-flex ">
          <div className=" s-h-2-sub logo-uph s-h-2-logo">
            <a href="https://www.nishorama.com" target="_blank">
              <img
                className="logo-img"
                src="https://www.nishorama.com/cdn/shop/files/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="s-h-2-sub s-h-2-search">
            <input
              className="search-bar"
              type="text"
              placeholder="Search Products"
            />
          </div>
          <div className="s-h-2-sub d-flex gap-3 s-h-2-icons">
            <div className="s-h-2-icon">
              <button className="s-h-btn s-h-profile-btn btn btn-outline-dark">
                <i class="bi bi-person-circle"></i>
              </button>
              <div className="s-h-hover-text">Profile</div>
            </div>
            <div className="s-h-2-icon">
              <button className="s-h-btn s-h-heart-btn btn btn-outline-dark">
                <i class="bi bi-heart"></i>
              </button>
              <div className="s-h-hover-text">Wishlist</div>
            </div>
            <div className="s-h-2-icon">
              <button className="s-h-btn s-h-cart-btn btn btn-outline-dark">
                <i class="bi bi-bag"></i>
              </button>
              <div className="s-h-hover-text">To Cart</div>
            </div>
          </div>
        </div>

        <div className="s-h--3  s-h-3 d-flex align-items-center">
          <span className="s-h-p">Popular Searches: </span>
          <div className="search-queries-div">
            <a className="search-queries" href="" target="_blank">
              Best Seller
            </a>
            <a className="search-queries" href="" target="_blank">
              New Arrival
            </a>
            <a className="search-queries" href="" target="_blank">
              Dresses
            </a>
          </div>
        </div>
      </div>
      <div
        ref={overlayRef}
        className={`overlay-sh ${isSearchActive ? "overlay-sh-visible" : ""}`}
      ></div>
    </div>
  );
};

export default SearchHeader;

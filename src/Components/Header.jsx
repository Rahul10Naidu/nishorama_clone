import React, { use, useEffect, useRef, useState } from "react";
import "./header.css";
import { useContext } from "react";
import { Context } from "./Context/Context";

function getSize() {
  return window.innerWidth;
}

const Header = () => {
  const [screenSize, setScreenSize] = useState(getSize());
  const [MenuOpen, setMenuOpen] = useState(true);

  // Search Header ---------------------------------------------------------------
  const { searchHeaderFunction, profileBoxActivation } = useContext(Context);

  function closeMenu() {
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const lowerHearWrap = document.querySelector(".lower-header-wrap");
    const body = document.body;
    const uph3 = document.querySelector(".uph3-icon");
    const btn = document.querySelector(".btn");
    const header = document.querySelector(".header");
    // lowerHearWrap.style.transform = "translateX(-100%)";
    lowerHearWrap.style.transform = "translateX(-100%)";
    closeBtn.classList.add("hidden");
    closeBtn.classList.remove("visible");
    menuBtn.classList.add("visible");
    menuBtn.classList.remove("hidden");
    body.style.overflowY = "scroll";
    header.style.backgroundColor = "";
    btn.style.color = "#fff";
    closeBtn.style.color = "#fff";
    uph3.style.color = "#fff";

    setMenuOpen(false);
  }

  function openMenu() {
    const header = document.querySelector(".header");
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const lowerHearWrap = document.querySelector(".lower-header-wrap");
    const body = document.body;
    const uph3 = document.querySelector(".uph3-icon");
    const btn = document.querySelector(".btn");

    lowerHearWrap.style.transform = "translateX(0%)";
    closeBtn.classList.add("visible");
    closeBtn.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    menuBtn.classList.remove("visible");
    body.style.overflowY = "hidden";
    header.style.backgroundColor = "#fff";
    btn.style.color = "#000";
    closeBtn.style.color = "#000";
    uph3.style.color = "#000";
    setMenuOpen(true);
  }

  useEffect(() => {
    function resized() {
      setScreenSize(getSize);

      if (MenuOpen && screenSize < 1024) {
        closeMenu();
        const lowerHeader = document.querySelector(".lowerHeader");
        lowerHeader.transform = "translateX(-100%)";
      }

      if (!MenuOpen && screenSize < 1024) {
        const header = document.querySelector(".header");
        const uph3 = document.querySelector(".uph3-icon");
        const btn = document.querySelector(".btn");
        const closeBtn = document.querySelector(".close-btn");
        header.style.backgroundColor = "#fff";
        btn.style.color = "#000";
        closeBtn.style.color = "#000";
        uph3.style.color = "#000";
      }
    }

    window.addEventListener("resize", resized);

    return () => window.removeEventListener("resize", resized);
  }, [screenSize]);

  useEffect(() => {
    const header = document.querySelector(".header");

    function stickyEvent() {
      if (this.window.scrollY > 120 && this.window.scrollY < 600) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", stickyEvent);

    return () => {
      window.removeEventListener("scroll", stickyEvent);
    };
  }, []);

  useEffect(() => {
    // Side-Menu Functionalilty

    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const lowerHearWrap = document.querySelector(".lower-header-wrap");
    if (screenSize < 1024) {
      menuBtn.addEventListener("click", function () {
        openMenu();
      });

      closeBtn.addEventListener("click", function () {
        closeMenu();
      });
    } else {
      const closeBtn = document.querySelector(".close-btn");

      const uph3 = document.querySelector(".uph3-icon");
      const btn = document.querySelector(".btn");
      const header = document.querySelector(".header");

      const lowerHearWrap = document.querySelector(".lower-header-wrap");
      lowerHearWrap.style.transform = "translateX(0%)";
      header.style.backgroundColor = "";
      btn.style.color = "#fff";
      closeBtn.style.color = "#fff";
      uph3.style.color = "#fff";
    }

    return () => {
      menuBtn.removeEventListener("click", function () {});
      closeBtn.removeEventListener("click", function () {});
    };
  }, [screenSize]);

  return (
    <div className="header-section">
      <div className={`header container-fluid text-white `}>
        <div className="upperHeader d-flex align-items-center">
          <div className="uph-3 search-uph pe-auto">
            <div className="search-btn-cont">
              <button
                onClick={(e) => searchHeaderFunction(e)}
                className=" search-btn btn d-flex align-items-center justify-content-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
              <div className="hover-text">Search</div>
            </div>

            {/* Menu & Close btns for lesser screen resol */}

            <div className="menu-btn-cont visible">
              <button className="menu-btn btn">
                <i className="bi bi-list"></i>
              </button>

              <button className="close-btn btn hidden">
                <i className="bi bi-x"></i>
              </button>
            </div>
          </div>
          <div className="uph-3 logo-uph">
            <a href="https://www.nishorama.com" target="_blank">
              <img
                className="logo-img"
                src="https://www.nishorama.com/cdn/shop/files/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="uph-3 icons-uph d-flex gap-5 align-items-center justify-content-end">
            <div className="uph3-icon profile-btn-cont">
              <button
                onClick={() => profileBoxActivation()}
                className=" profile-btn btn d-flex align-items-center justify-content-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </button>
            </div>

            <div className="uph3-icon heart-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </div>

            <div className="uph3-icon pe-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="lower-header-wrap">
          <div className="lowerHeader">
            <div className="lh-s">
              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/collections/ss4"
                  >{`Don't Put Nazar SS1 (Prelaunch)`}</a>
                </h3>

                <div className="hover-line"></div>
              </div>

              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/collections/best-seller"
                  >
                    Most Wanted
                  </a>
                </h3>
                <div className="hover-line"></div>
              </div>

              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/collections/new-arrival"
                  >
                    New Arrivals
                  </a>
                </h3>
                <div className="hover-line"></div>
              </div>

              <div className="lhc drop-lhc">
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <h3>
                      <a
                        className="header-link"
                        href="https://www.nishorama.com/collections/nisho-young"
                      >
                        Shop By Collections
                      </a>{" "}
                    </h3>
                  </div>

                  <div className="drop-down-arrow">
                    <i className="bi bi-chevron-down "></i>
                  </div>
                </div>

                <div className="hover-line"></div>
                <div className="drop-box">
                  <ul className="drop-list-cont">
                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/collections/nisho-young"
                      >
                        View All
                      </a>
                    </li>

                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/collections/jeans-jhumka"
                      >
                        Jeans Jhumkha
                      </a>
                    </li>

                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/collections/gaon-ki-gori"
                      >
                        Gaon Ki Gori
                      </a>
                    </li>

                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/collections/valentines"
                      >
                        Afreen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/collections/kurtis"
                  >
                    Kurti | All
                  </a>
                </h3>
                <div className="hover-line"></div>
              </div>

              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/collections/long-kurtis"
                  >
                    Kurti | Long
                  </a>
                </h3>
                <div className="hover-line"></div>
              </div>
            </div>

            <div className="lh-s">
              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/collections/short-kurti"
                  >
                    Kurti | Short
                  </a>
                </h3>
                <div className="hover-line"></div>
              </div>

              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/collections/tops"
                  >
                    Tops
                  </a>
                </h3>
                <div className="hover-line"></div>
              </div>

              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/collections/dresses-1"
                  >
                    Dresses
                  </a>
                </h3>
                <div className="hover-line"></div>
              </div>

              <div className="lhc drop-lhc">
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <h3>
                      <a
                        className="header-link"
                        href="https://www.nishorama.com/collections/nisho-young"
                      >
                        Support
                      </a>{" "}
                    </h3>
                  </div>

                  <div className="drop-down-arrow">
                    <i className="bi bi-chevron-down "></i>
                  </div>
                </div>

                <div className="hover-line"></div>
                <div className="drop-box">
                  <ul className="drop-list-cont">
                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/pages/contact"
                      >
                        Contact Us
                      </a>
                    </li>

                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/pages/faqs"
                      >
                        FAQ's
                      </a>
                    </li>

                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/pages/shipping-policy"
                      >
                        Return & Exchange Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lhc drop-lhc">
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <h3>
                      <a
                        className="header-link"
                        href="https://www.nishorama.com/collections/nisho-young"
                      >
                        Boring Stuff
                      </a>{" "}
                    </h3>
                  </div>

                  <div className="drop-down-arrow">
                    <i className="bi bi-chevron-down "></i>
                  </div>
                </div>

                <div className="hover-line"></div>
                <div className="drop-box">
                  <ul className="drop-list-cont">
                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/policies/terms-of-service"
                      >
                        Privacy Policy
                      </a>
                    </li>

                    <li className="drop-list">
                      <a
                        className="drop-link"
                        href="https://www.nishorama.com/policies/privacy-policy"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lhc">
                <h3>
                  <a
                    className="header-link"
                    href="https://www.nishorama.com/pages/about-us"
                  >
                    About Us
                  </a>
                </h3>
                <div className="hover-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

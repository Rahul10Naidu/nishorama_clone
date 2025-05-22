import React, { useEffect, useRef, useState } from "react";
import "./profile.css";
import { useContext } from "react";
import { Context } from "../Context/Context";

const ProfileWindow = () => {
  const [intervalId, setIntervalId] = useState(null);
  const { screenWidth, isProfileActive, profileBoxActivation } =
    useContext(Context);
  const featureBoxRef = useRef(null);
  const profileCloseBtnRef = useRef(null);
  const profileOverlayRef = useRef(null);
  const profileContRef = useRef(null);
  const slidesRef = useRef(null);
  const dotContRef = useRef(null);

  // Feature Box Visibility when screen size is less than 576px
  // -------------------------------------------------------

  const fBoxVisible = () => {
    const featureBox = featureBoxRef.current;
    if (screenWidth < 576) {
      featureBox.classList.add("feature-box-visible");
    }
  };

  useEffect(() => {
    fBoxVisible();
  }, []);

  useEffect(() => {
    fBoxVisible();
  }, [screenWidth]);

  // ---------------------------------------------------------

  // Opening & Closing of Profile Box

  useEffect(() => {
    const profileCloseBtn = profileCloseBtnRef.current;
    const profileOverlay = profileOverlayRef.current;

    profileCloseBtn.addEventListener("click", function () {
      profileBoxActivation();
    });

    profileOverlay.addEventListener("click", function () {
      profileBoxActivation();

      document.addEventListener(
        "keyup",
        function (e) {
          if (e.key === "Escape") {
            profileBoxActivation();
          }
          console.log("Escape Key");
        },
        { once: true }
      );
    });

    // SLider Function in Box
    // ------------------------------------------------------------------------------------

    const slider = slidesRef.current;
    const dotCont = dotContRef.current;

    const slides = slider.querySelectorAll(".p-slide");
    const dots = dotCont.querySelectorAll(".dot");

    let i = 0;
    function kk() {
      i >= 2 ? (i = 0) : i++;
      slides.forEach((slide) => {
        Number(slide.id) === i && slide.classList.add("p-active");
        Number(slide.id) !== i && slide.classList.remove("p-active");
      });

      dots.forEach((dot) => {
        Number(dot.id) === i && dot.classList.add("dot-active");
        Number(dot.id) !== i && dot.classList.remove("dot-active");
      });
    }

    const id = setInterval(kk, 3000);

    setIntervalId(id);

    //------------------------------------------------------------------------------------------------

    return () => {
      profileCloseBtn.removeEventListener("click", function () {
        profileBoxActivation();
      });

      profileOverlay.removeEventListener("click", function () {
        profileBoxActivation();
      });

      document.removeEventListener("keyup", function (e) {
        if (e.key === "Escape") profileBoxActivation();
      });

      clearInterval(intervalId);
    };
  }, [isProfileActive]);

  return (
    <div>
      <div
        ref={profileContRef}
        className={`profile-container ${
          isProfileActive ? "profile-box-visible" : ""
        }`}
      >
        <div
          className={`profile-box container-fluid ${
            isProfileActive ? "profile-box-visible" : ""
          }`}
        >
          <button ref={profileCloseBtnRef} className="close-profile-btn btn">
            <i className="bi bi-x"></i>
          </button>

          {/* Section 1 */}
          <div className="pf--2 pf--section-1 fcc">
            <div className="pf-s1-icons fcc">
              <img
                src="https://assets.gokwik.co/uploads/1739513885382_nisho transparent bg.png"
                alt="Nishorama Logo"
                loading="lazy"
                className="pf-s1-img pf-nish-logo"
              />

              <img
                src="https://assets.gokwik.co/images/powered_by_kp_4px.svg"
                alt="Kwik Pass Logo"
                loading="lazy"
                className="pf-s1-img pf-kwik-logo"
              />
            </div>
            <div className="pf-s1-text fcc">
              <h2 className="pf-s1-heading">Login to avail best offers!</h2>
            </div>
            <div className="pf-s1-features fc">
              <div
                ref={featureBoxRef}
                className="pf-s1-feature-box first-box feature-box-visible active-feature-box"
              >
                <div className="pf-s1-features-img-box fcc">
                  <img
                    src="https://pdp.gokwik.co/kwikpass/assets/icons/carousel_icon.svg"
                    alt="star_image"
                    loading="lazy"
                  />
                </div>
                <div ref={slidesRef} className="p-h4-cont">
                  <h4 id="0" className="p-slide">
                    Customer First
                  </h4>
                  <h4 id="1" className="p-slide">
                    Transparent
                  </h4>
                  <h4 id="2" className="p-slide">
                    Innovative
                  </h4>
                </div>
              </div>
              <div
                ref={dotContRef}
                className="dots first-box feature-box-visible active-feature-box"
              >
                <div id="0" className="dot"></div>
                <div id="1" className="dot"></div>
                <div id="2" className="dot"></div>
              </div>
              <div className="pf-s1-feature-box">
                <div className="pf-s1-features-img-box fcc">
                  <img
                    src="https://pdp.gokwik.co/kwikpass/assets/icons/carousel_icon.svg"
                    alt="star_image"
                    loading="lazy"
                  />
                </div>
                <h4>Customer First</h4>
                <p>Putting you in the center</p>
              </div>
              <div className="pf-s1-feature-box">
                <div className="pf-s1-features-img-box">
                  <img
                    src="https://pdp.gokwik.co/kwikpass/assets/icons/carousel_icon.svg"
                    alt="star_image"
                    loading="lazy"
                  />
                </div>
                <h4>Transparent</h4>
                <p>Honest from the inside outr</p>
              </div>
              <div className="pf-s1-feature-box">
                <div className="pf-s1-features-img-box">
                  <img
                    src="https://pdp.gokwik.co/kwikpass/assets/icons/carousel_icon.svg"
                    alt="star_image"
                    loading="lazy"
                  />
                </div>
                <h4>Innovative</h4>
                <p>Getting the absolute best for you</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="pf--2 pf--section-2 fcc">
            <div className="pf-s2-mainbox fcc">
              <h3>
                WELCOME TO THE <br />
                HOUSE OF NISHORAMA
              </h3>
              <div className="pf-s2-input-box fcc">
                <input
                  type="text"
                  min="10"
                  placeholder="Enter Mobile Number"
                  className="pf-s2-input"
                  required
                />
              </div>

              <div className="pf-s2-check-box">
                <input type="checkbox" id="pf-checkbox" />
                <label htmlFor="pf-checkbox">
                  Notify me with offers & other updates
                </label>
              </div>

              <div className="pf-s2-submit-box">
                <button className="pf-submit-btn btn">SUBMIT</button>
              </div>
            </div>

            <footer className="pf-s2-footer">
              <p>I accept that I have read & understood GoKwik's</p>
              <p>
                <a href="https://www.gokwik.co/data-policy">Privacy Policy</a>{" "}
                and <a href="https://www.gokwik.co/terms">T&Cs</a>
              </p>
            </footer>
          </div>
        </div>
        <div
          ref={profileOverlayRef}
          className={`profile-overlay ${
            isProfileActive ? "profile-box-visible" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ProfileWindow;

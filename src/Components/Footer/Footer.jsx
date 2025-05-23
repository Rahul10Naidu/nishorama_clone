import React, { useContext, useEffect, useRef, useState } from "react";
import "./footer.css";
import { Context } from "../Context/Context";

let bodyW = document.body.getBoundingClientRect().width;

const Footer = () => {
  const { rotate, getSize } = useContext(Context);
  const [screenSize, setScreenSize] = useState(getSize());

  const innerFooterContRef = useRef(null);

  let footerULRef = useRef(null);
  let footerQuickULRef = useRef(null);
  let footerDetailsRef = useRef(null);

  function resized() {
    const footerUL = footerULRef.current;
    const footerQuickUL = footerQuickULRef.current;
    const footerDetails = footerDetailsRef.current;
    setScreenSize(getSize);

    if (screenSize < 576) {
      footerUL.classList.add("f--ul-menu-hidden");
      footerQuickUL.classList.add("f--ul-menu-hidden");
      footerDetails.classList.add("f--ul-menu-hidden");
    }
  }

  useEffect(() => {
    resized();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resized);

    return () => {
      window.removeEventListener("resize", resized);
    };
  }, [screenSize]);

  // Redefined Arrow Function ------------------------------------------------------

  function rev(e) {
    let uniqueId = e.currentTarget.dataset.id;

    const arrows =
      innerFooterContRef.current.querySelectorAll(".f--arrow-down");

    let targetArrow;

    arrows.forEach((arrow) => {
      if (arrow.dataset.id === uniqueId) {
        targetArrow = arrow;
      }
      return targetArrow;
    });

    if (screenSize < 576) {
      targetArrow.classList.toggle("arrow-reverse");
    }
  }

  function showMenu(e) {
    let uniqueId = e.currentTarget.dataset.id;

    // console.log(uniqueId);

    const menus =
      innerFooterContRef.current.querySelectorAll(".f--sub-section");

    let targetMenu;

    menus.forEach((menu) => {
      if (menu.dataset.id === uniqueId) {
        targetMenu = menu;
      }
      return targetMenu;
    });

    if (screenSize < 576) {
      targetMenu.classList.toggle("f--ul-menu-hidden");
    }
  }

  return (
    <div className="outer-footer-cont">
      <div className="footer container-fluid ">
        <div ref={innerFooterContRef} className="inner-footer-container d-flex">
          <div className="footer-3 f--details col-xl-6 col-lg-6 col-md-7 col-sm-12 col-xs-12">
            <button
              data-id="1"
              className={`f--subH-btn f--btn`}
              onClick={(e) => {
                // footerDetailsMenu();
                rev(e);
                showMenu(e);
              }}
            >
              <p className="f--sub-heading">
                Contact{" "}
                <span
                  data-id="1"
                  className={`f--arrow-down`}
                  //${isRotated ? "arrow-reverse" : ""}`
                >
                  <i className="bi bi-chevron-down"></i>
                </span>
              </p>
            </button>
            <div
              ref={footerDetailsRef}
              data-id="1"
              className="f--details-cont f--sub-section"
            >
              <p>
                <span className="f--details-sub-heading">
                  Wholesale branch Address:{" "}
                </span>
                205, 2nd Floor, Paras Gopal, Senapati Bapat Marg, Opp. Bhoomi
                Plaza, Dadar West, MUMBAI - 400028
              </p>
              <p>
                <span className="f--details-sub-heading">
                  Corporate Office Address:{" "}
                </span>
                1143, Lower Ground Floor, Rustomjee Eaze Zone Mall, Sunder
                Nagar, Malad West, MUMBAI - 400064
              </p>

              <p className="f--details-p">
                <span className="f--details-sub-heading">Email: </span>

                <a
                  className="f--details-links"
                  href="mailto:support@nishorama.com"
                  target="_blank"
                >
                  support@nishorama.com
                </a>
              </p>

              <p className="f--details-p">
                <span className="f--details-sub-heading">Mobile: </span>
                <a
                  className="f--details-links"
                  href="tel:+91 82913 59775"
                  target="_blank"
                >
                  +91 82913 59775
                </a>
              </p>

              <p>
                <span className="f--details-sub-heading">Opening Hours: </span>
                Mon to Sat: 10 AM - 8:30 PM
              </p>

              <div className="f--details-btn-cont d-flex gap-5">
                <div className="f--details-btn-holder d-flex align-items-center justify-content-center">
                  <a href="https://www.instagram.com/nishorama/">
                    <button className="f--details-btn border-0">
                      <i className="bi bi-instagram"></i>
                    </button>
                  </a>
                </div>

                <div className="f--details-btn-holder d-flex align-items-center justify-content-center">
                  <a href="https://www.youtube.com/@Nishorama-co">
                    <button className="f--details-btn border-0">
                      <i className="bi bi-youtube"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-3 f--quick-links col-xl-2 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <button
              className="f--subH-btn"
              data-id="2"
              onClick={(e) => {
                // footerQuickMenu();
                rev(e);
                showMenu(e);
              }}
            >
              <p className="f--l f--sub-heading">
                Quick Links{" "}
                <span data-id="2" className={`f--arrow-down `}>
                  <i className="bi bi-chevron-down"></i>
                </span>
              </p>
            </button>
            <ul
              data-id="2"
              ref={footerQuickULRef}
              className="f--ul f--sub-section"
            >
              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/"
                  target="_blank"
                >
                  Home
                </a>
              </li>

              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/pages/about-us"
                  target="_blank"
                >
                  About Us
                </a>
              </li>

              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/pages/contact"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>

              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/pages/bulk-order"
                  target="_blank"
                >
                  Bulk Orders
                </a>
              </li>

              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/pages/faqs"
                  target="_blank"
                >
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          <div
            data-id="3"
            className="footer-3 f--help col-xl-2 col-lg-4 col-md-4 col-sm-12 col-xs-12"
          >
            <button
              data-id="3"
              className="f--subH-btn"
              onClick={(e) => {
                // footerMenu();
                rev(e);
                showMenu(e);
              }}
            >
              <p className="f--l f--sub-heading">
                Help{" "}
                <span data-id="3" className="f--arrow-down">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </p>
            </button>

            <ul
              data-id="3"
              ref={footerULRef}
              className="f--ul f--ul-help f--sub-section"
            >
              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/pages/privacy-policy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>

              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/pages/refund-policy"
                  target="_blank"
                >
                  Shipping & Delivery Policy
                </a>
              </li>

              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/pages/copy-of-return-and-exchange-policy"
                  target="_blank"
                >
                  Return & Exchange Policy
                </a>
              </li>

              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/pages/terms-of-service"
                  target="_blank"
                >
                  Terms of Service
                </a>
              </li>

              <li className="f--l">
                <a
                  className="f--links"
                  href="https://www.nishorama.com/apps/return_prime"
                  target="_blank"
                >
                  Exchange/Return My Order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

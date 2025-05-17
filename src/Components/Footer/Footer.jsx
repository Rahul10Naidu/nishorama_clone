import React, { useEffect, useRef, useState } from "react";
import "./footer.css";

const getSize = () => {
  return window.innerWidth;
};

const Footer = () => {
  const [screenSize, setScreenSize] = useState(getSize());

  let footerULRef = useRef(null);
  let footerQuickULRef = useRef(null);
  let footerDetailsRef = useRef(null);
  let detArrowRef = useRef(null);
  let quickArrowRef = useRef(null);
  let helpArrowRef = useRef(null);

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

  function footerMenu() {
    const footerUL = footerULRef.current;
    const helpArrow = helpArrowRef.current;
    if (screenSize < 576) {
      footerUL.classList.toggle("f--ul-menu-hidden");
      helpArrow.classList.toggle("arrow-reverse");
    }
  }

  function footerQuickMenu() {
    const footerQuickUL = footerQuickULRef.current;
    const quickArrow = quickArrowRef.current;
    if (screenSize < 576) {
      footerQuickUL.classList.toggle("f--ul-menu-hidden");
      quickArrow.classList.toggle("arrow-reverse");
    }
  }

  function footerDetailsMenu() {
    const footerDetails = footerDetailsRef.current;
    const detArrow = detArrowRef.current;
    if (screenSize < 576) {
      footerDetails.classList.toggle("f--ul-menu-hidden");
      detArrow.classList.toggle("arrow-reverse");
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

  return (
    <div className="outer-footer-cont">
      <div className="footer container-fluid ">
        <div className="inner-footer-container d-flex">
          <div className="footer-3 f--details col-xl-6 col-lg-6 col-md-7 col-sm-12 col-xs-12">
            <button
              className="f--subH-btn"
              onClick={() => {
                footerDetailsMenu();
              }}
            >
              <p className="f--sub-heading">
                Contact{" "}
                <span ref={detArrowRef} className="f--arrow-down">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </p>
            </button>
            <div ref={footerDetailsRef} className="f--details-cont">
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
              onClick={() => {
                footerQuickMenu();
              }}
            >
              <p className="f--l f--sub-heading">
                Quick Links{" "}
                <span ref={quickArrowRef} className="f--arrow-down">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </p>
            </button>
            <ul ref={footerQuickULRef} className="f--ul">
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

          <div className="footer-3 f--help col-xl-2 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <button
              className="f--subH-btn"
              onClick={() => {
                footerMenu();
              }}
            >
              <p className="f--l f--sub-heading">
                Help{" "}
                <span ref={helpArrowRef} className="f--arrow-down">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </p>
            </button>

            <ul ref={footerULRef} className="f--ul f--ul-help">
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

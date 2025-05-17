import React from "react";
import Card3 from "./Card3";
import "./ny.css";
import img1 from "../img/section4/img4-1.webp";
import img2 from "../img/section4/img4-2.webp";

const Afreen = () => {
  return (
    <div>
      <div className="section-title s2-title-section text-center">
        <h2 className="section-heading">Afreen</h2>
      </div>

      <div className="section3--content container-fluid d-flex mt-5">
        <Card3
          link={`https://www.nishorama.com/products/valentina-bagh-print-maxi-corset-dress`}
          img1={img1}
          img2={img2}
          productName="Simran Halterneck Corset Kurti"
          productPrice="Rs. 1695.00"
        />

        <Card3
          link={`https://www.nishorama.com/products/lily-dabu-maxi-corset-dress`}
          img1={img1}
          img2={img2}
          productName="Simran Halterneck Corset Kurti"
          productPrice="Rs. 1695.00"
        />

        <Card3
          link={`https://www.nishorama.com/products/poppy-mini-chikankari-corset-dress`}
          img1={img1}
          img2={img2}
          productName="Simran Halterneck Corset Kurti"
          productPrice="Rs. 1695.00"
        />

        <Card3
          link={`https://www.nishorama.com/products/kaya-kalamkari-maxi-tie-up-backless-dress`}
          img1={img1}
          img2={img2}
          productName="Simran Halterneck Corset Kurti"
          productPrice="Rs. 1695.00"
        />
      </div>

      <div className="s3-shopall-section d-flex align-item-center justify-content-center mt-5 ">
        <a
          className="s3-shopall-link"
          href="https://www.nishorama.com/collections/nisho-young"
          target="_blank"
        >
          <button className="s3-shopall btn btn-outline-dark border-1">
            SHOP ALL PRODUCTS
          </button>
        </a>
      </div>
    </div>
  );
};

export default Afreen;

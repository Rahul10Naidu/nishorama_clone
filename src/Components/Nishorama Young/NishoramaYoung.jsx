import React from "react";
import Card3 from "./Card3";
import "./ny.css";
import img1 from "../img/section3/img1-1.webp";
import img2 from "../img/section3/img1-2.webp";

const NishoramaYoung = () => {
  return (
    <div>
      <div className="section-title s2-title-section text-center">
        <h2 className="section-heading">Nishorama Young</h2>
      </div>

      <div className="section3--content container-fluid d-flex mt-5">
        <Card3
          link={`https://www.nishorama.com/products/dabu-halter-neck-corset-kurti`}
          img1={img1}
          img2={img2}
          productName="Simran Halterneck Corset Kurti"
          productPrice="Rs. 1695.00"
        />

        <Card3
          link={`https://www.nishorama.com/products/aditi-tshirt-kurti-copy`}
          img1={img1}
          img2={img2}
          productName="Simran Halterneck Corset Kurti"
          productPrice="Rs. 1695.00"
        />

        <Card3
          link={`https://www.nishorama.com/products/kum-kum-deep-back-bagh-print-short-kurti`}
          img1={img1}
          img2={img2}
          productName="Simran Halterneck Corset Kurti"
          productPrice="Rs. 1695.00"
        />

        <Card3
          link={`https://www.nishorama.com/products/sasha-deep-black-kurti-copy`}
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

export default NishoramaYoung;

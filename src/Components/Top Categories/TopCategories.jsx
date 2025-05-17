import React from "react";
import Card2 from "./Card2";
import "./TC.css";
import img1 from "../img/section2/img1.webp";
import img2 from "../img/section2/img2.webp";
import img3 from "../img/section2/img3.webp";
import img4 from "../img/section2/img4.webp";

const TopCategories = () => {
  return (
    <div className="top-categories">
      <div className="section-title s2-title-section text-center">
        <h2 className="section-heading">TOP CATEGORIES</h2>
      </div>

      <div className="section2--content container-fluid d-flex mt-5">
        <Card2
          img={img1}
          alt={"Nishorama_Young"}
          link={`https://www.nishorama.com/collections/nisho-young`}
        />

        <Card2
          img={img2}
          alt={"Nishorama_Young"}
          link={`https://www.nishorama.com/collections/kurtis`}
        />

        <Card2
          img={img3}
          alt={"Nishorama_Young"}
          link={`https://www.nishorama.com/collections/dresses`}
        />

        <Card2
          img={img4}
          alt={"Nishorama_Young"}
          link={`https://www.nishorama.com/collections/nisho-young`}
        />
      </div>
    </div>
  );
};

export default TopCategories;

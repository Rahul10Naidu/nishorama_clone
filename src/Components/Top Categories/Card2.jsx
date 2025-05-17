import React from "react";
import "./TC.css";

const Card2 = (props) => {
  return (
    <div className="card-content-2">
      <a href={props.link} target="_blank">
        <img className="s2-img" src={props.img} alt={props.alt} />
      </a>
    </div>
  );
};

export default Card2;

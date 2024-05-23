import React from "react";
import { Link } from "react-router-dom";

const WhatWeDoSub = ({ item }) => {
  return (
    <Link
      to={item.link}
      className="col-lg-4 col-md-6 d-flex  text-black d-flex justify-content-center"
    >
      <div className="icon-box">
        <div className="icon">
          <i className={item.icon}></i>
        </div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </Link>
  );
};

export default WhatWeDoSub;

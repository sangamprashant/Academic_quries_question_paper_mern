import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { path, image, text } = props;
  return (
    <Link
      className="m-2 rounded portfolio-item filter-app wow fadeInUp"
      to={path}
    >
      <div className="portfolio-wrap">
        <figure>
          <img src={image} width="100%" loading="lazy" />
        </figure>
        <div className="portfolio-info">
          <strong>
            <Link to={path} className="text-dark">
              {text}
            </Link>
          </strong>
        </div>
      </div>
    </Link>
  );
};

export default Card;

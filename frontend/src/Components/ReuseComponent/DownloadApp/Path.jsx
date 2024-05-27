import React from "react";
import { Link } from "react-router-dom";

const Path = ({ image, link }) => {
  return (
    <Link to={link} target="_blank" className="w-25 py-2  rounded-5 shadow">
      <div>
        <img
          className="object-fit-contain"
          src={image}
          width={"100%"}
          alt="image"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default Path;

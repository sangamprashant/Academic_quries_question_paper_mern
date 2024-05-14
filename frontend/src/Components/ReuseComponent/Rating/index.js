import React, { useState, useEffect } from "react";
import "./Rating.css";
import { SERVER } from "../../../config/domain";
import RatingDisplay from "./RatingDisplay";

const Rating = () => {
  const [ratingData, setRatingData] = useState(
    JSON.parse(localStorage.getItem("ratingAvg")) || null
  );

  const fetchReviewsStars = async () => {
    try {
      const res = await fetch(`${SERVER}/api/public/review/average`);
      const data = await res.json();
      localStorage.setItem("ratingAvg", JSON.stringify(data));
      setRatingData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchReviewsStars();
  }, []);

  return (
    <div>
      <RatingDisplay data={ratingData} />
    </div>
  );
};

export default Rating;

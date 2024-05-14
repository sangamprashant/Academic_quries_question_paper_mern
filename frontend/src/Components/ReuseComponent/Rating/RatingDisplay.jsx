import React from "react";
import { Link } from "react-router-dom";

const RatingDisplay = ({ data }) => {
  const progressData = data.starsPercentage;
  const averageStar = data.averageStars;

  // Set the total number of stars you want to display
  const totalStars = 5;

  // Generate an array with data for all stars, initializing percentage to 0
  const starsData = Array.from({ length: totalStars }, (_, index) => ({
    star: index + 1,
    percentage: 0,
  }));

  // Update the percentages for stars that have data
  progressData?.forEach((item) => {
    const index = item.star - 1;
    if (index >= 0 && index < totalStars) {
      starsData[index].percentage = item.percentage;
    }
  });

  // Reverse the starsData array
  const reversedStarsData = starsData.reverse();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <div className="col-md-4 col-sm-5 d-flex flex-column justify-content-center align-items-center">
                    <button className="rating_circle">
                      {averageStar?.toFixed(1)}
                    </button>
                    <div>
                      <div className="stars-outer mt-4 ">
                        <div
                          className="stars-inner"
                          style={{ width: `${(averageStar / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Link to="/reviews" className="btn btn-outline-dark">
                        Reviews
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="w-100">
                  <table className="w-100">
                    {reversedStarsData?.map((item, index) => (
                      <tr key={index}>
                        <td className="w-100" style={{ padding: "15px" }}>
                          <div className="progress" style={{ height: "10px" }}>
                            <div
                              className="progress-bar dark"
                              style={{
                                width: `${item.percentage}%`,
                                height: "10px",
                              }}
                            ></div>
                          </div>
                        </td>
                        <td>{item.star}</td>
                      </tr>
                    ))}
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RatingDisplay;

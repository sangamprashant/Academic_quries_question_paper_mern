import React, { useState } from "react";
import { Images } from "./images";
import { AppContext } from "../../../context/AppContext";
import { SERVER } from "../../../config/domain";

const WriteAReview = () => {
  const { handleModel } = React.useContext(AppContext);
  const [selectedStars, setSelectedStars] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [image, setImage] = useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleStarClick = (stars) => {
    setSelectedStars(stars);
  };

  const handleSubmitReview = async () => {
    if (!name.trim() || !email.trim()) {
      return handleModel(
        <p className="text-danger">Name and email are required</p>
      );
    }
    if (selectedStars === 0) {
      return handleModel(
        <p className="text-danger">Please select the star(s)</p>
      );
    }

    setLoading(true)

    try {
      const response = await fetch(`${SERVER}/api/public/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          feedback,
          image,
          stars: selectedStars,
        }),
      });

      if (response.ok) {
        handleModel(
          <p className="text-success">Review submitted successfully!</p>
        );
        window.localStorage.setItem("review", true);
      } else {
        handleModel(
          <p className="text-danger">
            Failed to submit review. Please try again.
          </p>
        );
      }
    } catch (error) {
      console.error("API error:", error);
      handleModel(
        <p className="text-danger">
          An error occurred. Please try again later.
        </p>
      ) 
    }
    finally {
        setLoading(false)
    }
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <div className="container mt-4">
        <div className="p-4 text-center d-flex justify-content-center flex-column align-items-center">
          <div className="col-md-7 text-warning rounded-2">
            <table className="table table-borderless">
              <tr className="w-100">
                <td>
                  <input
                    className="form-control"
                    placeholder="Your Email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    placeholder="Your Name.."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
            </table>

            <table className="table table-borderless">
              <tr className="w-100">
                <td>
                  <textarea
                    className="form-control"
                    placeholder="Write your feedback.."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  ></textarea>
                </td>
              </tr>
            </table>
            <table className="table table-borderless">
              <tr className=" ">
                <td className="d-flex justify-content-center gap-3">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      key={stars}
                      className={`btn btn-white`}
                      onClick={() => handleStarClick(stars)}
                      style={{ width: "50px" }}
                    >
                      {stars <= selectedStars ? "⭐️" : "★"}
                    </button>
                  ))}
                </td>
              </tr>
            </table>
            <table className="table table-borderless">
              <tr className="w-100">
                <td className="d-flex justify-content-center gap-3">
                  <div>
                    {Object.keys(Images).map((key, index) => (
                      <img
                        key={key}
                        src={`/images${Images[key]}`}
                        alt={`Image ${key}`}
                        height={"70"}
                        width={"70"}
                        className={`${image === index ? "border" : ""}`}
                        onClick={() => setImage(index)}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            </table>
            <table className="table table-borderless">
              <tr className="w-100">
                <td className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-secondary"
                    disabled={loading}
                    onClick={handleSubmitReview}
                  >
                    {loading ? "Please Wait" : "Submit Review"}
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteAReview;

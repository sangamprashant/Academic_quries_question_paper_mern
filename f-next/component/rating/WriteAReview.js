"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Images } from "./Images";

function WriteAReview() {
  const [selectedStars, setSelectedStars] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [image, setImage] = useState(0)

  const handleStarClick = (stars) => {
    setSelectedStars(stars);
  };

  const handleSubmitReview = async () => {
    if (!name.trim() || !email.trim()) {
      return toast.info("Name and email are required");
    }
    if (selectedStars === 0) {
      return toast.info("Please select the star(s)");
    }

    try {
      const response = await fetch("/api/public/review", {
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
        // Successfully submitted
        toast.success("Review submitted successfully!");
        window.localStorage.setItem("review",true)
      } else {
        // Failed to submit
        toast.error("Failed to submit review. Please try again.");
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error("An error occurred. Please try again later.");
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
                        className={`${image===index?"border":""}`}
                        onClick={()=>setImage(index)}
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
                    onClick={handleSubmitReview}
                  >
                    Submit Review
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteAReview;

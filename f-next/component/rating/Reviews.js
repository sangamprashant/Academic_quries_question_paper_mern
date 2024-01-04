import { fetchReviews } from "@/api_calls";
import { Images } from "./Images";

// Function to render stars based on count
const renderStars = (count) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= count ? "text-warning" : "text-muted"}>
        &#9733;
      </span>
    );
  }
  return stars;
};

async function Reviews() {
  const reviews = await fetchReviews();
  return (
    <div className="row">
      {reviews.map((review) => (
        <div key={review._id} className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title d-flex justify-content-between">
                <div className="d-flex">
                  <img src={`/images${Images[review.image]}`} alt="" width="50px" height="50px" className=" rounded-circle object-fit-cover" />
                  <div >
                    <h4 style={{ padding: "0px", margin: "0px" }}>{review.name}</h4>
                    <p style={{ padding: "0px", margin: "0px" }}>
                      {review.email}
                    </p>
                  </div>
                </div>

                <h3 className="card-title ">{renderStars(review.stars)}</h3>
              </div>
              <p className="card-text">{review.feedback}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;

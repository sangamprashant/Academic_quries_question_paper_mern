import { WriteAReview } from "@/component";
import "./REview.css"

function Page() {
  return (
    <div style={{ marginTop: "70px" }}>
      <div className="container mt-4 pt-5">
        <div className=" p-4 text-center d-flex justify-content-center flex-column align-items-center">
          <div className="bg-secondary col-md-7 text-warning rounded-2 py-3 position-relative">
            <h5>Share Your Feedback</h5>
            <h1 className="mb-3"><strong>Write a Review</strong></h1>
            <h1 className="curved-stars">
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
            </h1>
          </div>
        </div>
          <WriteAReview />
      </div>
    </div>
  );
}

export default Page;

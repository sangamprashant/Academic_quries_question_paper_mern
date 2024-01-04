"use client";
import Link from "next/link";

function RatingBtn() {
  const render = window?.localStorage.getItem("review");
  return (
    <>
      {!render && (
        <div className="rating-btn">
          <Link
            href="write-review"
            passHref
            className="btn btn-outline-dark rounded-5"
          >
            Write a Review
          </Link>
        </div>
      )}
    </>
  );
}

export default RatingBtn;

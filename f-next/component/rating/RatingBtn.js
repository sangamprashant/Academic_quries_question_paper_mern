"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function RatingBtn() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const render = isClient && window?.localStorage.getItem("review");

  return (
    <>
      {!render && (
        <div className="rating-btn">
          <Link href="write-review" className="btn btn-outline-dark rounded-5">
            Write a Review
          </Link>
        </div>
      )}
    </>
  );
}

export default RatingBtn;

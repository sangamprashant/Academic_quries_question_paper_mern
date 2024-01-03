"use client"
import { useEffect } from "react";

function CountUserPost() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const postRequestSent = window.localStorage.getItem("postRequestSent");
      if (!postRequestSent) {
        fetch("/api/count/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            window.localStorage.setItem("postRequestSent", "true");
          })
          .catch((error) => {
            console.error("Failed to save visitor count to the backend:", error);
          });
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Clear the flag after 10 seconds
      setTimeout(() => {
        window.localStorage.removeItem("postRequestSent");
      }, 10000);
    }
  }, []);
}

export default CountUserPost;

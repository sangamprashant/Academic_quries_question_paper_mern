import React, { useEffect } from "react";
import "./css/PageNotFound.css";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found-background">
      <div className="not-found-container">
        <h1 className="not-found-text">404 - Page Not Found</h1>
        <button
          className="go-to-home"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Go to Home{" "}
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;

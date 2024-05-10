import React, { useEffect } from "react";
import "./css/PageNotFound.css";
import { Result } from "antd";
import { Link } from "react-router-dom";
function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found-background text-white">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link className="btn btn-primary go-to-home" to="/">
            Go to Home{" "}
          </Link>
        }
      />
    </div>
  );
}

export default PageNotFound;

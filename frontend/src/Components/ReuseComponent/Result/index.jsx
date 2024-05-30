import React, { useEffect } from "react";
import { Result } from "antd";

const ResultPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="not-found-background text-white">
      <Result
        {...props}
      />
    </div>
  );
};

export default ResultPage;

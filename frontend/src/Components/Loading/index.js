import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const LoadingComponent = () => {
  return (
    <div className="d-flex justify-content-center">
      <Loading loading={4} />
    </div>
  );
};

export default LoadingComponent;

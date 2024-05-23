import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { whatWeDoItems } from "../../../Strings/Strings";
import "./WhatWeDo.css";
import WhatWeDoSub from "./WhatWeDoSub";

function WhatWeDo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="what-we-do" className="what-we-do">
        <div className="container">
          <div className="section-title">
            <h2>{whatWeDoItems.sectionTitle}</h2>
            <p>{whatWeDoItems.opportunityText}</p>
          </div>
          <div className="row justify-content-center">
            {whatWeDoItems.items.map((item, index) => (
              <WhatWeDoSub item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;

import React, { useEffect } from "react";
import "../../css/AboutUs.css";
import pic from "../../img/logo aq.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { aboutString } from "../../../Strings/Strings";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <LazyLoadImage
                height="400"
                width="100%"
                src={pic}
                className="img-fluid"
                alt=""
                loading="lazy"
                effect="blur"
                placeholderSrc={pic}
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>{aboutString.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: aboutString.content }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

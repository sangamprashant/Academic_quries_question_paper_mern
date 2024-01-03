import React from "react";
import "./WhatWeDo.css";
import Link from "next/link";
import SubWhatWeDo from "./SubWhatWeDo";

function WhatWeDo() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="what-we-do" className="what-we-do">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="">What We Do</h2>
            <p>"Kindly grant us the opportunity to elucidate our endeavors."</p>
          </div>

          <div className="row  justify-content-around">
            <SubWhatWeDo
              title={`24/7 Available`}
              desc={`Around-the-clock availability for all your needs. With our
                  24/7 support, you can count on us day or night, ensuring
                  prompt assistance and reliable service at any hour.`}
              pathTo={"#"}
              icon={"clock"}
            />
            <SubWhatWeDo
              title={`Question Paper`}
              desc={`Embrace the Questions, Always Open, Always Here for You`}
              pathTo={"#"}
              icon={"file"}
            />
            <SubWhatWeDo
              title={`Contribute Here`}
              desc={` Your contributions fuel our success. Join us and be part of
                    a community that values your input.`}
              pathTo={"/contribute"}
              icon={"upload"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;

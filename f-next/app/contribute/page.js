"use client";
import { ContributeNotes, ContributePaper } from "@/component";
import React, { useState } from "react";

function Page() {
  const [active, setActive] = useState(0);

  const handelActive = (num) => {
    setActive(num);
  };

  const renderContent = () => {
    switch (active) {
      case 0:
        return <ContributePaper />;
      case 1:
        return <ContributeNotes />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{ marginTop: "70px" }}>
        <section id="contact" className="contact section-bg">
          <div className="container">
            <div className="section-title">
              <h1>CONTRIBUTE</h1>
              <h2>{active === 0 ? "Your Question Paper" : "Subject Notes"}</h2>
              <p>Your contribution is valuable to us :)</p>
              <p>Format should be in PDF!</p>
              <div className="d-flex justify-content-center gap-1 mt-2">
                <button
                  className={`btn btn-${
                    active === 0 ? "primary" : "outline-secondary"
                  }`}
                  onClick={() => handelActive(0)}
                >
                  Paper
                </button>
                <button
                  className={`btn btn-${
                    active === 1 ? "primary" : "outline-secondary"
                  }`}
                  onClick={() => handelActive(1)}
                >
                  Notes
                </button>
              </div>
            </div>
            {renderContent()}
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;

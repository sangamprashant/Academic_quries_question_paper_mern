import React, { useEffect } from "react";
import "../../css/PaperOpen.css";
import { useLocation } from "react-router-dom";
import PageNotFound from "../../PageNotFound";

function PaperOpen() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { paperData } = location.state || {};

  return (
    <div style={{ marginTop: "70px" }}>
      <div className="">
        {!paperData ? (
          <PageNotFound />
        ) : (
          <>
            <section id="portfolio" className="portfolio">
              <div className="container">
                <div className="section-title">
                  <h2>Thank you for your visit</h2>
                  <div className="card-body">
                    <h5 className="card-title">Subject: {paperData.subject}</h5>
                    <p className="card-text">Course: {paperData.course}</p>
                    <p className="card-text">Year: {paperData.year}</p>
                    <p className="card-text">Uploaded By: {paperData.name || "Admin"}</p>
                    <p className="card-text">College: {paperData.type}</p>
                  </div>
                </div>
                <div className="row portfolio-container">
                  {paperData && paperData.valid && (
                    <div className="card col-md-12 my-3 px-2">
                      <iframe
                        className="card-img-top"
                        src={`${paperData.pdfPath}`}
                        alt="Card image cap"
                        style={{ height: "700px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default PaperOpen;

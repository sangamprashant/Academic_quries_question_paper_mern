import React, { useEffect } from "react";
import "../css/PaperOpen.css";
import { useLocation } from "react-router-dom";

function PaperOpen() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { paperData } = location.state || {};

  return (
    <div className="paper-open-container">
      <div>
        <h2>{paperData ? paperData.subject : "No Subject"}</h2>
      </div>
      <iframe
        title={paperData ? paperData.subject : "No Subject"}
        className="pdf-iframe"
        src={paperData ? paperData.pdfPath : "No Subject"}
      />
    </div>
  );
}

export default PaperOpen;

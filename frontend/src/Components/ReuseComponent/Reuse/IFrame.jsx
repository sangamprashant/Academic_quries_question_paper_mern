import React from "react";
import { Browser } from "@capacitor/browser";

const IFrame = ({ pdfLink, ...props }) => {
  const showPDF = async () => {
    if (!pdfLink) {
      alert("No link found. Please try again later.");
      return;
    }

    const downloadUrl = pdfLink;
    await Browser.open({ url: downloadUrl });
  };

  if (!pdfLink) return <p>No PDF link provided. Please try again later.</p>;

  return (
    <>
      <iframe
        src={`https://docs.google.com/gview?url=${encodeURIComponent(
          pdfLink
        )}&embedded=true`}
        {...props}
        title="PDF Viewer"
      ></iframe>
      <div className="text-center mt-2">
        <p>
          <sub className="text-danger">
            The PDF might not open correctly. You can download it instead.
          </sub>
        </p>
        <button type="button" className="btn btn-primary" onClick={showPDF}>
          Download the PDF
        </button>
      </div>
    </>
  );
};

export default IFrame;

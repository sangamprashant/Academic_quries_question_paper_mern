import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS if needed

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Your custom CSS (if any)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        // console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        // console.log('SW registration failed: ', registrationError);
      });
  });
}

ReactDOM.render(<App />, document.getElementById("root"));

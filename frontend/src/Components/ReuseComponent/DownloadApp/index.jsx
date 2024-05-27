import React from "react";
import AppLinkForm from "./AppLinkForm";
import Mobile from "./Mobile";
import Path from "./Path";
import axios from "axios";
import { SERVER } from "../../../config/domain";

const DownloadApp = () => {
  const [links, setLinks] = React.useState(
    JSON.parse(localStorage.getItem("downloadLinks")) || []
  );
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    fetchAppLinks();
  }, []);

  return (
    <div style={{ paddingTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Download Our App</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-muted">
                <h5>Access question papers anytime, anywhere</h5>
                <div className="col-md-12">
                  <AppLinkForm />
                </div>
              </div>
              <div className="row d-flex justify-content-center gap-3 mt-4 text-muted">
                <span className="w-100 text-center">
                  {<Mobile height={20} />}Try the Academic Queries mobile app
                </span>
                <div className="row d-flex justify-content-center gap-3 mt-1">
                  {links.length > 0 &&
                    links.map((data, index) => (
                      <Path key={index} link={data.Path} image={data.Image} />
                    ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center mt-3">
              <img src="download.png" width="90%" alt="Download" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  async function fetchAppLinks() {
    try {
      const response = await axios.get(`${SERVER}/api/app-links/get`);
      if (response.status === 200) {
        localStorage.setItem("downloadLinks", JSON.stringify(response.data));
        setLinks(response.data);
      }
    } catch (error) {
      // console.log({ error });
    }
  }
};

export default DownloadApp;

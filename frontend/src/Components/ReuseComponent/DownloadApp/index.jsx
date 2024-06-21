import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div style={{ paddingTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            ref={sectionRef}
          >
            <h2>Download Our App</h2>
          </motion.div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <motion.div
                className="text-muted"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                transition={{ duration: 1, delay: 0.5 }}
                ref={sectionRef}
              >
                <h5>Access question papers anytime, anywhere</h5>
                <div className="col-md-12">
                  <AppLinkForm />
                </div>
              </motion.div>
              <motion.div
                className="row d-flex justify-content-center gap-3 mt-4 text-muted"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                transition={{ duration: 1, delay: 0.7 }}
                ref={sectionRef}
              >
                <span className="w-100 text-center">
                  {<Mobile height={20} />}Try the Academic Queries mobile app
                </span>
                <div className="row d-flex justify-content-center gap-3 mt-1">
                  {links.length > 0 &&
                    links.map((data, index) => (
                      <Path key={index} link={data.Path} image={data.Image} />
                    ))}
                </div>
              </motion.div>
            </div>
            <motion.div
              className="col-md-6 d-flex justify-content-center mt-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: sectionInView ? 1 : 0, scale: sectionInView ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.9 }}
              ref={sectionRef}
            >
              <img src="download.png" width="90%" alt="Download" />
            </motion.div>
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

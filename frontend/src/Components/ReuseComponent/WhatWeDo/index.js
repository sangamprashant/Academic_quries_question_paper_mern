import React, { useEffect } from "react";
import { whatWeDoItems } from "../../../Strings/Strings";
import "./WhatWeDo.css";
import WhatWeDoSub from "./WhatWeDoSub";
import { motion } from "framer-motion";

function WhatWeDo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="what-we-do" className="what-we-do">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h2>{whatWeDoItems.sectionTitle}</h2>
            <p>{whatWeDoItems.opportunityText}</p>
          </motion.div>
          <div className="row justify-content-center">
            {whatWeDoItems.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="col-md-4"
              >
                <WhatWeDoSub item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;

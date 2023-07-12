import React from "react";
import "../css/AboutUs.css";
import pic from "../img/logo aq.png";
import Footer from "./Footer";
function AboutUs() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src={pic} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <h3>About Us</h3>
              <p>
                Academic Queries is a platform that provides free surveys from
                the past year to support the academic efforts of students and
                faculty. The surveys are available for a variety of courses and
                academic levels.
                <br />
                <br />
                Operating our platform is easy and user-friendly. You can browse
                different courses and select the specific survey you need. Once
                selected, the document will be available for download in PDF
                format for easy access on a variety of devices. We take the
                quality and accuracy of our surveys very seriously and we
                guarantee that the surveys are from trusted and reputable
                educational institutions. We continually update our collection
                to provide you with the most up-to-date surveys and ensure you
                have access to the most relevant and up-to-date materials.
                <br />
                <br />
                Join us on our educational journey and take advantage of
                previous year's surveys. Improve your exam preparation, boost
                your confidence and improve your academic performance with our
                comprehensive collection of surveys.Be part of the community by
                providing surveys about your course.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

import React from "react";
import "./About.css";
import Image from "next/image";
function AboutUs() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image width="500" height="400" src="/logo aq.png" className="img-fluid" alt="" loading="lazy" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
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

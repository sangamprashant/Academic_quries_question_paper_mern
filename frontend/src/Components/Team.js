import React, { useEffect } from "react";
import "./css/Team.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { teamData } from "../Strings/Strings";

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2>{teamData.teamHeading}</h2>
          </div>
          <div className="row" style={{ justifyContent: "space-evenly" }}>
            {teamData.teamMembers.map((member, index) => (
              <div
                className="col-lg-4 col-md-6 d-flex align-items-center"
                key={index}
              >
                <div className="member">
                  <LazyLoadImage
                    src={member.image}
                    alt={member.name}
                    effect="blur"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = member.image;
                    }}
                  />
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <div className="social">
                    <a href={member.instagram} className="instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={member.linkedin} className="linkedin">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;

import { Image } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SERVER } from "../../../config/domain";
import "../../css/ProjectsList.css";
import ProjectLeft from "./ProjectLeft";
import IFrame from "../Reuse/IFrame";

function ProjectOpen() {
  const { language, id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProject(null);
    setLoading(true);
    fetchProject();
  }, [language, id]);

  // Function to fetch project details
  const fetchProject = async () => {
    try {
      const response = await axios.get(`${SERVER}/api/get/project/by/id/${id}`);
      if (response.status === 200) {
        setProject(response.data);
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="project-list-left">
              <ProjectLeft />
            </div>
            <div className="project-list-right">
              {loading ? (
                // Display a loading spinner while data is being fetched
                <div className="text-center">
                  <Spinner animation="border" variant="primary" />
                  <p>Loading...</p>
                </div>
              ) : (
                // Display project and language details when data is available
                <div>
                  <h1>{project?.topic}</h1>
                  <div className="mt-4">
                    <label>Project Images</label>
                    <div className="project-input-image">
                      {project?.images.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`Selected Image ${index}`}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="row mt-4">
                    {project?.report && (
                      <div className="col-md-6 form-group">
                        <label>Report</label>
                        <IFrame
                          pdfLink={project?.report}
                          width="100%"
                          height="400px"
                        />
                      </div>
                    )}
                    {project?.ppt && (
                      <div className="col-md-6 form-group">
                        <label>PPT</label>
                        <IFrame
                          pdfLink={project?.ppt}
                          width="100%"
                          height="400px"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectOpen;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Spinner, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { saveAs } from "file-saver"; // Import 'file-saver' for downloading files
import "../css/ProjectsList.css";
import ProjectLanguages from "./ProjectLanguages";
import ProjectLeft from "./ProjectLeft";

function ProjectOpen() {
  const { language, id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchProject();
  }, [language, id]);

  // Function to fetch project details
  const fetchProject = async () => {
    try {
      const response = await axios.get(
        `/api/get/project/by/id/${id}`
      );
      if (response.status === 200) {
        setProject(response.data);
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>{language}</h2>
          </div>
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
                        <img
                          key={index}
                          src={image}
                          alt={`Selected Image ${index}`}
                          onClick={() => handleImageClick(image)}
                          style={{ cursor: "pointer" }}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="row mt-4">
                    {project?.report && (
                      <div className="col-md-6 form-group">
                        <label>Report</label>
                        <embed
                          width="100%"
                          height="400px"
                          src={project?.report}
                          frameBorder="0"
                        ></embed>
                      </div>
                    )}
                    {project?.ppt && (
                      <div className="col-md-6 form-group">
                        <label>PPT</label>
                        <embed
                          width="100%"
                          height="400px"
                          src={project?.ppt}
                          frameBorder="0"
                        ></embed>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for displaying the selected image */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Body>
          <MdClose className="close-icon" onClick={closeModal} />
          {/* Close icon */}
          <img
            src={selectedImage}
            alt="Selected Image"
            style={{ width: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectOpen;

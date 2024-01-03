"use client"
import { useState } from "react";
import "./CustomModel.css"

function ProjectOpenComponent({ project }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setShowModal(false);
    };


  return (
    <div>
      <h1>{project?.topic}</h1>
      <div className="mt-4">
        <label>Project Images</label>
        <div className="project-input-image">
          {project?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Selected Image ${index}`}
              onClick={() => handleImageClick(image)}
              style={{ cursor: "pointer" }}
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
      {/* Modal for displaying the selected image */}
      {showModal && (
        <div className="custom-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <span className="close-icon" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Selected Image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectOpenComponent;

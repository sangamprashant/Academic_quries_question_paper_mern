import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminNav from "../ReuseComponent/AdminNav";

function UploadPaper() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputPath, setInputPath] = useState("");
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  useEffect(() => {
    // Fetch PDF file data from the server
    fetch("http://localhost:5000/api/get/course")
      .then((response) => response.json())
      .then((data) => {
        setPdfFiles(data);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
      });
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleUpload = () => {
    if (!selectedFile || !inputName || !inputPath) {
      notifyA("Please fill all the fields.");
      return;
    }
    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("inputName", inputName);
    formData.append("inputPath", inputPath);
    fetch("http://localhost:5000/api/add/course", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          notifyB(data.message);
          setSelectedFile(null);
          setPreviewUrl(null);
          setInputName("");
          setInputPath("");
        } else {
          notifyA(data.error);
        }
      })
      .catch((error) => {
        console.error("Failed to upload question paper:", error);
      });
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <AdminNav />
      <section id="contact" class="contact section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Add Course</h2>
            <p>Format should be in IMG/PNG!</p>
          </div>

          <div class="row mt-5 justify-content-center">
            <div class="col-lg-10">
              <form role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      value={inputName}
                      type="text"
                      class="form-control"
                      placeholder="Course Name"
                      required
                      onChange={(e) => {
                        setInputName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Paper Conducted in"
                      required
                      value={inputPath}
                      onChange={(e) => {
                        setInputPath(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class="form-group mt-3">
                  <input
                    type="file"
                    class="form-control"
                    name="pdf"
                    id="pdf"
                    placeholder="Paper in pdf"
                    required
                    onChange={handleFileChange}
                  />
                </div>
                {previewUrl && (
                  <div>
                    <h4>Selected File Preview:</h4>
                    <embed
                      src={previewUrl}
                      type="application/pdf"
                      width="100%"
                      height="600px"
                    />
                  </div>
                )}
                <div class="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      handleUpload();
                    }}
                  >
                    Upload file
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div class="sales-boxes">
              <div class="recent-sales box">
                <div class="title">List of course</div>
                <div class="sales-details">
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Course Path</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <img
                                src={`http://localhost:5000/${Papers.courseImage}`}
                                style={{ height: "40px" }}
                              />
                            </>
                          );
                        })
                      : ""}
                  </ul>
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Course Name</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id}>
                                {" "}
                                <a> {Papers.courseName}</a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Course Path</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id}>
                                <a>{Papers.coursePath}</a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UploadPaper;

import React, { useEffect, useState } from "react";
import "./css/Contact.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminNav from "./ReuseComponent/AdminNav";

function UploadPaper() {
  const [courses, setCourses] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");
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

  //fetch courses
  useEffect(() => {
    // Fetch PDF file data from the server
    fetch("/api/get/course")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
      });
  }, []);

  //fetch types
  useEffect(() => {
    // Fetch PDF file data from the server
    fetch("/api/get/types")
      .then((response) => response.json())
      .then((data) => {
        setTypes(data);
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
    if (!selectedFile || !type || !subject || !year || !course) {
      notifyA("Please fill all the fields.");
      return;
    }
    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("type", type);
    formData.append("subject", subject);
    formData.append("year", year);
    formData.append("course", course);
    formData.append("valid", true);
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          notifyB(data.message);
          setSelectedFile(null);
          setPreviewUrl(null);
          setType("");
          setSubject("");
          setYear("");
          setCourse("");
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
    <AdminNav/>
      <section id="contact" class="contact section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Upload paper</h2>
            <p>Format should be in PDF!</p>
          </div>

          <div class="row mt-5 justify-content-center">
            <div class="col-lg-10">
              <form role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      value={subject}
                      type="text"
                      name="Subject"
                      class="form-control"
                      id="Subject"
                      placeholder="Subject Name"
                      required
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="number"
                      class="form-control"
                      name="year"
                      id="year"
                      placeholder="Paper Conducted in"
                      required
                      value={year}
                      onChange={(e) => {
                        setYear(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <select
                    class="form-control"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option value=""> Select Paper Type..</option>
                    {types.length !== 0
                      ? types.map((type) => {
                          return (
                            <option value={type.valuePath}>{type.valueName}</option>
                          );
                        })
                      : ""}                    
                  </select>
                </div>
                <div class="form-group mt-3">
                  <select
                    class="form-control"
                    value={course}
                    onChange={(e) => {
                      setCourse(e.target.value);
                    }}
                  >
                    <option value=""> Select Course Type..</option>
                    {courses.length !== 0
                      ? courses.map((course) => {
                          return (
                            <option value={course.coursePath}>{course.courseName}</option>
                          );
                        })
                      : ""}
                    
                    
                  </select>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default UploadPaper;

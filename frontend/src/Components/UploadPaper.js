import React, { useEffect, useState } from "react";
import "./css/Contact.css";

function UploadPaper() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [course,setCourse]= useState("");

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
    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("type", type);
    formData.append("subject", subject);
    formData.append("year", year);
    formData.append("course", course);


    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data)
        //setUploadStatus(data);
      })
      .catch((error) => {
        console.error("Failed to upload question paper:", error);
        // setUploadStatus("Failed to upload question paper");
      });
  };

  return (
    <div style={{ marginTop: "70px" }}>
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
                  <select class="form-control" value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}>
                    <option value="" > Select Paper Type..</option>
                    <option value="internal">Internal</option>
                    <option value="external">External</option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <select class="form-control" 
                      value={course}
                      onChange={(e) => {
                        setCourse(e.target.value);
                      }}>
                    <option value="" > Select Course Type..</option>
                    <option value="Bca">BCA</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Btech">B.tech</option>
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
                  <button type="button" onClick={()=>{handleUpload()}}>Upload file</button>
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

"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UserUploadPaper() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [waiting,setWaiting] =useState(false)
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

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

  const uploadFile = () => {
    if (
      !selectedFile ||
      !type ||
      !subject ||
      !year ||
      !course ||
      !name ||
      !email
    ) {
      notifyA("Please fill all the fields.");
      return;
    }
    setWaiting(true)
    const fileRef = ref(storage, `Pdf/${Date.now() + selectedFile.name}`);
    uploadBytes(fileRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        handleUpload(url);
      });
    });
  };

  const handleUpload = (url) => {
    if (
      !name ||
      !selectedFile ||
      !type ||
      !subject ||
      !year ||
      !course ||
      !url ||
      !email
    ) {
      notifyA("Please fill all the fields.");
      return;
    }
    const requestBody = {
      path: url,
      type: type,
      subject: subject,
      year: year,
      course: course,
      name: name,
      email: email,
    };
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
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
          setName("");
          setEmail("");
          setWaiting(false)
        } else {
          notifyA(data.error);
        }
      })
      .catch((error) => {
        console.error("Failed to upload question paper:", error);
        setWaiting(false)
      });
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title">
          <h5>CONTRIBUTE</h5>
            <h2>Your Question Paper</h2>
            <p>Your contribution is valuable to us :)</p>
            <p>Format should be in PDF!</p>
            <p className="smiley"></p>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <form role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="Subject"
                      className="form-control"
                      id="Subject"
                      placeholder=" Enter your name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      value={subject}
                      type="text"
                      name="Subject"
                      className="form-control"
                      id="Subject"
                      placeholder=" Enter subject name"
                      required
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="number"
                      className="form-control"
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
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="Enter College/University Name"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="Enter the course of paper"
                    value={course}
                    onChange={(e) => {
                      setCourse(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="file"
                    className="form-control"
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
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      uploadFile();
                    }}
                  >
                    {waiting?"Please Wait..":"Upload File"}
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

export default UserUploadPaper;

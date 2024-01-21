"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ContributeNotes() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [u_name, setU_name] = useState("");
  const [u_email, setU_email] = useState("");
  const [s_name, setS_name] = useState("");
  const [s_topic, setS_topic] = useState("");
  const [waiting, setWaiting] = useState(false);
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
      !u_name.trim() ||
      !u_email.trim() ||
      !s_name.trim() ||
      !s_topic.trim()
    ) {
      notifyA("Please fill all the fields.");
      return;
    }
    setWaiting(true);
    const fileRef = ref(storage, `Notes/${Date.now() + selectedFile.name}`);
    uploadBytes(fileRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        handleUpload(url);
      });
    });
  };

  const handleUpload = (url) => {
    if (
      !u_name.trim() ||
      !u_email.trim() ||
      !s_name.trim() ||
      !s_topic.trim() ||
      !url
    ) {
      notifyA("Please fill all the fields.");
      return;
    }
    const requestBody = {
      f_path: url,
      u_name: u_name.trim(),
      u_email: u_email.trim(),
      s_name: s_name.trim(),
      s_topic: s_topic.trim(),
    };
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/upload/notes`, {
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
          setU_name("");
          setU_email("");
          setS_name("");
          setS_topic("");
          setWaiting(false);
        } else {
          notifyA(data.error);
        }
      })
      .catch((error) => {
        console.error("Failed to upload question paper:", error);
        setWaiting(false);
      });
  };

  return (
    <div className="container">
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
                  value={u_name}
                  onChange={(e) => {
                    setU_name(e.target.value);
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
                  value={u_email}
                  onChange={(e) => {
                    setU_email(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  value={s_name}
                  type="text"
                  name="Subject name"
                  className="form-control"
                  id="Subject"
                  placeholder=" Enter subject name"
                  required
                  onChange={(e) => {
                    setS_name(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  name="topic"
                  id="topic"
                  placeholder="Note's topic"
                  required
                  value={s_topic}
                  onChange={(e) => {
                    setS_topic(e.target.value);
                  }}
                />
              </div>
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
                {waiting ? "Please Wait.." : "Upload File"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContributeNotes;

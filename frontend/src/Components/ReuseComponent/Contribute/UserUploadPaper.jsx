import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../../context/AppContext";
import { storage } from "../../../firebase";

function UserUploadPaper() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [waiting, setWaiting] = useState(false);
  const { handleModel } = React.useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      return handleModel(<p className="text-danger">Please fill all the fields.</p>)
    }
    setWaiting(true);
    const fileRef = ref(storage, `Pdf/${selectedFile.name + uuidv4()}`);
    uploadBytes(fileRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // Send the download URL to your server for storage in MongoDB
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
      return handleModel(<p className="text-danger">Please fill all the fields.</p>)
    }
    const requestBody = {
      path: url,
      type: type,
      subject: subject,
      year: year,
      course: course,
      name: name,
      email: email,
      valid: false,
    };
    fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          handleModel(<p className="text-success">{data.message}</p>);
          setSelectedFile(null);
          setPreviewUrl(null);
          setType("");
          setSubject("");
          setYear("");
          setCourse("");
          setName("");
          setEmail("");
          setWaiting(false);
        } else {
          handleModel(<p className="text-danger">{data.error}</p>)
        }
      })
      .catch((error) => {
        handleModel(<p className="text-danger">Failed to upload question paper, please try again later.</p>)
      });
  };

  return (
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <form role="form" class="php-email-form">
          <div class="row">
            <div class="col-md-6 form-group">
              <input
                type="text"
                name="Subject"
                class="form-control"
                id="Subject"
                placeholder=" Enter your name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                class="form-control"
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
          <div class="row">
            <div class="col-md-6 form-group">
              <input
                value={subject}
                type="text"
                name="Subject"
                class="form-control"
                id="Subject"
                placeholder=" Enter subject name"
                required
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
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
          <div class="form-group mt-3">
            <input
              class="form-control"
              placeholder="Enter College/University Name"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </div>
          <div class="form-group mt-3">
            <input
              class="form-control"
              placeholder="Enter the course of paper"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            />
          </div>
          <div class="form-group mt-3">
            <input
              type="file"
              class="form-control"
              name="pdf"
              accept=".pdf"
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
                uploadFile();
              }}
            >
              Upload file
            </button>
            {waiting && <p className="waiting"></p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserUploadPaper;

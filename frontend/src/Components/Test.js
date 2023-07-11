import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

function Test() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);

        // Send the download URL to your server for storage in MongoDB
        console.log(url);
      });
    });
  };

  useEffect(() => {
    listAll(ref(storage, "images/")).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const saveImageUrlToMongoDB = (url) => {
    // Make an API call to your server to store the download URL in MongoDB
    fetch("http://localhost:5000/api/save-image-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: url }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Image URL saved to MongoDB:", data);
      })
      .catch((error) => {
        console.error("Failed to save image URL:", error);
      });
  };

  return (
    <div className="App" style={{marginTop:"70px"}}>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <iframe key={url} src={url} alt="Uploaded" />;
      })}
    </div>
  );
}

export default Test;

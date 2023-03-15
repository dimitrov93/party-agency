import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import "./add.css";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../../utils/apiConfig";

const Add = () => {
  const [title, setTitle] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const location = useLocation();
  const urlType = location.pathname.split("/")[2];
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDrop = (files) => {
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("title", title);

    selectedFiles.forEach((file) => {
      formData.append("images[]", file);
    });

    try {
      await axios.post(`${BASE_URL}/upload/${urlType}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // clear the fields
      setTitle("");
      setSelectedFiles([]);
      setShowMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // hide message after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showMessage]);

  return (
    <div className="container">
      <div className="content__uploader">
        <h1>Image Upload</h1>

        {showMessage && <p>Upload successful!</p>}

        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <fieldset>
                  Drag and drop some files here, or click to select files
                </fieldset>
              </div>
            )}
          </Dropzone>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default Add;

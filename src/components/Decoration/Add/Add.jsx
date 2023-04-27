import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import "./add.css";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../../utils/apiConfig";

const Add = () => {
  const [albumName, setAlbumName] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const album = location.pathname.split("/")[2];

  const handleAlbumNameChange = (event) => {
    setAlbumName(event.target.value);
  };

  const handleDrop = (files) => {
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("album", album);
    formData.append("albumName", albumName);

    selectedFiles.forEach((file) => {
      formData.append("file", file);
    });

    try {
      await axios.post(`${BASE_URL}/uploads/images/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // clear the fields
      setAlbumName("");
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
          <label htmlFor="albumName">Album name:</label>
          <input
            type="text"
            id="albumName"
            value={albumName}
            onChange={handleAlbumNameChange}
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

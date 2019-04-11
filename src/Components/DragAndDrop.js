import React, { Component, useCallback, useState } from "react";
import logo from "../logo.png";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useDropzone } from "react-dropzone";

const title = {
  fontSize: "15px",
  fontWeight: "bold"
};

function DragAndDropFunction(props) {
  const [file, setFile] = useState(null);
  const {
    acceptedFiles,
    rejectedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: "video/*, image/*"
  });

  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleUploadFile = ({ target }) => {
    console.log(target);
    setFile(target.files[0]);
  };
  const handleSubmitFile = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("myFile", file);
    axios({
      method: "POST",
      url: "http://localhost:3030/upload",
      data: formData,
      headers: {
        "content-type": "multipart/form-data"
      }
    })
      .then(response => console.log(response))
      .catch(error => console.error(error.message));
  };
  return (
    <form onSubmit={handleSubmitFile}>
      <input
        type="file"
        name="myFile"
        id="myFile"
        required
        onChange={handleUploadFile}
      />
      <input type="submit" value="Upload" />
    </form>
  );
}
export default DragAndDropFunction;

import React, { Component, useCallback } from 'react';
import logo from '../logo.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useDropzone} from 'react-dropzone';

const title = {
  fontSize:'15px',
  fontWeight:'bold',
}


function DragAndDropFunction(props) {
  const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
    accept: 'video/*, image/*'
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

  return (

    <form action="/upload" enctype="multipart/form-data" method="POST">
      <input type="file" name="myFile" id="myFile" required />
      <input type="submit" value="Upload" />
  </form>

  );
} export default DragAndDropFunction;

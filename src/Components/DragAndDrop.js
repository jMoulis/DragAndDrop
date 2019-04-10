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

    <section className="containerDropZone" >
      <form action="/upload" method="post" encType="multipart/form-data" {...getRootProps({className: 'dropzone'})}>
        <input type="file" accept="video/*, image/*" name="drag"{...getInputProps()} />
        <em>Upload...</em>
      </form>

      <div className="row">
        <button type="submit" className="btn btn-primary">
            Envoyer
        </button>
      </div>

      <aside>
        <h4 style={title}>Fichiers uploadés :</h4>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h4 style={title}>Fichiers autorisés : </h4>
        <h4>.mp4 / .mov / .avi / .mpeg4 / .flv / .3gpp / .jpeg / .png</h4>
      </aside>
    </section>

  );
} export default DragAndDropFunction;

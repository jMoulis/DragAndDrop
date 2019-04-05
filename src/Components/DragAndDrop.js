import React, { Component, useCallback } from 'react';
import logo from '../logo.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useDropzone} from 'react-dropzone';

function DragAndDropFunction(props) {
  const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
    accept: '.mp4, .mov, .avi, .mpeg4, .flv, .3gpp'
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
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <em>Upload...</em>
      </div>
      <aside>
        <h4>Fichiers uploadés</h4>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h4>Fichiers autorisés : </h4>
        <h4>.mp4 / .mov / .avi / .mpeg4 / .flv / .3gpp</h4>
      </aside>
    </section>
  );
} export default DragAndDropFunction;

import React, { Component } from 'react';
import '../App.css';
import Header from './Header/Header';
import DragAndDropFunction from './DragAndDrop';
import TraitementEnCours from './TraitementEnCours';
import TraitementTerminer from './TraitementTerminer';
import 'bootstrap/dist/css/bootstrap.css';
import { MdFileUpload, MdSettings, MdFileDownload } from 'react-icons/md';

const icon = {
  fontSize: '25pt',
  paddingRight: '10px',
}

const spacing = {
  paddingTop: '100px',
}

const spacingtitle = {
  paddingBottom: '10px',
  color: 'white',
}

export default class Work extends Component {

  render() {
    return (
      <div className="App">
          <Header></Header>

          <div className="container" style={spacing}>
            <div className="row justify-content-centera">
              <div className="col-md-4"><p style={spacingtitle}><MdFileUpload style={icon}/>Uploader votre fichier</p>
                <DragAndDropFunction></DragAndDropFunction>
              </div>

              <div className="col-md-4"><p style={spacingtitle}><MdSettings style={icon}/>En cours de traitement ...</p>
                <TraitementEnCours></TraitementEnCours>
              </div>

              <div className="col-md-4"><p style={spacingtitle}><MdFileDownload style={icon}/>Traitements terminés</p>
                <TraitementTerminer></TraitementTerminer>
              </div>
            </div>
          </div>

      </div>
    )
  }

}

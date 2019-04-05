import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
import { FaFolderPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter } from "react-router-dom";

const icon = {
  fontSize: '100pt',
  marginTop: '70px'
};

class Home extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6"><h2>BPUBLI</h2>
              <Link to="/Work"><div className="flex-item"><FaFolderPlus style={icon}/></div></Link>
            </div>

            <div className="col-md-6"><h2>SVAP</h2>
              <div className="flex-item"><FaFolderPlus style={icon}/></div>
            </div>
          </div>
        </div>

      </div>
      );
    }
}

export default Home;

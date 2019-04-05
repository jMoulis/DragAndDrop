import React, { Component } from 'react';
import logo from '../../logo.png';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav navbar navbar-light bg-light>
        <a><Link to="/"><img src={logo} className='App-logo' alt='logo'/></Link>Encoder vos vidéos</a>
      </nav>
    );
  }

}

export default Header;

import React, { Component } from 'react';
import Home from './Components/Home';
import Work from './Components/Work';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
       <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Work" exact component={Work} />
        </Switch>
    </Router>
    );
  }

}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Tabs from './components/Tabs';
import TheWedding from './components/TheWedding';
import GettingHere from './components/GettingHere';
import RSVPForm from './components/RSVPForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <div className="page-header">
            <div className="content">
              <h1 className="page-header__heading">Rich &amp; Izzy</h1>
              <p className="page-header__date">
                05.05.2018
              </p>
              <p className="page-header__address">
                Long Furlong Barn,<br/>
                Clapham,<br/>
                Worthing<br/>
                BN13 3XN
              </p>
            </div>
          </div>
          <div className="page-body">
            <Tabs />
            <Route exact path="/" component={TheWedding}/>
            <Route path="/getting-here" component={GettingHere}/>
            <Route path="/rsvp" component={RSVPForm}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

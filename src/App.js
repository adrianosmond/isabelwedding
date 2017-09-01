import React, { Component } from 'react';
import RSVPForm from './components/RSVPForm';
import GettingHere from './components/GettingHere';
import './App.css';

class App extends Component {
  render() {
    return (
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
          <div className="content">
            <GettingHere />
            <RSVPForm />
          </div>
        </div>
      </div>

    );
  }
}

export default App;

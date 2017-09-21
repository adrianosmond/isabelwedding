import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <img src="/r-and-i.jpg" className="page-body__image" alt="Long Furlong Barn" />
        <p className="page-body__text">
          Hi there,<br/>
          Welcome to our website and thanks for dropping by! We're looking forward to our wedding
          and hope you are too. You should find any information you need on this website so that
          you're ready for our big day. Don't forget to use the online form to RSVP by the end of
          January - we hope you can make it!
        </p>
        <p className="page-body__text">
          Love Rich and Izzy
        </p>
      </div>
    );
  }
}

export default Home;

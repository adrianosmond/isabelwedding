import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <Link className="tabs__tab" to="/">The Wedding</Link>
        <Link className="tabs__tab" to="/getting-here">Getting Here</Link>
        <Link className="tabs__tab" to="/rsvp">RSVP</Link>
      </div>
    )
  }
}
export default Tabs;

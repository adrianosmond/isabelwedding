import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <div className="content">
          <div className="tabs__wrapper">
            <Link className={this.props.selected === "wedding" ? "tabs__tab tabs__tab--selected" : "tabs__tab"} to="/">The Wedding</Link>
            <Link className={this.props.selected === "rsvp" ? "tabs__tab tabs__tab--selected" : "tabs__tab"} to="/rsvp">RSVP</Link>
            <Link className={this.props.selected === "getting-here" ? "tabs__tab tabs__tab--selected" : "tabs__tab"} to="/getting-here">Getting Here</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Tabs;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollTo from '../../utilities/scroll-to';
import './index.css';

class Tabs extends Component {
  componentDidMount() {
    if (!this.props.firstRoute) {
      ScrollTo.scrollTo(this.tabEl, 0);
    }
  }

  render() {
    return (
      <div className="tabs" ref={(el) => { this.tabEl = el }}>
          <div className="tabs__wrapper">
            <Link className={this.props.selected === "home" ? "tabs__tab tabs__tab--selected" : "tabs__tab"} to="/">Home</Link>
            <Link className={this.props.selected === "wedding" ? "tabs__tab tabs__tab--selected" : "tabs__tab"} to="/wedding">The Wedding</Link>
            <Link className={this.props.selected === "rsvp" ? "tabs__tab tabs__tab--selected" : "tabs__tab"} to="/rsvp">RSVP</Link>
            <Link className={this.props.selected === "getting-here" ? "tabs__tab tabs__tab--selected" : "tabs__tab"} to="/getting-here">Getting Here</Link>
          </div>
      </div>
    )
  }
}
export default Tabs;

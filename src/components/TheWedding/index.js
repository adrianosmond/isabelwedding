import React, { Component } from 'react';
import './index.css';

class TheWedding extends Component {
  render() {
    return (
      <div className="content">
        <h2 className="page-body__heading">The Venue</h2>
        <img src="/long-furlong-barn.jpg" className="page-body__image" alt="Long Furlong Barn" />
        <p className="page-body__text">
          Our wedding ceremony and reception will both take place at Long Furlong Barn.
          This is a Grade II listed barn set within the South Downs National Park just north of Worthing.
        </p>
        <h3 className="page-body__heading--secondary">Address</h3>
        <p className="page-body__text">
          Long Furlong Barn,<br/>
          Clapham,<br/>
          Worthing,<br/>
          West Sussex,<br/>
          BN13 3XN
        </p>

        <h2 className="page-body__heading">Timings</h2>
        <p className="page-body__text">
          Our ceremony will begin at 2pm so please arrive ready to be seated at 1.45pm. Carriages at 11.30pm.
        </p>

        <h2 className="page-body__heading">Confetti</h2>
        <p className="page-body__text">
          No need to bring your own, as petal confetti will be provided to guests.
        </p>

        <h2 className="page-body__heading">Gifts</h2>
        <p className="page-body__text">
          Please do not feel that you need to give us a gift. The most important thing to us is having you there
          to share our special day. However, if you do feel that you wish to make a contribution, some pennies
          towards our honeymoon pot would be really appreciated.
        </p>
      </div>
    );
  }
}

export default TheWedding;

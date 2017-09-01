import React, { Component } from 'react';
import './index.css';

class GettingHere extends Component {
  render() {
    return (
      <section className="page-body__section">
        <h2 className="page-body__heading">The Venue</h2>
        <img src="/long-furlong-barn.jpg" className="page-body__image" />
        <p className="page-body__text">
          Our wedding ceremony and reception will both take place at Long Furlong Barn.
          This is a Grade II listed barn set within the South Downs National Park just north of Worthing.
        </p>
        <p className="page-body__text">
          Address:<br/>
          Long Furlong Barn,<br/>
          Clapham,<br/>
          Worthing,<br/>
          West Sussex,<br/>
          BN13 3XN
        </p>

        <h2 className="page-body__heading">Getting here by car</h2>
        <p className="page-body__text">
          The venue is located on Long Furlong/A280. Sat Nav users can use the postcode <span className="no-break">BN13 3XN</span>.
          Look out for the brick sign below:
        </p>
        <img src="/long-furlong-sign.jpg" className="page-body__image" />
        <p className="page-body__text">
          There is plenty of parking available on site. Guests can arrange to leave their cars overnight
          however these need to be collected by 10am the following day.
        </p>

        <h2 className="page-body__heading">Getting here by train</h2>
        <p className="page-body__text">
          Do let us know if you’re travelling by train as we may be able to put you in touch with someone
          who can give you a lift to the venue. The closest station to Long Furlong Barn is Goring by Sea (3.7 miles).
          Durrington-on-sea, West Worthing,and Angmering are also less than 5 miles away.
          Worthing is the nearest large train station and is 6.5 miles away.
        </p>

        <h2 className="page-body__heading">Taxis</h2>
        <p className="page-body__text">
          We recommend that you pre-book any taxi journeys as the venue is in a rural location with minimal mobile signal.
          Below are some numbers for taxi companies, though there are others:
          <ul className="list">
            <li className="list__item"><a href="http://www.arrowtaxigroup.co.uk" target="_blank">Arrow Taxi Group</a> - 01903 212121</li>
            <li className="list__item">A & A Taxis - 01903 201201 </li>
            <li className="list__item">Angmering Station Taxis - 01903 773366</li>
          </ul>
        </p>

        <h2 className="page-body__heading">Accommodation</h2>
        <p className="page-body__text">
          We advise that you book accommodation early as it is a bank holiday weekend and likely to be busy.
          There are more hotels and guest houses than can be listed here, and so we recommend that you compare
          using a booking website for the best choices. In Arundel there is a Premier Inn and Comfort Inn
          as well a range of luxury hotels and B&Bs. There is also a lot of accommodation available in the seaside
          towns of Worthing and Littlehampton. There are a number of campsites available nearby should you wish
          to brave the spring weather!
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
      </section>
    );
  }
}

export default GettingHere;

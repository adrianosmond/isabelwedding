import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../MapMarker';
import './index.css';

class GettingHere extends Component {
  render() {
    return (
      <div className="content">
        <h2 className="page-body__heading">Getting here by car</h2>
        <div className="map">
          <GoogleMapReact
            center={{lat: 50.856771, lng: -0.44162}}
            zoom={12}
          >
            <MapMarker lat={50.856771} lng={-0.44162} />
          </GoogleMapReact>
        </div>
        <p className="page-body__text">
          The venue is located on Long Furlong/A280. Sat Nav users can use the postcode <span className="no-break">BN13 3XN</span>.
          Look out for the brick sign below:
        </p>
        <img src="/long-furlong-sign.jpg" className="page-body__image" alt="The sign for Long Furlong Barn" />
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
        </p>
        <ul className="list">
          <li className="list__item"><a href="http://www.arrowtaxigroup.co.uk" target="_blank" rel="noopener noreferrer">Arrow Taxi Group</a> - 01903 212121</li>
          <li className="list__item">A & A Taxis - 01903 201201 </li>
          <li className="list__item">Angmering Station Taxis - 01903 773366</li>
        </ul>

        <h2 className="page-body__heading">Accommodation</h2>
        <p className="page-body__text">
          We advise that you book accommodation early as it is a bank holiday weekend and likely to be busy.
          There are more hotels and guest houses than can be listed here, and so we recommend that you compare
          using a booking website for the best choices. In Arundel there is a Premier Inn and Comfort Inn
          as well a range of luxury hotels and B&Bs. There is also a lot of accommodation available in the seaside
          towns of Worthing and Littlehampton. There are a number of campsites available nearby should you wish
          to brave the spring weather!
        </p>
      </div>
    );
  }
}

export default GettingHere;

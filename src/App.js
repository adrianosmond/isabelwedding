import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Rich &amp; Izzy</h1>
          <p>
            May 5th, 2018<br/>
            Long Furlong Barn,<br/>
            Clapham,<br/>
            Worthing<br/>
            BN13 3XN
          </p>

        </div>
        <div className="App-body">
          <h2>RSVP</h2>
          <p>We'd love to have you join us on the day, but let us know either way </p>
          <form action="https://formspree.io/gosmondontour@outlook.com" method="POST">
            <label>Your name: <input type="text" name="name"/></label>
            <fieldset>
              <legend>Will you be joining us?</legend>
              <label><input type="radio" name="canAttend" value="yes"/> Yes :)</label>
              <label><input type="radio" name="canAttend" value="no"/> No :(</label>
            </fieldset>
            <label>Any other message: <textarea name="message"></textarea></label>
            <input type="submit" value="RSVP!"/>
          </form>
        </div>
      </div>

    );
  }
}

export default App;

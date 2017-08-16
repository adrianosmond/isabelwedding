import React, { Component } from 'react';
import ScrollTo from '../../utilities/scroll-to';
import './index.css';

const email = process.env.NODE_ENV === 'production' ? 'gosmondontour@outlook.com' : 'adrian__osmond@hotmail.com';

class RSVPForm extends Component {
  state = {
    name: '',
    nameTouched: false,
    nameValid: true,
    attending: '',
    attendingValid: true,
    message: ''
  }

  submitForm(e) {
    let valid = this.validateName();
    valid = this.validateCanAttend() && valid;
    if (!valid) {
      setTimeout(this.scrollToError.bind(this), 10);
      e.preventDefault()
    }
  }

  scrollToError() {
    if (!this.state.nameValid) {
      ScrollTo.scrollTo(this.nameField, 10)
    } else if (!this.state.attendingValid) {
      ScrollTo.scrollTo(this.attendingField, 10)
    }
  }

  updateName (e) {
    this.setState({
      name: e.target.value,
      nameTouched: true
    });

    setTimeout(this.validateName.bind(this), 10);
  }

  validateName() {
    const nameValid = this.state.nameTouched && this.state.name.trim().length > 0
    this.setState({
      nameValid
    });
    return nameValid;
  }

  updateMessage (e) {
    this.setState({
      message: e.target.value
    });
  }

  updateCanAttend(val) {
    this.setState({
      attending: val,
      attendingValid: true
    })
  }

  validateCanAttend() {
    const attendingValid = this.state.attending !== '';
    this.setState({
      attendingValid
    });
    return attendingValid;
  }

  render() {
    return (
      <form className="form" action={`https://formspree.io/${email}`} method="POST" onSubmit={this.submitForm.bind(this)}>
        <label className="form__field" ref={(field) => { this.nameField = field }}>
          Your name(s):
          <input className="form__input" type="text" name="name" value={this.state.name} onChange={this.updateName.bind(this)} />
        </label>
        {
          !this.state.nameValid ? <p className="form__error">Please enter your name(s)</p> : ''
        }
        <fieldset className="form__field" ref={(field) => { this.attendingField = field }}>
          <legend>Will you be joining us?</legend>
          <label className="form__control">
            <input className="form__radio" type="radio" name="attending" value="yes" checked={this.state.attending==='yes'} onChange={this.updateCanAttend.bind(this, 'yes')} />
            <span className="form__control-indicator"></span>
            Yes <span role="img" aria-label="smiley face">&#x1F604;</span>
          </label>
          <label className="form__control">
            <input className="form__radio" type="radio" name="attending" value="no" checked={this.state.attending==='no'} onChange={this.updateCanAttend.bind(this, 'no')} />
            <span className="form__control-indicator"></span>
            No <span role="img" aria-label="crying face">&#x1F62D;</span>
          </label>
        </fieldset>
        {
          !this.state.attendingValid ? <p className="form__error">Please select an option</p> : ''
        }
        <label className="form__field">
          Any other message for us? (optional)
          <textarea className="form__input form__input--textarea" name="message" value={this.state.message}  onChange={this.updateMessage.bind(this)}></textarea>
        </label>
        <input className="form__field form__button" type="submit" value="RSVP!"/>
      </form>
    );
  }
}

export default RSVPForm;

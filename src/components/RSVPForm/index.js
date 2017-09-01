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
    dietaryRequirements: '',
    children: '',
    childrenValid: true,
    childrensMenu: '',
    childrensMenuValid: true,
    message: ''
  }

  submitForm(e) {
    let valid = this.validateName();
    valid = this.validateCanAttend() && valid;
    valid = this.validateChildren() && valid;
    valid = this.validateChildrensMenu() && valid;
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

  updateDietaryRequirements (e) {
    this.setState({
      dietaryRequirements: e.target.value
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

  updateChildren(val) {
    this.setState({
      children: val,
      childrenValid: true
    })
  }

  validateChildren() {
    const childrenValid = this.state.children !== '';
    this.setState({
      childrenValid
    });
    return childrenValid;
  }

  updateChildrensMenu(val) {
    this.setState({
      childrensMenu: val,
      childrensMenuValid: true
    })
  }

  validateChildrensMenu() {
    const childrensMenuValid = this.state.children !== 'yes' || this.state.childrensMenu !== '';
    this.setState({
      childrensMenuValid
    });
    return childrensMenuValid;
  }

  render() {
    return (
      <section className="page-body__section">
        <h2 className="page-body__heading">RSVP</h2>
        <p className="page-body__text">
          It'd be great if you could join us to celebrate our marriage on May the 5th 2018.
          Please RSVP by the 31st of January 2018 so that we can plan for the numbers.
        </p>
        <form className="form" action={`https://formspree.io/${email}`} method="POST" onSubmit={this.submitForm.bind(this)}>
          <label className="form__field" ref={(field) => { this.nameField = field }}>
            Your name(s):
            <input className="form__input" type="text" name="Name" value={this.state.name} onChange={this.updateName.bind(this)} />
          </label>
          {
            !this.state.nameValid ? <p className="form__error">Please enter your name(s)</p> : ''
          }
          <fieldset className="form__field" ref={(field) => { this.attendingField = field }}>
            <legend>Will you be joining us?</legend>
            <label className="form__control">
              <input className="form__radio" type="radio" name="Attending" value="yes" checked={this.state.attending==='yes'} onChange={this.updateCanAttend.bind(this, 'yes')} />
              <span className="form__control-indicator"></span>
              Yes <span role="img" aria-label="smiley face">&#x1F604;</span>
            </label>
            <label className="form__control">
              <input className="form__radio" type="radio" name="Attending" value="no" checked={this.state.attending==='no'} onChange={this.updateCanAttend.bind(this, 'no')} />
              <span className="form__control-indicator"></span>
              No <span role="img" aria-label="crying face">&#x1F62D;</span>
            </label>
          </fieldset>
          {
            !this.state.attendingValid ? <p className="form__error">Please select an option</p> : ''
          }

          <label className="form__field">
            Please list any dietary requirements
            <textarea className="form__input form__input--textarea" name="Dietary_Requirements" value={this.state.dietaryRequirements}  onChange={this.updateDietaryRequirements.bind(this)}></textarea>
          </label>

          <fieldset className="form__field" ref={(field) => { this.attendingField = field }}>
            <legend>Will you be joining bringing children?</legend>
            <label className="form__control">
              <input className="form__radio" type="radio" name="Bringing_Children" value="yes" checked={this.state.children==='yes'} onChange={this.updateChildren.bind(this, 'yes')} />
              <span className="form__control-indicator"></span>
              Yes
            </label>
            <label className="form__control">
              <input className="form__radio" type="radio" name="Bringing_Children" value="no" checked={this.state.children==='no'} onChange={this.updateChildren.bind(this, 'no')} />
              <span className="form__control-indicator"></span>
              No / N/A
            </label>
          </fieldset>
          {
            !this.state.childrenValid ? <p className="form__error">Please select an option</p> : ''
          }
          {
            this.state.children === 'yes' ?
            <div>
              <fieldset className="form__field" ref={(field) => { this.attendingField = field }}>
                <legend>Will they require a meal from the children's menu?</legend>
                <label className="form__control">
                  <input className="form__radio" type="radio" name="Childrens_Menu" value="yes" checked={this.state.childrensMenu==='yes'} onChange={this.updateChildrensMenu.bind(this, 'yes')} />
                  <span className="form__control-indicator"></span>
                  Yes
                </label>
                <label className="form__control">
                  <input className="form__radio" type="radio" name="Childrens_Menu" value="no" checked={this.state.childrensMenu==='no'} onChange={this.updateChildrensMenu.bind(this, 'no')} />
                  <span className="form__control-indicator"></span>
                  No
                </label>
              </fieldset>
              {
                !this.state.childrensMenuValid ? <p className="form__error">Please select an option</p> : ''
              }
            </div>
             : ''
          }
          <label className="form__field">
            Any other message for us? (optional)
            <textarea className="form__input form__input--textarea" name="Message" value={this.state.message}  onChange={this.updateMessage.bind(this)}></textarea>
          </label>
          <input className="form__field form__button" type="submit" value="RSVP!"/>
        </form>
      </section>
    );
  }
}

export default RSVPForm;

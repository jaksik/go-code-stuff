import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MyGatsbyComponent extends React.Component {
  state = {
    EMAIL: "",
    FNAME: "",
    LNAME: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  _handleSubmit = event => {
    event.preventDefault()
    addToMailchimp(this.state.EMAIL, {
      FNAME: this.state.FNAME,
      LNAME: this.state.LNAME
    }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  render() {
    return (
      <div>
        <h4>Sign Up For Our Weekly Newsletter</h4>
        <form onSubmit={this._handleSubmit}>

          <input name="FNAME"
            placeholder="First Name"
            type="text"
            value={this.state.FNAME}
            onChange={this.handleInputChange} />

          <input name="LNAME"
            placeholder="Last Name"
            type="text"
            value={this.state.LNAME}
            onChange={this.handleInputChange} />

          <input name="EMAIL"
            placeholder="Your Email"
            type="email"
            value={this.state.EMAIL}
            onChange={this.handleInputChange} />
          <button type="submit" value="Submit">Sign Up</button>
        </form>
      </div>
    )
  }
}
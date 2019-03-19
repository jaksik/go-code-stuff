import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="Your Email" type="email" />
        <input name="message" placeholder="Your Message" type="text" />
        <button>Send</button>
      </form>
    )
  }
}

export default Form
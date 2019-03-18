import React from 'react'
const s = document.createElement('script');
class Subscribe extends React.Component {
    constructor(...args) {
      super(...args)
      this.ref = React.createRef()
      this.s = null
    }
    componentWillMount() {
        this.s = document.createElement('script');

        this.s.src = '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js'
      }
    componentDidMount() {
         this.ref.current.appendChild(this.s)
      }
    render() {
      return (
        <>
        <div
          ref={this.ref}
          id="signupScript" 
          />
                <div class="ctct-inline-form" data-form-id="668ba85a-ed12-4b66-b13c-bbf2908e2a64"></div>

        </>
      )
    }
    
  }

export default Subscribe

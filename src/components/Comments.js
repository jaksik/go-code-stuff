import React from 'react'

class JustComments extends React.Component {
    constructor(...args) {
      super(...args)
      this.ref = React.createRef()
    }
    render() {
      return (
        <div
          ref={this.ref}
          className="just-comments"
          data-apikey="193be114-65c2-409f-9915-832cf9d89e76"
        />
      )
    }
    componentDidMount() {
      const s = document.createElement('script')
      s.src = '//just-comments.com/w.js'
      s.setAttribute('data-timestamp', +new Date())
      this.ref.current.appendChild(s)
    }
  }

export default JustComments

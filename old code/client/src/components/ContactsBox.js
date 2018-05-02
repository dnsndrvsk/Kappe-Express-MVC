import React, { Component } from 'react'
import '../styles/components/ContactsBox.scss'

class ContactsBox extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isHidden: true
    }
  }
  
  handleChange = () => {
    this.setState({ isHidden: !this.state.isHidden })
  }
  
  render() {
    return (
      <div className="contacts-box">
        <div
          className="contacts-box__btn"
          onClick={this.handleChange}
        >
          <div className="contacts-box__btn-wrap-inner">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </div>
        </div>
        
        <ul
          className="contacts-box__info-list"
          hidden={this.state.isHidden}
        >
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i>
            9930 1234 5679
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            contact@domain.com
          </li>
          <li>
            <i className="fa fa-home" aria-hidden="true"></i>
            street address example
          </li>
        </ul>
      </div>
    )
  }
}

export default ContactsBox
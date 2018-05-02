import React, { Component } from 'react'
import '../styles/components/MessageBox.scss'

const inputs = [
  {
    type: 'text',
    icon: 'fa-user',
    placeholder: 'Name',
    isRequired: true,
    value: 'author'
  },
  {
    type: 'email',
    icon: 'fa-envelope-o',
    placeholder: 'E-mail',
    isRequired: false,
    value: 'email'
  },
  {
    type: 'url',
    icon: 'fa-link',
    placeholder: 'Website',
    isRequired: false,
    value: 'website'
  }
]

class MessageBox extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      author: '',
      email: '',
      website: '',
      text: ''
    }
  }
  
  handleAuthorChange = (e) => {
    this.setState({author: e.target.value})
  }
  
  handleTextChange = (e) => {
    this.setState({text: e.target.value})
  }
  
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  
  handleWebsiteChange = (e) => {
    this.setState({website: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const author = this.state.author.trim()
    const text = this.state.text.trim()
    const email = this.state.email.trim()
    const website = this.state.website.trim()
    
    if (!text || !author) {
      return
    }
    
    this.props.onCommentSubmit({
      author: author,
      text: text,
      email: email,
      website: website
    })
    
    this.setState({
      author: '',
      email: '',
      website: '',
      text: ''
    })
  }
  
  render() {
    return (
      <div className="message-box">
        <h3 className="message-box__header">
          {this.props.data.header}
        </h3>
        <div className="message-box__form-wrap cf">
          <form
            action="POST"
            onSubmit={this.handleSubmit}
          >
            <div className="message-box__col-left">
              {inputs.map((item, i) => {
                const iconClass = `message-box__icon fa ${item.icon}`
                
                return (
                  <div className="message-box__input-field" key={i}>
                    <label>
                      <input
                        type={item.type}
                        className="message-box__input"
                        placeholder={item.placeholder}
                        required={item.isRequired}
                        value={
                          item.value === 'author'
                          ? this.state.author
                          : item.value === 'email'
                            ? this.state.email
                            : this.state.website
                        }
                        onChange={
                          item.value === 'author'
                          ? this.handleAuthorChange
                          : item.value === 'email'
                            ? this.handleEmailChange
                            : this.handleWebsiteChange
                        }
                      />
                      <div className="message-box__icon-wrap">
                        <i className={iconClass}></i>
                      </div>
                    </label>
                  </div>
                )
              })}
            </div>
            
            <div className="message-box__col-right">
              <div className="message-box__textarea-wrap">
                <textarea
                  value={this.state.text}
                  onChange={this.handleTextChange}
                  className="message-box__textarea"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Message"
                  required
                >
                </textarea>
              </div>
              <div className="message-box__btn-wrap">
                <button
                  className="message-box__btn button"
                  type="submit"
                >
                  {this.props.data.buttonText}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default MessageBox
import React, { Component } from 'react'

class Comment extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="comments-box__comment">
        <h2 className="comments-box__header">
          {this.props.author}
        </h2>
        <p className="comments-box__text">
          {this.props.children}
        </p>
        <div className="comments-box__image">
          <img
            className="comments-box__img"
            src={this.props.image}
            alt={this.props.author}
          />
        </div>
      </div>
    )
  }
}

export default Comment
import React, { Component } from 'react'
import '../styles/components/QuotePost.scss'

class Quote extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="quote-post">
        <div className="quote-post__inner-wrap">
          <blockquote className="quote-post__text-wrap">
            <p className="quote-post__text">
              {this.props.data.quote}
            </p>
          </blockquote>
          <div className="quote-post__author">
            <i className="fa fa-quote-left"></i>
            {this.props.data.author}
          </div>
        </div>
      </div>
    )
  }
}

export default Quote
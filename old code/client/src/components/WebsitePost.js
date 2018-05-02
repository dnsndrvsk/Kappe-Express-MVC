import React, { Component } from 'react'
import '../styles/components/WebsitePost.scss'

class WebPost extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="web-post">
        <div className="web-post__inner-wrap">
          <p className="web-post__text">
            {this.props.data.title}
          </p>
          <a 
            className="web-post__link"
            href={this.props.data.url}
          >
            {this.props.data.url}
          </a>
        </div>
      </div>
    )
  }
}

export default WebPost
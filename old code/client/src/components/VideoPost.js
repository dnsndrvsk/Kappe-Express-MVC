import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/CommonPost.scss'

class VideoPost extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="common-post">
        <div className="common-post__video-wrap">
          <iframe
            className="common-post__video"
            src={this.props.data.src + '?autoplay=0'}
            width="100%"
            height="auto"
          >
          </iframe>
        </div>

        <div className="common-post__info">
          <h2 className="common-post__header">
            <Link to={`/blog/post/videopost/${this.props.data._id}`}>
              {this.props.data.title}
            </Link>
          </h2>
          <p className="common-post__text">
            {this.props.data.text}
          </p>
        </div>

        <div className="common-post__bottom">
          <div className="common-post__comments">
            <i className="fa fa-comment"></i>
            {this.props.data.comments.length}
            { ' ' } {this.props.data.comments.length === 1 ? 'comment' : 'comments' }
          </div>

          <div className="common-post__date">
            <i className="fa fa-calendar"></i>
            {this.props.data.date.split('T')[0]}
          </div>
        </div>
      </div>
    )
  }
}

export default VideoPost
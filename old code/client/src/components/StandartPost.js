import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/CommonPost.scss'

class StandartPost extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="common-post">
        <div className="common-post__image-wrap">
          <img
            className="common-post__image"
            src={this.props.data.image}
            alt={this.props.data.title}
          />
        </div>

        <div className="common-post__info">
          <h2 className="common-post__header">
            <Link to={`/blog/post/standartpost/${this.props.data._id}`}>
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

export default StandartPost
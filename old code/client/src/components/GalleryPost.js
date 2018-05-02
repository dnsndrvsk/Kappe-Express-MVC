import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import '../styles/components/Carousel.scss'
import '../styles/components/CommonPost.scss'

class GalleryPost extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="common-post">
        <div className="common-post__gallery-wrap">
          <div className="common-post__gallery">
            <Carousel
              autoPlay
              infiniteLoop
              transitionTime={1000}
              emulateTouch
            >
              {this.props.data.images.map((item, i) => {
                return (
                  <div key={i}>
                    <img
                      src={item}
                      alt={this.props.data.title}
                    />
                  </div>
                )
              })}
            </Carousel> 
          </div>
        </div>

        <div className="common-post__info">
          <h2 className="common-post__header">
            <Link to={`/blog/post/gallerypost/${this.props.data._id}`}>
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

export default GalleryPost
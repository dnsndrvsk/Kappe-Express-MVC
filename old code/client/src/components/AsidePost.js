import React, { Component } from 'react'
import '../styles/components/AsidePost.scss'

class AsidePost extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="aside-post">
        <div className="aside-post__inner-wrap">
          <h2 className="aside-post__header">
            {this.props.data.title}
          </h2>
          <p className="aside-post__text">
            {this.props.data.text}
          </p>
        </div>
      </div>
    )
  }
}

export default AsidePost
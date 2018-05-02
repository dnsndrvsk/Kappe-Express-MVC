import React, { Component } from 'react'
import defaultImgSrc from '../../assets/user.png'
import Comment from './Comment'

class CommentList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const commentNodes = this.props.data.map((item, i) => {
      return (
        <Comment
          author={item.author}
          image={item.src || defaultImgSrc}
          key={i}
        >
          {item.text}
        </Comment>
      )
    })
    
    return (
      <div>
        {
          commentNodes.length === 0
          ? 'There are no comments yet.'
          : commentNodes
        }
      </div>
    )
  }
}

export default CommentList
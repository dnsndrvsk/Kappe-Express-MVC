import React, { Component } from 'react'
import MessageBox from '../MessageBox'
import CommentList from './CommentList'
import SpinnerSmall from '../SpinnerSmall'
import api from '../../api'
import '../../styles/components/CommentsBox.scss'

const messageBoxData = {
  header: 'Leave a Comment',
  buttonText: 'Post a comment'
}

class CommentBox extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data : [],
      isLoading: false
    }
  }
  
  loadData = () => {
    this.setState({ isLoading: true })
    
    api.getModel(this.props.modelName)
      .then((response) => {
        clearInterval(this.loadDataTimerID)
        this.setState({
          data: response.comments,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  handleCommentSubmit = (comment) => {
    const comments = this.state.data
    comment.id = Date.now()
    const newComments = comments.concat([comment])
    this.setState({data: newComments})
    
    api.postComment(comment, this.props.modelName)
      .then((response) => {
        this.setState({ data: response.comments })
      })
      .catch((error) => {
        this.setState({ data: comments })
        console.log(error)
      })
  }

  componentDidMount() {
    this.loadData()
    this.loadDataTimerID = setInterval(this.loadData, 
                               this.props.pollInterval)
  }

  componentWillUnmount() {
    if (this.loadDataTimerID) clearInterval(this.loadDataTimerID)
  }
  
  render() {
    return (
      <div>
        {
          this.state.isLoading
          ? <SpinnerSmall />
          : <div className="comments-box">
              <div className="comments-box__comments-wrap">
                <CommentList data={this.state.data} />
              </div>
              <div className="comments-box__form-wrap">
                <MessageBox
                  onCommentSubmit={this.handleCommentSubmit}
                  data={messageBoxData}
                />
              </div>
            </div>
        }
      </div>
    )
  }
}



export default CommentBox
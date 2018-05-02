import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Spinner from './Spinner'
import PageNotFound from './404'
import CommentBox from '../components/Comments/CommentsBox'
import { Carousel } from 'react-responsive-carousel'
import api from '../api'
import '../styles/components/Carousel.scss'
import '../styles/views/Work.scss'


class GalleryPostView extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: false,
      data: null
    }
  }
  
  loadData = () => {
    this.setState({ isLoading: true })

    api.getModel('GalleryPost')
      .then((response) => {
        clearInterval(this.loadDataTimerID)
        this.setState({
          isLoading: false,
          data: response
        })
      })
      .catch((error) => {
        if (error.status === 404) {
          clearInterval(this.loadDataTimerID)
          this.setState({
            isLoading: false,
            data: null
          })
        }
      
        console.log(error)
      })
  }
  
  componentDidMount() {
    this.loadData()
    this.loadDataTimerID = setInterval(this.loadData, 2000)
  }

  componentWillUnmount() {
    if (this.loadDataTimerID) clearInterval(this.loadDataTimerID)
  }
  
  render() {
    return (
      <div>
        <Helmet>
          <title>Kappe | Gallery</title>
        </Helmet>
        {
          this.state.isLoading
          ? <Spinner />
          : this.state.data
            ? <div className="work-page">
                <div className="work-page__wrap-inner">
                  <div className="work-page__item-wrap">
                    <div className="work-page__item">
                      <Carousel
                        autoPlay
                        infiniteLoop
                        transitionTime={1000}
                        emulateTouch
                      >
                        {this.state.data.images.map((item, i) => {
                          return (
                            <div key={i}>
                              <img src={item} alt={this.state.data.title} />
                            </div>
                          )
                        })}
                      </Carousel>
                    </div>
                    <div className="work-page__item-desc">
                      <h1 className="work-page__header">
                        {this.state.data.title}
                      </h1>
                      <div className="work-page__info">
                        <div>
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        {this.state.data.author || 'Admin'}
                      </div>

                      <div className="work-page__info">
                        <div>
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        {this.state.data.date.split('T')[0]}
                      </div>

                      <div className="work-page__info">
                        <div>
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                        {this.state.data.date.split('T')[1].split('.')[0]}
                      </div>
                      
                      <p>{this.state.data.text}</p>
                    </div>
                  </div>

                  <CommentBox
                    modelName="GalleryPost"
                    pollInterval={2000}
                  />
                </div>
              </div>
            : <PageNotFound />
        }
      </div>
    )
  }
}

export default GalleryPostView
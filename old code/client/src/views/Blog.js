import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Masonry from 'react-masonry-component'
import Spinner from './Spinner'
import api from '../api'
import '../styles/views/Blog.scss'
//Components
import Quote from '../components/QuotePost'
import WebPost from '../components/WebsitePost'
import AsidePost from '../components/AsidePost'
import VideoPost from '../components/VideoPost'
import StandartPost from '../components/StandartPost'
import GalleryPost from '../components/GalleryPost'

class Blog extends Component {
  constructor(props) {
    super(props)
    
    this.prevPostIndex
    
    this.state = {
      standartPosts: [],
      galleryPosts: [],
      videoPosts: [],
      asidePosts: [],
      websitePosts: [],
      quotePosts: [],
      isLoading: false,
      reqItemIndex: 0
    }
  }
  
  getAllData = () => {
    this.setState({ isLoading: true })
    
    this.getData('WebsitePost',  'websitePosts')
    this.getData('AsidePost',    'asidePosts')
    this.getData('GalleryPost',  'galleryPosts')
    this.getData('QuotePost',    'quotePosts')
    this.getData('StandartPost', 'standartPosts')
    this.getData('VideoPost',    'videoPosts')
  } 
  
  getData = (postName, storage) => {
    api.getModels(postName)
      .then((response) => {
        if (this.loadDataIntervalID) {
          clearInterval(this.loadDataIntervalID)
        }
        this.setState({
          [storage]: response,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  loadMore = () => {
    this.setState({
      reqItemIndex: this.state.reqItemIndex + 1
    })
  }
  
  componentDidUpdate() {
    this.prevPostIndex = this.state.reqItemIndex
  } 
  
  componentDidMount() {
    this.getAllData()
    this.loadDataIntervalID = setInterval(this.getAllData, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.loadDataIntervalID)
  }
  
  wrapData = (itemLocation) => {
    const items = this.state[itemLocation].filter((item, i) => {
      if (i === this.state.reqItemIndex) return true
                                        }).map((item, i) => {
      return (
        <div>
            { (itemLocation === 'standartPosts') && <StandartPost data={item}/> }
            { (itemLocation === 'galleryPosts')  && <GalleryPost  data={item}/> }
            { (itemLocation === 'videoPosts')    && <VideoPost    data={item}/> }
            { (itemLocation === 'asidePosts')    && <AsidePost    data={item}/> }
            { (itemLocation === 'quotePosts')    && <Quote        data={item}/> }
            { (itemLocation === 'websitePosts')  && <WebPost      data={item}/> }
        </div>
      )
    })
    return items
  }
  

  render() {
    
    const standartPosts = this.wrapData('standartPosts')
    const galleryPosts  = this.wrapData('galleryPosts')
    const videoPosts    = this.wrapData('videoPosts')
    const asidePosts    = this.wrapData('asidePosts')
    const quotePosts    = this.wrapData('quotePosts')
    const websitePosts  = this.wrapData('websitePosts')
    
    if (this.state.reqItemIndex === 0) {
      this.oldData = []
      this.newData = [].concat(
                               standartPosts,
                               galleryPosts,
                               videoPosts,
                               asidePosts,
                               quotePosts,
                               websitePosts
                              )
    }
    
    if (this.state.reqItemIndex > 0 && 
        this.state.reqItemIndex != this.prevPostIndex) {
      
      this.oldData = this.newData
      this.newData = [].concat(this.oldData)
                       .concat(
                               standartPosts,
                               galleryPosts,
                               videoPosts,
                               asidePosts,
                               quotePosts,
                               websitePosts
                              )
    }
    
    return (
      <div>
        <Helmet>
          <title>Kappe | Blog</title>
        </Helmet>
        {
          this.state.isLoading 
          ? <Spinner />
          : <div className="blog-page">
              <ul className="blog-page__items-list cf">
                <Masonry>
                  {this.newData.map((item, i) => {
                    if (i >= this.oldData.length && 
                        this.state.reqItemIndex != 0) {
                      return (
                        <li className="blog-page__item blog-page__item--new" key={i}>
                          {item}
                        </li>
                      )
                    } else {
                      return (
                        <li className="blog-page__item" key={i}>
                          {item}
                        </li>
                      )
                    }
                  })}
                </Masonry>
              </ul>

              <div
                className="blog-page__load-btn-wrap"
                hidden={this.newData.length === this.oldData.length ? true : false}
              >
                <button
                  className="blog-page__load-btn button"
                  type="button"
                  onClick={this.loadMore}
                >
                  Load More
                </button>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default Blog
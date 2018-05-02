import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import SpinnerSmall from './SpinnerSmall'
import api from '../api'
import '../styles/components/Testimonials.scss'

class Testimonials extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: [],
      isLoading: true,
      itemToShow: 0
    }
  }
  
  loadData = () => {
    this.setState({ isLoading: true })

    api.getModels('Testimonial')
    .then((response) => {
      clearInterval(this.loadDataTimerID)
      this.setState({
        data: response,
        isLoading: false
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  componentDidMount() {
    this.loadData()
    this.itemIndexTimerID = setInterval(this.updateItemIndex, 4000)
    this.loadDataTimerID = setInterval(this.loadData, 2000)
  }
  
  componentWillUnmount() {
    clearInterval(this.itemIndexTimerID)
    if (this.loadDataTimerID) clearInterval(this.loadDataTimerID)
  }
  
  updateItemIndex = () => {
    if (this.state.itemToShow === (this.state.data.length - 1)) {
      this.setState({ itemToShow: 0 })
    }
    this.setState({ itemToShow: this.state.itemToShow + 1 })
  }
  
  render() {
    return (
      <div>
        {
          this.state.isLoading
          ? <SpinnerSmall />
          : <div className="testimonials">
              <h2 className="testimonials__header">
                Testimonials
              </h2>
              <div className="testimonials__items-wrap">
                <Masonry>
                  {this.state.data.map((item, i) => {
                    if (this.state.itemToShow === i) {
                      return (
                        <div className="testimonials__item" key={i}>
                          <div className="testimonials__additional">
                            <div className="testimonials__image">
                              <img
                                className="testimonials__img"
                                src={item.image}
                                alt={item.name}
                              />
                            </div>
                            <div className="testimonials__author-wrap">
                              <p className="testimonials__author">
                                {item.name} - {item.occupation} at {item.company}
                              </p>
                            </div>
                          </div>
                          <blockquote className="testimonials__quote-wrap">
                            <p className="testimonials__quote">
                              {item.message}
                            </p>
                          </blockquote>
                        </div>
                      )
                    }
                  })}
                </Masonry>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default Testimonials
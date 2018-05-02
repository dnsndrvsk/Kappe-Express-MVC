import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Masonry from 'react-masonry-component'
import Spinner from './Spinner'
import Card from '../components/Card'
import { selectedFilter } from '../components/Filter'
import api from '../api'
import '../styles/views/Home.scss'


class Home extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      activeFilter: selectedFilter || 'All Works',
      isLoading: false,
      data: []
    }
  }
  
  loadData = () => {
    this.setState({ isLoading: true })
    
    api.getModels('Card')
      .then((response) => {
        clearInterval(this.loadDataTimerID)
        this.setState({
          isLoading: false,
          data: response
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  updateState = () => {
    if (selectedFilter !== this.state.activeFilter) {
      this.setState({ activeFilter: selectedFilter })
    }
  }
  
  componentDidMount() {
    this.loadData()
    this.updateStateTimerID = setInterval(this.updateState, 200)
    this.loadDataTimerID = setInterval(this.loadData, 2000)
  }
  
  componentWillUnmount() {
    clearInterval(this.updateStateTimerID)
    if (this.loadDataTimerID) clearInterval(this.loadDataTimerID)
  }
  
  render() {
//    const cardsData = this.state.data.sort((a, b) => {
//      if (b.date > a.date) return 1
//    })
    
    const filteredData = this.state.activeFilter === 'All Works'
                         ? this.state.data
                         : this.state.data.filter((item, i) => {
                             return item.type === this.state.activeFilter
                           })
    
    return (
      <div>
        <Helmet>
          <title>Kappe | Home</title>
        </Helmet>
        {
          this.state.isLoading
          ? <Spinner />
          : <div className="home-page">
              <ul className="home-page__items-list cf">
                <Masonry>
                  {filteredData.map((item, i) => {
                    return (
                      <Card data={item} key={i} />
                    )
                  })}
                </Masonry>
              </ul>
            </div>
        }
      </div>
    )
  }
}

export default Home
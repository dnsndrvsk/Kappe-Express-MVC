import React, { Component } from 'react'
import '../styles/components/Filter.scss'

const tabs = [
  'All Works',
  'web design',
  'illustration',
  'photography',
  'wallpapers',
  'brochures'
]

export let selectedFilter

class Filter extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentTab: 'All Works'
    }
  }
  
  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      currentTab : event.target.textContent
    })
  }
  
  render() {
    selectedFilter = this.state.currentTab
    
    return (
      <div className="filter">
        <p className="filter__header">
          Filter
          <i className="fa fa-th-large"></i>
        </p>
        <ul className="filter__list">
          {tabs.map((tab, i) => {
            return (
              <li className="filter__item" key={i}>
                <a 
                  className={
                    tab === this.state.currentTab
                    ? "filter__link filter__link--selected"
                    : "filter__link"
                  }
                  href="#"
                  onClick={this.handleChange}
                >
                  {tabs[i]}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Filter
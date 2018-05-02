import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import whyUsData from '../data/whyUsData'
import '../styles/components/WhyUs.scss'

class WhyUs extends Component {
  constructor(props) {
    super(props)
    
    this.state = { tabIndex: 0 }
  }
  
  changeIndex = () => {
    if (this.state.tabIndex === (whyUsData.length - 1)) {
      this.setState({ tabIndex: 0 })
      return
    }
    const newIndex = this.state.tabIndex + 1
    this.setState({ tabIndex: newIndex })
  }
  
  removeIndexChange = () => {
    clearInterval(this.timerID)
  }
  
  componentDidMount() {
    this.timerID = setInterval(this.changeIndex, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
  render() {
    return (
      <div className="why-us">
        <h2 className="why-us__header">
          Why Choose Us
        </h2>
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList>
            {whyUsData.map((item, i) => {
              return (
                <Tab onClick={this.removeIndexChange} key={i}>
                  <h2 className="why-us__title">
                    {item.header}
                  </h2>
                </Tab>
              )
            })}
          </TabList>
          
          {whyUsData.map((item, i) => {
            return (
              <TabPanel key={i}>
                <p className="why-us__text">
                  {item.text}
                </p>
              </TabPanel>
            )
          })}
        </Tabs>
      </div>
    )
  }
}

export default WhyUs
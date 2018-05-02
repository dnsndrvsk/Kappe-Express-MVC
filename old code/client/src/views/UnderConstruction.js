import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/views/UnderConstruction.scss'

const UnderConstruction = () => {
  return (
    <div className="under-construct">
      <Helmet>
        <title>Under Construction</title>
      </Helmet>
      <div className="under-construct__wrap-inner">
        <h1 className="under-construct__header">
          Sorry, the page is under construction.
          <br/>
          Come back soon.
        </h1>
        <div className="under-construct__progress-wrap">
          <div className="under-construct__progress">
            <i className="fa fa-gears"></i>
            <span className="under-construct__stripes under-construct__animate" 
                  style={{width: '80%'}}
            >
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderConstruction
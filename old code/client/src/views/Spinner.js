import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/views/Spinner.scss'

const Spinner = () => {
  return (
    <div className="loading-page">
      <Helmet>
        <title>Loading...</title>
      </Helmet>
      <div className="loading-page__table">
        <div className="loading-page__cell">
          <div id="spinner"></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
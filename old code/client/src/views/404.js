import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import '../styles/views/404.scss'

const PageNotFound = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className="not-found-page__wrap-inner">
        <div className="not-found-page__code">
          404
        </div>
        <h1 className="not-found-page__header">
          Sorry, the page you're looking for does not exist.
        </h1>
        <Link
          className="not-found-page__link"
          to="/home"
        >
          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
          Return to homepage
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
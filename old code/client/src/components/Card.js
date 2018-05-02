import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Card.scss'

class Card extends Component {
  constructor(props){
    super(props)
  }
  
  render () {
    return (
      <li className="home-page__item card">
        <img
          className="card__image"
          src={this.props.data.source}
          alt={this.props.data.title}
        />
        <div className="card__descr-wrap">
          <div className="card__descr-table">
            <div className="card__descr-cell">
              <p className="card__title">
                {this.props.data.title}
              </p>
              <p className="card__type">
                {this.props.data.type}
              </p>
              <hr className="card__line" />
              <Link
                className="card__btn"
                to={`/home/works/${this.props.data._id}`}
              >
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default Card
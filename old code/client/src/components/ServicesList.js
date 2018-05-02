import React from 'react'
import { Link } from 'react-router-dom'
import servicesData from '../data/servicesData'
import '../styles/components/ServicesList.scss'

const ServicesList = () => {
  return (
    <div className="services-list">
      <div className="services-list__items-list cf">
        {servicesData.map((item, i) => {
          return (
            <div className="services-list__item" key={i}>
              <div className="services-list__image-wrap">
                <Link className="services-list__image" to="#">
                  <i className={item.imageClass} aria-hidden="true"></i>
                </Link>
              </div>
              <h2 className="services-list__header">
                {item.header}
              </h2>
              <p className="services-list__text">
                {item.text}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ServicesList
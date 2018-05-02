import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Services.scss'

const servicesList = [
  'Web Design',
  'Photography',
  'Plugin Development',
  'Front-end',
  'Design from Scratch',
  'Website Maintenance'
]

const Services = () => {
  return (
    <div className="services">
      <h2 className="services__header">
        Services
      </h2>
      <ul className="services__list">
        {servicesList.map((item, i) => {
          return (
            <li className="services__item" key={i}>
              <Link
                className="services__link"
                to="/services"
              >
                {item}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Services
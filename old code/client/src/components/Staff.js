import React from 'react'
import staffData from '../data/staffData'
import '../styles/components/Staff.scss'

const Staff = () => {
  return (
    <div className="staff">
      <h2 className="staff__header">
        Our Staff
      </h2>
      <div className="staff__items-wrap cf">
        {staffData.map((item, i) => {
          return (
            <div className="staff__item" key={i}>
              <figure className="staff__image">
                <img
                  className="staff__img"
                  src={item.image}
                  alt={item.name}
                />
              </figure>
              <div className="staff__descr-wrap">
                <div className="staff__descr-table">
                  <div className="staff__descr-cell">
                    <h3 className="staff__name">
                      {item.name}
                    </h3>
                    <p className="staff__position">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Staff
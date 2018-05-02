import React from 'react'
import introData from '../data/introData'
import imageSrc from '../assets/about.jpg'
import '../styles/components/Intro.scss'

const introHeader = 'Who We Are'

const Intro = () => {
  return (
    <div className="team">
      <figure className="team__image">
        <img
          className="team__img"
          src={imageSrc}
          alt={introHeader}
        />
      </figure>
      <h2 className="team__header">
        {introHeader}
      </h2>
      
      {introData.map((item, i) => {
        return (
          <p className="team__text" key={i}>
            {item.text}
          </p>
        )
      })}
    </div>
  )
}

export default Intro
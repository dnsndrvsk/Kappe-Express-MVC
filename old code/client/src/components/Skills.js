import React from 'react'
import skillsData from '../data/skillsData'
import '../styles/components/Skills.scss'

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills__header">
        Our Skills
      </h2>
      <div className="skills__items-wrap">
        {skillsData.map((item, i) => {
          return (
            <div className="skills__item" key={i}>
              <h3 className="skills__title">
                {item.title}
              </h3>
              <div className="skills__percent">
                <div
                  className="skills__percent-line"
                  style={{width: item.percent}}
                >
                </div>
                <span className="skills__percent-num">
                  {item.percent}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
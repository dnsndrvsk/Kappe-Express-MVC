import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/views/About.scss'
/* Components */
import Intro from '../components/Intro'
import Staff from '../components/Staff'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>Kappe | About</title>
      </Helmet>
      <div className="about-page__wrap-inner cf">
        <div className="about-page__left-col">
          <div className="about-page__item">
            <Intro />
          </div>
          <div className="about-page__item">
            <Staff />
          </div>
        </div>

        <div className="about-page__right-col">
           <div className="about-page__item">
             <Skills />
           </div>
           <div className="about-page__item">
             <Testimonials />
           </div>
           <div className="about-page__item">
             <Services />
           </div>
        </div>
      </div>
    </div>
  )
}

export default About
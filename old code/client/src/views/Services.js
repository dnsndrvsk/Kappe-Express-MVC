import React from 'react'
import { Helmet } from 'react-helmet'
import ServicesList from '../components/ServicesList'
import WhyUs from '../components/WhyUs'
import '../styles/views/Services.scss'

const Services = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Kappe | Services</title>
      </Helmet>
      <div className="services-page__wrap-inner">
        <h1 className="services-page__header">
          Our Services
        </h1>
        <p className="services-page__text">
          Quis magni commodi iste illo, necessitatibus. Minus dignissimos veniam sit eos architecto alias vel nostrum. Quo aperiam non veritatis, quasi voluptatum officiis dolores voluptas quis molestias. Et eaque, magnam rem! Quos dolor, modi quis nemo repudiandae ipsam labore non, ipsum officia similique odio ullam facere hic voluptate. Atque fugiat, culpa magnam maiores error quibusdam molestiae rerum incidunt odit, delectus mollitia. At obcaecati placeat, architecto illum ex commodi, repudiandae eum autem debitis perferendis sit, libero accusantium aperiam et rerum. Voluptatem eius debitis reprehenderit natus amet provident error autem, accusamus ad. Unde. Ea quos placeat recusandae sint beatae inventore quasi ipsum suscipit iste, soluta non est repellat vel nisi aliquam laboriosam rerum dolorem officiis perferendis voluptatem. Odio expedita alias fuga error animi.
        </p>
        
        <ServicesList />
        <WhyUs />
      </div>
    </div>
  )
}

export default Services

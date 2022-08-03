import React from 'react'

import { GladePay } from './index'

const Hero = ({ GladepayProps }) => {
  return (

    <section id='home' className="d-flex align-items-center">
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <div className="row">
          <div className="col-xl-6">
            <h1>Making the world a meaningful place</h1>
            <h2>We are a foundation aimed at supporting individuals affected by COVID-19</h2>
            <GladePay GladepayProps={GladepayProps} text="Donate Now" className="btn-get-started scrollto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
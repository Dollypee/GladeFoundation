import React from 'react'
import { Element } from 'react-scroll'

const Hero = () => {
  return (
  
    <section id='home' className="d-flex align-items-center">
            {/* <Element name='home'> */}


  <div className="container" data-aos="zoom-out" data-aos-delay="100">
    <div className="row">
      <div className="col-xl-6">
        <h1>Making the world a meaningful place</h1>
        <h2>We are a foundation aimed at supporting individuals affected by COVID-19</h2>
        <a href="#about" className="btn-get-started scrollto">Donate Now</a>
      </div>
    </div>
  </div>
    {/* </Element> */}
</section>
  )
}

export default Hero
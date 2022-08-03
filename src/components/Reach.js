import React from 'react'
import Globe from '../assets/img/continents/Continent.webp'
import GladePay from './GladePay'

const Reach = ({ GladepayProps}) => {
  return (
    <section id="reach" className="reach">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Our Reach</h2>
          <p>We've covered over 50 countries across the globe.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-7 mx-auto text-center">

            <img className='img-fluid' src={Globe} alt="" />
            <GladePay GladepayProps={GladepayProps} className="donate-btn mt-3" text="Donate Now" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Reach
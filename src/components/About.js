import React from 'react'
import {GladePay} from './index'

const About = ({ GladepayProps}) => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>Welcome to Glade Foundation</h3>
              <p>
                We are a world wide charity foundation meeting needs all over the world and specifically those affected by the Covid 19
              </p>
              {/* <button className="about-btn">Donate Now</button> */}
              <GladePay GladepayProps={GladepayProps} text="Donate Now" className="about-btn" />
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>School Fees Support</h4>
                  <p>We support those affected by the pandemic with donation received</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Medical Support</h4>
                  <p>We support those affected by the pandemic with donation received</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-shield"></i>
                  <h4>Emergency Aids</h4>
                  <p>We support those affected by the pandemic with donation received</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-cube"></i>
                  <h4>Remove Poverty</h4>
                  <p>We support those affected by the pandemic with donation received</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
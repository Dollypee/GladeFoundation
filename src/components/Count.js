import React from 'react'

const Count = () => {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span className="purecounter">4k+</span>
              <p>People Reached</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span className="purecounter">50+</span>
              <p>Countries Reached</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span className="purecounter">1400+</span>
              <p>Sponsors</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span className="purecounter">200+</span>
              <p>Volunteers</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Count
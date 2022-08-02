import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Requests</h2>
        <p>You can leave us a request for support for your school fees or medical bills.</p>
      </div>

      <div className="row" data-aos="fade-up" data-aos-delay="100">

        <div className="col-lg-6">

          <div className="row">
            <div className="col-md-12">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>
                  Vitoria Island Street <br />
                  Lagos.<br />
                  Nigeria <br />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box mt-4">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>info@gladefoundation.com<br /></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box mt-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+234 800 000 0000<br /></p>
              </div>
            </div>
          </div>

        </div>

        <div className="col-lg-6">
          <form className="php-email-form">
            <div className="row">
              <div className="col form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Request</button></div>
          </form>
        </div>

      </div>

    </div>
    </section>
  )
}

export default Contact
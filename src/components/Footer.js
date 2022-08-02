import React from 'react'

const Footer = () => {

  return (
    <>
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-6 footer-contact">
                <h3>Glade<span>F</span></h3>
                <p>
                  Vitoria Island Street <br />
                  Lagos.<br />
                  Nigeria <br /><br />
                  <strong>Phone:</strong> +234 800 000 0000<br />
                  <strong>Email:</strong> info@gladefoundation.com<br />
                </p>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#contact">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
                </ul>
              </div>


              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Subscribe to our newsletter. You can also volunteer to be a part of the team.</p>
                <form>
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">

          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>Glade Foundation</span></strong>. All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
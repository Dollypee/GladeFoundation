import React from 'react'
// import { Link } from 'react-router-dom';
import Scroll from 'react-scroll'
let Link = Scroll.Link;



const Navbar = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href="/">Glade<span>F</span></a></h1>
        {/* <a href="/" className="logo me-auto"><img src="assets/img/gladelogo.svg" alt=""></a>   */}

        <nav id="navbar" className="navbar order-last order-lg-0">
      
          <ul>
            <li>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} className="nav-link scrollto active" >
          Home
        </Link>
              {/* <a className="nav-link scrollto active" href="#hero">Home</a> */}
            </li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#testimonials">Reviews</a></li>
            <li><a className="nav-link scrollto" href="#contact">Requests</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="#about" className="get-started-btn scrollto">Donate</a>
      </div>
    </header>


  )
}

export default Navbar
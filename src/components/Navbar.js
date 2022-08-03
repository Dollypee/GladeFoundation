import React from 'react'
import Scroll from 'react-scroll'

import { GladePay } from '../components';

let Link = Scroll.Link;



const Navbar = ({ GladepayProps }) => {

  const scroll = (id) => {
    const section = document.querySelector( id );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href="/">Glade<span>F</span></a></h1>
        {/* <a href="/" className="logo me-auto"><img src="assets/img/gladelogo.svg" alt=""></a>   */}

        <nav id="navbar" className="navbar order-last order-lg-0">

          <ul>
            <li>
              <Link className="nav-link scrollto active" onClick={()=>scroll('#home')} >
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" onClick={()=>scroll('#about')}>About</Link>
            </li>
            <li>
              <Link className="nav-link scrollto" onClick={()=>scroll('#testimonials')}>Reviews</Link>
            </li>
            <li>
              <Link className="nav-link scrollto" onClick={()=>scroll('#contact')}>Requests</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <GladePay GladepayProps={GladepayProps} className="get-started-btn scrollto border-0" text="Donate" />

      </div>
    </header>


  )
}

export default Navbar
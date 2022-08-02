import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './assets/css/style.css'

import {GladepayButton}   from 'react-gladepay-2';


import { Navbar, Hero, Continents, About, Count, Testimonials, Contact, Reach, Footer } from "./components"

function App() {
  const [active, setActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [paymentDetails, setPaymentDetails] = useState({
    MID: process.env.MERCHANT_ID, //Gladepay Merchant ID
    email: "demo@gmail.com",  // customer email
    amount: 1000000, //equals NGN100,
    is_production: false, //is_production,
    key: process.env.KEY
  });

  const callback = (response) => {
    console.log(response); // card charged successfully, get reference here
  }

  const close = () => {
    console.log("Payment closed");
  }


  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollPosition > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
  }, [scrollPosition]);




  const handleScroll = event => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  return (
    <>
      <Navbar />
      <main onScroll={handleScroll}>
        <Hero />
        {/* <GladepayButton
          text="Make Payment"
          className="payButton"
          callback={callback}
          onClose={close}
          disabled={true} //disable payment button
          embed={true} //payment embed in your app instead of a pop up
          email={paymentDetails.email}
          amount={paymentDetails.amount}
          MID={paymentDetails.MID}
          tag="button"//it can be button or a or input tag 
        /> */}
        <Continents />
        <About />
        <Count />
        <Reach />
        <Testimonials />
        <Contact />
        <Footer />
        <a href="/" className={active ? 'back-to-top active d-flex align-items-center justify-content-center' : 'back-to-top d-flex align-items-center justify-content-center'}><i className="bi bi-arrow-up-short"></i></a>
      </main>

    </>
  );
}

export default App;

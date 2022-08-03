import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './assets/css/style.css';



import { Navbar, Hero, Continents, About, Count, Testimonials, Contact, Reach, Footer } from "./components"


function App() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);


  const callback = (response) => {
    console.log(response); // card charged successfully, get reference here
  }

  const close = () => {
    console.log("Payment closed");
  }

  const [paymentDetails, setPaymentDetails] = useState({
    firstname: "Sponsor1",
    lastname: "Support",
    description: "Sponsor Glade Foundation", title: "Glade Foundation",
    amount: 1000000,
    onclose: close,
    callback: callback,
    country: "NG",
    currency: "NGN",
    is_production: false, //is_production,
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar GladepayProps={paymentDetails} />
      <main>
        <Hero GladepayProps={paymentDetails} />
        <Continents />
        <About GladepayProps={paymentDetails} />
        <Count />
        <Reach GladepayProps={paymentDetails} />
        <Testimonials />
        <Contact />
        <Footer />
        <button
          onClick={scrollToTop} className={visible ? 'back-to-top active d-flex align-items-center justify-content-center' : 'back-to-top d-flex align-items-center justify-content-center'}>
          <i className="bi bi-arrow-up-short"></i>
        </button>
      </main>

    </>
  );
}

export default App;

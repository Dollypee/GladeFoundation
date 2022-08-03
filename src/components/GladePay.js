import React, { useEffect } from 'react'

const GladePay = ({ GladepayProps, className, text }) => {

  const { email, firstname, lastname, description, title, amount, onclose, callback, country, currency } = GladepayProps;

  let src = 'https://demo.api.glade.ng/checkout.js'


  useEffect(() => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;

      document.body.appendChild(script);

  }, [src]);

  function clean(obj) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  }

  const callGladepaySDK = (gladepayArgs) => {
    const handler = window.gladepaySDK && window.gladepaySDK.initialize(gladepayArgs);
    handler && handler.loadIframe(gladepayArgs);
  };

  const makePayment = () => {
    try {
      const gladepayArgs = {
        MID: process.env.REACT_APP_MERCHANT_ID,
        email: email,
        firstname: firstname,
        lastname: lastname,
        description: description,
        title: title,
        amount: amount,
        country: country,
        currency: currency,
        metadata: {},
        logo: '',
        bearer: '',
        recurrent: null,
        installment: null,
        split: null,
        'data-custom-button': '',
        onclose: onclose,
        callback: callback,
      };
      callGladepaySDK(clean(gladepayArgs));
      window.initPayment(gladepayArgs);
    } catch (error) {
      console.log(error)
    }
   
  };
  
  return (
    <button className={className} onClick={() => makePayment()}>{ text}</button>
  )
}

export default GladePay
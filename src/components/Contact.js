import React, {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState(0);
  const [requestMessage, setRequestMessage] = useState('');

  const clearFields = () => {
    setName('');
    setEmail('');
    setPhone('');
    setRequest(0);
    setRequestMessage('');
  }

  const handleSubmit = () => {
    try {
      if (name === '' || email === '' || phone === '' || request === 0 || requestMessage === '') {
        toast.error('Please fill all fields')
      } else {
        toast.success(`Your request is being processed`);
        clearFields();
       }
        
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
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
                    <input type="text"
                      value={name}
                onChange={(e)=> setName(e.target.value)}      name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
           
                <div className="col form-group">
                    <input type="tel"
                 value={phone}
                onChange={(e)=> setPhone(e.target.value)}       className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
              </div>
              </div>
              <div className="row">
              <div className="col form-group">
                    <input type="email"
                       value={email}
                onChange={(e)=> setEmail(e.target.value)} className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
            <div className="form-group">
                
                  <select className="form-select"
                   value={request}
                onChange={(e)=> setRequest(e.target.value)} >
  <option value={0}>Request Type</option>
  <option value="1">Medical Support</option>
  <option value="2">School Fees</option>
  <option value="3">Others</option>
</select>
            </div>
            <div className="form-group">
                  <textarea
                     value={requestMessage}
                onChange={(e)=> setRequestMessage(e.target.value)} className="form-control" name="message" rows="5" placeholder="Please provide a request message" required></textarea>
            </div>
            <div className="text-center"><button type="button" onClick={handleSubmit}>Request</button></div>
          </form>
        </div>

      </div>

    </div>
    </section>
    </>

  )
}

export default Contact
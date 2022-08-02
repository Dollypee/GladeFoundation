import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import testimonial1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonial3 from '../assets/img/testimonials/testimonials-3.jpg';
import testimonial4 from '../assets/img/testimonials/testimonials-4.jpg';
import testimonial5 from '../assets/img/testimonials/testimonials-5.jpg';

const Testimonials = () => {
  SwiperCore.use([Autoplay])

  return (
    <section id="testimonials" className="testimonials section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Reviews</h2>
        <p>What some of our donors say</p>
      </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          
      <Swiper    className="align-items-center"
            modules={[Navigation, Pagination, A11y]}
            // spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}>
            <SwiperSlide className='swiper-slide'>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src={testimonial1} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Donor 1</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Seeing how your little giving can go a long way in meeting the needs of many people is just so amazing. Keep up the good work Glade Foundation.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src={testimonial2} className="testimonial-img" alt="" />
                <h3>Sara Wilson</h3>
                <h4>Donor 2</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Seeing how your little giving can go a long way in meeting the needs of many people is just so amazing. Keep up the good work Glade Foundation.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src={testimonial3} className="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Donor 3</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Seeing how your little giving can go a long way in meeting the needs of many people is just so amazing. Keep up the good work Glade Foundation.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src={testimonial4} className="testimonial-img" alt="" />
                <h3>James Jardon</h3>
                <h4>Donor 4</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Seeing how your little giving can go a long way in meeting the needs of many people is just so amazing. Keep up the good work Glade Foundation.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src={testimonial5} className="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Donor 5</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Seeing how your little giving can go a long way in meeting the needs of many people is just so amazing. Keep up the good work Glade Foundation.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
              </div>
              </SwiperSlide>
          
      </Swiper>
      </div>

    </div>
    </section>
  )
}

export default Testimonials
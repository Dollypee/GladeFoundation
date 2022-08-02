import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Africa from '../assets/img/continents/africa.webp'
import Asia from '../assets/img/continents/asia.webp'
import Europe from '../assets/img/continents/europe.webp'
import NorthAmerica from '../assets/img/continents/northamerica.jpg'
import SouthAmerica from '../assets/img/continents/southamerica.jpg'
import Oceania from '../assets/img/continents/oceania.jpg'


const Continents = () => {
  SwiperCore.use([Autoplay])
  return (
    <section id="continents" className="continents">
      <div className="container" data-aos="zoom-in">
        <div className="continents-slider">
          <Swiper
            className="align-items-center"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            // slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide className='swiper-slide'><img src={Africa} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src={Asia} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src={Europe} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src={SouthAmerica} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src={NorthAmerica} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src={Oceania} className="img-fluid" alt="" /></SwiperSlide>
           
          </Swiper>
        </div>

      </div>
    </section>
  )
}

export default Continents
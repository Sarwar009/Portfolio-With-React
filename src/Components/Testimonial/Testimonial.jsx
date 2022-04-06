import React from 'react'

import { TestimonialData } from './TestimonialData'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './testimonial.css'

const Testimonial = () => {
  return (
    <div className='section' id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial-container'
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {
          TestimonialData.map (({name, avatar, review}, index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className='client-avatar'>
                  <img src={avatar} alt='avtr1' />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Testimonial
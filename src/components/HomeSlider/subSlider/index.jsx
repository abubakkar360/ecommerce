import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import nature_1 from "../../../assets/img/coverflow/nature-1.jpg"
import nature_2 from "../../../assets/img/coverflow/nature-2.png"
import nature_3 from "../../../assets/img/coverflow/nature-3.jpg"
import nature_4 from "../../../assets/img/coverflow/nature-4.jpg"
import nature_5 from "../../../assets/img/coverflow/nature-5.jpg"
import nature_6 from "../../../assets/img/coverflow/nature-6.jpg"
import nature_7 from "../../../assets/img/coverflow/nature-7.jpg"

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
function CoverFlowSlider() {
 
     return (
    <>
        <div className="container py-[50px] ">
      <Swiper         
        slidesPerView={7}
        spaceBetween={30}
        navigation= {true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        
        className="mySwiper max-h-[300px]"
      >
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_1} />
          </Link>
        </SwiperSlide >
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_2} />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_3} />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_4} />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_5} />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_6} />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_7} />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_2} />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_3} />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='max-w-[250px]'>
          <Link>
            <img src={nature_4} />
          </Link>
        </SwiperSlide>
       
      </Swiper>
      </div>
    </>
  );
  
}

export default CoverFlowSlider

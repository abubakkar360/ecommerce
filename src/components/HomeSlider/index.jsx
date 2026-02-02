import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../HomeSlider/style.css'
import CoverFlowSlider from './subSlider';

import slider1 from "../../assets/sliderImages/slider-2.png"
import slider2 from "../../assets/sliderImages/slider-1.png"
import slider3 from "../../assets/sliderImages/imageslider-3.png"
import slider4 from "../../assets/sliderImages/slider-3.png"
import slider5 from "../../assets/sliderImages/slider-4.png"
import slider6 from "../../assets/sliderImages/slider-5.png"
import slider7 from "../../assets/sliderImages/slider-6.jpg"

import { Navigation } from 'swiper/modules';
function HomeSlider() {
  return (
    <>
        <div className="homeSlider bg-[#f5f0f0] py-4">
            <div className="container">

                <Swiper
                spaceBetween={10}
                 navigation={true} 
                 modules={[Navigation]} 
                 className="sliderHome">
                    <div className="item rounded-[10px] overflow-hidden">
                        <SwiperSlide>
                            <div className="item rounded-[10px] overflow-hidden">
                                <img className='w-full max-h-[400px]' src={slider1} alt=" slide 1" />
                            </div>
                        </SwiperSlide>
                    </div>
                        <SwiperSlide>
                            <div className="item rounded-[10px] overflow-hidden">
                                <img className='w-full max-h-[400px]' src={slider2} alt=" slide 2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item rounded-[10px] overflow-hidden">
                                <img className='w-full max-h-[400px]' src={slider3} alt=" slide 3" />
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="item rounded-[10px] overflow-hidden">
                                <img className='w-full max-h-[400px]' src={slider4} alt=" slide 4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item rounded-[10px] overflow-hidden">
                                <img className='w-full max-h-[400px]' src={slider5} alt=" slide 5" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item rounded-[10px] overflow-hidden">
                                <img className='w-full max-h-[400px]' src={slider6} alt=" slide 6" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item rounded-[10px] overflow-hidden">
                                <img className='w-full max-h-[400px]' src={slider7} alt=" slide 7" />
                            </div>
                        </SwiperSlide>
                    
                </Swiper>
            </div>
            <CoverFlowSlider/>
        </div>
    </>
  )
}

export default HomeSlider;

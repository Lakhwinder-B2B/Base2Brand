'use client'
import { useEffect } from 'react';

import React from "react";   

import sliderImages1 from '../../public/slider-img/slider1.png';
import sliderImages2 from '../../public/slider-img/slider2.png';
import Slider from "react-slick";
export default function graphicservices() {
 
const Sliders = {
        dots: true,
        arrows : false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>  
    <div className="slider wrapper mb-5"> 
        <div className="p-5 graphic-ser-head text-white">
            <h1>Project Name</h1>
            <p className="text-left m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <Slider {...Sliders} className="w-100 pt-0 pb-5 pe-0">
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
        </Slider>
    </div>

 
</>
)
}
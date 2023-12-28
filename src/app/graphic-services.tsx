'use client'
import { useEffect } from 'react';

import React from "react";   

import Graphicservicewebsite from '../../public/graphic-service-img/website.png';
import Graphicservicemobile from '../../public/graphic-service-img/mobile.png';
import Graphicservicemedia from '../../public/graphic-service-img/media.png';
import Graphicservicebranding from '../../public/graphic-service-img/branding.png';
import Graphicserviceicon from '../../public/graphic-service-img/graphic-ico.png';
export default function graphicservices() {
 
  

  return (
    <>  
    <div className="p-5 graphic-services"> 
        <div className="graphic-ser-head text-white text-center">
            <h1>Our Services</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex</p>
        </div>
            <div className="inner-create row text-white align-items-center justify-content-around">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4" data-aos="fade-left">
                    <img src={Graphicservicewebsite.src} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-2 ico-line d-flex justify-content-center">
                    <img src={Graphicserviceicon.src} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4" data-aos="flip-right">
                   <h1 className="web-head">Website design</h1>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                </div>       
            </div>

            <div className="inner-create row text-white align-items-center justify-content-around">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4" data-aos="fade-left">
                    <h1 className="web-head">Mobile App design</h1>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-2 ico-line d-flex justify-content-center">
                    <img src={Graphicserviceicon.src} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4" data-aos="flip-right">
                    <img src={Graphicservicemobile.src} alt="" />
                </div>       
            </div>

            <div className="inner-create row text-white align-items-center justify-content-around">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4" data-aos="fade-left">
                    <img src={Graphicservicemedia.src} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-2 ico-line d-flex justify-content-center">
                    <img src={Graphicserviceicon.src} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4" data-aos="flip-right">
                   <h1 className="web-head">Social Media/Video editing</h1>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                </div>       
            </div>

            <div className="inner-create row text-white align-items-center justify-content-around">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4" data-aos="fade-left">
                    <h1 className="web-head">Branding Design</h1>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                </div>
               <div className="col-12 col-sm-12 col-md-12 col-lg-2 ico-line d-flex justify-content-center">
                    <img src={Graphicserviceicon.src} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4" data-aos="flip-right">
                    <img src={Graphicservicebranding.src} alt="" />
                </div>       
            </div>

    </div>
</>
)
}
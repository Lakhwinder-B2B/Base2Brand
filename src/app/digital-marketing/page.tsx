"use client";

import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import DigitalLogo from "../digital-marketing/digital-logo";   
import DesignWork from "../digital-marketing/design-work";   
import ProjectSlick from "../../app/services/project-slick";   
import NeedHere from "../digital-marketing/needhere";   
import OurClient from "../digital-marketing/our-client";   

import Feedback from "../feedback"; 
import Faq from "../services/faq";   
import Typewriter from "typewriter-effect";
import '../digital-marketing/digital.css'

import marketing_img from '../../../public/marketing-img/marketing.png';

export default function marketing() {

  return (
    <>
      <Header />
      <div className="bg_home pt-5 pb-5">
        <div className="gifbanner">
        <div className="container mx-auto pt-4 pb-5">
          <div className="row align-items-center"> 
            <div className="col-md-6 heading_lable" data-aos="fade-up">
              <Typewriter
                options={{
                  strings: ["Digital Marketing"],
                  autoStart: true,
                  loop: true,
                }}
              /> 

              <h5 className="digital_desc text-white mt-1 mb-5">
              Base2Brand Digital Marketing Agency, a flexible and versatile digital marketing agency, is not dependent on smoke and mirrors in order to attract new clients. 
              </h5>
              <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
            </div>
            <div className="col-md-6">
            <img className='marketing w-100' src={marketing_img.src} alt="" />  
            </div>
          </div>
        </div> 
        </div>
        <DigitalLogo />
        <DesignWork />
        <NeedHere />
        <OurClient />
         <ProjectSlick />
        <Feedback />
        <Faq />
        <Footer />
       
      </div>
    </>
  );
}

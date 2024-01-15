"use client";

import React from "react";
import Header from "../../../component/header";
import Appdevelopment from "../../../src/app/mobile-application/app-development";
import OurService from "../../../src/app/mobile-application/our-service";
import Technologystack from "../../../src/app/mobile-application/technologystack";
import Feedback from "../feedback"; 
import Faq from "../../../src/app/faq";
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import banner from '../../../public/mobile/banner.png';   
import Typewriter from 'typewriter-effect';
import "../mobile-application/mobile.css";

export default function marketing() {
 
  return (
    <>
      <Header />
      <div className="bg-black pt-0 pb-5">
        <div className="mobilebanner pt-5"  style={{
      backgroundImage: `url(${banner.src})`,
      width: '100%',
      height: '900px',  
      backgroundSize: 'cover',
      position: 'relative',
      backgroundColor:' #000',
    }}>
         <div className="row w-100 pl-5"> 
         <div className="col-md-6 pl-5 text-white" data-aos="fade-left">
         <Typewriter 
                options={{
                  strings: ['Mobile application'],
                  autoStart: true,
                  loop: true,
                }}
              /> 
            <p className="mb-5 mt-4 army">Our army of developers and designers have demonstrated <br /> capabilities in iOS app development. Our creations are helping iPad <br /> and iPhone users with apps that automate every kind of job related <br /> to business and personnel lifestyle.</p>
            <button className="btn btn-outline-primary m-0"> 
            {/* <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i>  */}
            Request a Quote </button>
         </div>  
        </div>
        </div>
        <Appdevelopment />
        <OurService />
        <Technologystack />
        <Feedback/>
        <Faq/>
        <Quote/>
      
        <Footer />
       
      </div>
    </>
  );
}


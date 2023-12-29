"use client";

import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Feedback from "../feedback";
import Patner from "../services/patner";
import ProjectSlick from "../services/project-slick";
import Development from "../services/development";
import DevCompany from "../services/dev-company";
import ShopifyProcess from "../services/shopify-process";
import Faq from "../services/faq";
import gif from '../../../public/services-img/gif.gif';   
import Typewriter from "typewriter-effect";
export default function services() {

  return (
    <>
      <Header />
      <div className="bg_home pt-0">
        <div className="gifbanner" style={{
      backgroundImage: `url(${gif.src})`,
      width: '100%',
      height: '850px',
      display:'flex', 
      backgroundSize: 'cover',
      position: 'relative',
    }}>

    
        <div className="container mx-auto pt-4 pb-5">
          <div className="row align-items-center"> 
            <div className="col-md-12 text-center heading_lable" data-aos="fade-up">
              <Typewriter
                options={{
                  strings: ["Shopify"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <h2>Partner Agency</h2>

              <h3 className="text-white mt-1">
              Sell where everyone scrolls, searches, and shops
              </h3>
               
            </div>
          </div>
        </div> 
        </div>
        <Patner />
        <Development /> 
        <ProjectSlick />
        <DevCompany />
        <ShopifyProcess />
        <Feedback />
        <Faq />
        <Footer />
     </div>
    </>
  );
}

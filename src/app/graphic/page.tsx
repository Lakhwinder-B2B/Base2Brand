"use client";

import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Creative from "../creative";
import Graphicservices from "../graphic-services";
import UiUx from "../ui-ux";
import Slider from "../graphic-slider";
import Slider2 from "../graphic-slider2";
import Slider3 from "../graphic-slider3";
import Client from "../client";
import Feedback from "../feedback"; 
import Faq from "../services/faq";   
import Quote from "../request-quote";
import '../graphic/graphic.css'

import Graphicbg from '../../../public/graphic-bg/graphic.png'; 

export default function graphic() {

  return (
    <>
      <Header />
      <div className="bg_home pt-5 pb-5">
        <div className="graphic-banner">
          <div className="container mx-auto pt-4 pb-5">
            <div className="row align-items-center"> 
              <div className="col-sm-12">
                  <img className="banner-bg" src={Graphicbg.src} alt="" />
              </div>
            </div>
          </div> 
        </div>
        <Creative/>
        <Graphicservices/>
        <UiUx/>
        <Slider/>
        <Slider2/>
        <Slider3/>
        <Client/>
        <Feedback />
        <Faq />
        <Quote/>
        <Footer />
       
      </div>
    </>
  );
}

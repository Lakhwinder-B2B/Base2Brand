"use client";

import React from "react";
import Header from "../../../component/header";
import About from "../../../public/about-img/about.png"
import Feedback from "../feedback"; 
import Faq from "../../../src/app/faq";
import Quote from "../request-quote";

import Footer from "../../../component/footer";

import "../about/about.css";

export default function marketing() {
 
  return (
    <>
      <Header />
      <div className="bg_home pt-5 pb-5">
         <div className="row"> 
            <div className="d-flex flex-wrap justify-content-center">
              <h1 className="fs-3 font-light w-100 text-center web-head">SMART IDEAS FOR YOUR BRAND ARE HERE.</h1>
              <p className="w-100 text-center text-white">We blend incredible Design and Development Skills with phenomenol Digital Marketing techniques to furnish your brand with the online solutions you deserve</p>
              <button className="btn btn-outline-primary m-0"> Request a Quote </button>
            </div>
            <div className="about-ig=mg">
              <img src={About.src} alt="" />
            </div>
        </div>

        <Feedback/>
        <Faq/>
        <Quote/>
      
        <Footer />
       
      </div>
    </>
  );
}


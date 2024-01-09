"use client";

import React from "react"; 
import Header from "../../../component/header";
import AboutMask from "../../../public/about-img/about-mask.png";
import About from "../../../public/about-img/about.png"
import About1 from "../../../public/about-img/about1.png"
import About2 from "../../../public/about-img/about2.png"
import AboutColumns from "../../../src/app/about-columns"
import Team from "../.././app/team"
import Quote from "../request-quote";
import Footer from "../../../component/footer";
import "../about/about.css";
 

export default function marketing() {

  

  return (
    <>
      <Header />
        <div className="bg_home pt-0 pb-5">
          <div className="about-mask pt-5" style={{backgroundImage: `url(${AboutMask.src})`,width: '100%',height: '100%',}}>
          <div className="row mb-5 m-0"> 
              <div className="d-flex flex-wrap justify-content-center col-12 col-sm-12 col-md-6 m-auto mb-4">
                <h1 className="fs-3 font-light w-100 text-center web-head mb-4">SMART IDEAS FOR YOUR BRAND ARE HERE.</h1>
                <p className="w-100 text-center text-white mb-4">We blend incredible Design and Development Skills with phenomenol Digital Marketing techniques to furnish your brand with the online solutions you deserve</p>
                <button className="btn btn-outline-primary m-0 mb-4"> Request a Quote </button>
              </div>
              <div className="about-img col-12 col-sm-10 col-md-10 m-auto justify-content-center d-flex">
                <img src={About.src} alt="" />
              </div>
            </div>
            </div>
            <div className="container">
              <div className="row mt-5 mb-5 d-flex flex-wrap justify-content-start align-items-center"> 
                <div className="about-img col-12 col-sm-12 col-md-6 m-auto justify-content-start d-flex">
                  <img src={About1.src} alt="" />
                </div>
                <div className="d-flex flex-wrap justify-content-start align-items-center col-12 col-sm-12 col-md-6 mb-4">
                  <h1 className="fs-3 font-light w-100 text-white text-left">Who are we?</h1>
                  <p className="w-100 text-white font-light text-left mb-5">Base2Brand is one of the rapidly expanding website development and digital marketing companies in the country with offices in India and Canada. Our teams of professionals have constantly delivered distinguished and exceptional results by combining together creative ideas with extensive experience.
                    <br/><br/>
                    Here at Base2Brand, we particularize in providing results-oriented integrated online marketing solutions for medium and large businesses across the globe. We facilitate businesses to build a sustainable and expressive association with clients. Experts at Base2Brand have the requisite talent and creativity to provide you with a Professional Online Marketing Strategy.</p>
                    <button className="btn btn-outline-primary m-0"> Request a Quote </button>
                </div>
              </div>
            </div>

            <div className="row mb-5 mt-5 m-0"> 
                <div className="d-flex flex-wrap justify-content-center col-12 col-sm-12 col-md-6 m-auto mb-4 mt-5 pt-5">
                  <h1 className="fs-3 font-light w-100 text-center text-white mb-4">Implementing the famous proverb</h1>
                  <p className="w-100 text-center text-white">“Do not be wise in words, be wise in deeds”, we believe that results speak for themselves!</p>
                </div>
                <div className="about-img col-12 col-sm-10 col-md-10 m-auto justify-content-center d-flex">
                  <img src={About2.src} alt="" />
                </div>
            </div>
          
            <div className="row mb-5 mt-5 about-bg-mask m-0 pt-5 pb-5"> 
                <div className="d-flex flex-wrap justify-content-center col-12 col-sm-12 col-md-6 m-auto mb-4">
                  <h1 className="fs-3 font-light w-100 text-center text-white mb-4">Why Work with us</h1>
                </div>
                <div className="about-img col-12 col-sm-10 col-md-10 m-auto justify-content-center d-flex">
                 <div className="container">
                    <ul className="d-flex flex-wrap justify-content-center gap-10">
                      <li className="p-3 text-white text-center">OUR TEAM OF EXPERTS</li>
                      <li className="p-3 text-white text-center">GET CLARITY AND FOCUS</li>
                      <li className="p-3 text-white text-center">ENGAGE WITH THE RIGHT AUDIENCE</li>
                      <li className="p-3 text-white text-center">THE RIGHT MESSAGE</li>
                      <li className="p-3 text-white text-center">INCREASE BRAND</li>
                      <li className="p-3 text-white text-center">BEST SPEED</li>
                    </ul>
                  </div>
                </div>
            </div>
          
          <AboutColumns/>
          <Team/>
          <Quote/>
          <Footer />
        </div>
      </>
  );
}


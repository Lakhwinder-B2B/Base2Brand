"use client";

import { React, useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Quote from "../../../public/services2-img/quote-ico.png"
import Bg from '../../../public/services2-img/service-mask.png'
import '../services2/services2.css'

import 'aos/dist/aos.css';
import AOS from 'aos';

export default function graphic() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])


  return (
    <>
      <Header />
      <div className="bg_home p-0">
        <div className="service-banner p-5" style={{backgroundImage: `url(${Bg.src})`,width: '100%',height: '100%',}}>
          <div className="container mx-auto">
            <div className="row col-12 col-sm-9 d-flex flex-wrap align-items-center justify-content-center m-auto"> 
              <div className="col-sm-12 d-flex flex-wrap align-items-center justify-content-center" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500">
                 <h1 className="text-center mb-3 pt-5">Do you want to take your business to the next level and don't know how?</h1>
                 <p className="text-white col-12 col-sm-8 m-auto">Let’s Build something Digital together Web Mobile Marketing Leading Innovative Partner for Start-ups and Enterprises</p>
                 <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100"><button className="btn btn-outline-primary m-0"> Request a Quote <img className="ico" src={Quote.src} alt="" /></button></div>
              </div>
            </div>
          </div> 
        </div>
       
        <Footer />
       
      </div>
    </>
  );
}

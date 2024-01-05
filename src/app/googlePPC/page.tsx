"use client";

import React from "react";
import Header from "../../../component/header";
import GooglePPC from "../../../public/googlePPC-img/googlePPC-banner.png";
import PPCMask from "../../../public/googlePPC-img/ppc-mask.png";
import Tabs from "../../../src/app/tab";
import Revenue from "../../../src/app/revenue";
import PPC from "../../../src/app/ppc-section";
import Feedback from "../feedback"; 
import Faq from "../../../src/app/faq";
import Quote from "../request-quote";
import Typewriter from "typewriter-effect";
import Footer from "../../../component/footer";
import "../googlePPC/googleppc.css"


export default function marketing() {
  const myStyle = {
    backgroundImage: `url(${ PPCMask })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <>
      <Header />
      <div className="bg_home pt-5 pb-5">
        <div className="google"  style={{ backgroundImage:`url(${PPCMask})` }}>
        <div className="container mx-auto pt-4 pb-5">
          <div className="row align-items-center"> 
            <div className="col-12 heading_lable d-flex flex-wrap justify-content-center" data-aos="fades-up">
              

              <p className="ppc_desc text-white text-center col-12 col-sm-8 mt-1 mb-5">
              Hoping to employ a Mohali SEO organization? Get page 1 outcomes with Base to Brand’s SEO services. Our SEO specialists will get you the outcomes you need to develop your business.
              </p>
              <img className='marketing w-100' src={GooglePPC.src} alt="" /> 
              <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
            </div>
            
          </div>
        </div> 
        </div>
        {/* <Tabs/> */}
        <Revenue/>
        <PPC/>
        <Feedback/>
        <Faq/>
        <Quote/>
       
  
        <Footer />
       
      </div>
    </>
  );
}

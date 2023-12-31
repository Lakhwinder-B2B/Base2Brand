"use client";

import React from "react";
import Header from "../../../component/header";
import Audience from "../../../src/app/audience";
import Feedback from "../feedback"; 
import Faq from "../../../src/app/faq";
import Quote from "../request-quote";
import Footer from "../../../component/footer";
import "../youtube/youtube.css"


export default function marketing() {
 
  return (
    <>
      <Header />
      <div className="bg_home pt-5 pb-5">
        <div className="youtube mb-4">
            <div className="banner-video position-relative d-flex flex-wrap justify-content-center align-items-end" data-aos="fades-up" data-aos-anchor-placement="top-bottom">
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/tgbNymZ7vqY?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
          </div>

        </div> 
        <Audience/>
   
        <Feedback/>
        <Faq/>
        <Quote/>
      
        <Footer />
       
      </div>
    </>
  );
}

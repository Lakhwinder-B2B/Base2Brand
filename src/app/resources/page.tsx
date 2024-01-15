"use client";

import  React  from "react";
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer"; 
import Resource from "../../../src/app/resource-columns";
import ResourceTabs from "../../../src/app/resource-tab"
import Feedback from "../feedback"; 
import Faq from "../services/faq";   
import Quote from "../request-quote";   
import "../resources/resoures.css";
import Typewriter from 'typewriter-effect';
import Writer from '../../../public/resources/writer.png';

export default function resources() { 

  return (
    <>
      <Header />
      <div className="bg-black pt-5 pb-0">
        <div className="graphic-banner">
          <div className="mx-auto pt-4 pb-5">
            <div className="row align-items-center m-0 pr-1 pl-1"> 
                <div className="col-12 col-sm-12 col-md-6 text-white mb-5 mb-md-0" data-aos="flip-left">
                <Typewriter 
                options={{
                  strings: ['Resources'],
                  autoStart: true,
                  loop: true,
                }}
              /> 
               <p className="mt-4 mb-5">Outsource Your Web Development to Build a Great and Engaging Website</p>
               <button className="btn btn-outline-primary m-0"> Request a Quote </button>
                </div>
                <div className="col-12 col-sm-12 col-md-6" data-aos="flip-right">
                  {/* <div className="d-flex flex-row-reverse position-relative align-items-end">
                    <div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active mt-4 w-100 d-flex flex-wrap justify-content-between" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Content Writer <i className="fa fa-chevron-up"></i></button>
                        <button className="nav-link w-100 mt-4 d-flex flex-wrap justify-content-between" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Shopify Developer <i className="fa fa-chevron-up"></i></button>
                        <button className="nav-link w-100 mt-4 d-flex flex-wrap justify-content-between" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">UX/UI Designer <i className="fa fa-chevron-up"></i></button> 
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <img src={Writer.src} className="writer" alt="" />
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <img src={Writer.src} className="writer" alt="" />
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <img src={Writer.src} className="writer" alt="" />
                        </div> 
                    </div>
                  </div> */}



                  <div className="d-flex flex-wrap justify-content-end position-relative align-items-end flip-slide">
                    
                    <div className="col-12 col-sm-12 col-md-4 col-xl-2 item d-flex flex-wrap justify-content-center text-white" data-order="content">
                      <div className="d-flex justify-content-between align-items-center rotate w-100 px-3">Content Writer <i className="fa fa-chevron-up"></i></div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-xl-2 item d-flex flex-wrap justify-content-center text-white" data-order="content">
                    <div className="d-flex justify-content-between align-items-center rotate w-100 px-3">Shopify Developer <i className="fa fa-chevron-up"></i></div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-xl-2 item d-flex flex-wrap justify-content-center text-white" data-order="content">
                    <div className="d-flex justify-content-between align-items-center rotate w-100 px-3">UX/UI Designer <i className="fa fa-chevron-up"></i></div>
                    </div>
                  </div>
                </div>
            </div>
          </div> 
        </div> 
        <Resource/>
        <ResourceTabs/>
        <Feedback />
        <Faq />
        <Quote/>
        <Footer />
       
      </div>
    </>
  );
}

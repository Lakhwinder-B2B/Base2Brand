'use client'
import { useEffect } from 'react';

import React from "react"; 
import seo from '../../public/img/seo.png';  
import social from '../../public/img/social.png';  
import online from '../../public/img/online.png'; 
import digital from '../../public/img/digital.png';  
import servicetab from '../../public/img/servicetab.png';  
import servicetab1 from '../../public/img/servicetab1.png';  
import servicetab2 from '../../public/img/servicetab2.png';  
import './project.css'

export default function home() {
 
  

  return (
    <>  
      <div className="container-fluid p-4 pb-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5"  >
            <h2 className="heading">Our Services</h2>
          </div>
          
          <div className="row">
            <div className="col-md-6"  >
          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <li className="nav-item" role="presentation">
            <a className="nav-link active project" id="pills-digital-tab" data-bs-toggle="pill" data-bs-target="#pills-digital" type="button" role="tab" aria-controls="pills-digital" aria-selected="true">             
              <h2>Digital Marketing</h2>
                <div className="d-flex justify-content-between">
                <div className="tabs_link"> <img className="icon_seo" src={seo.src} alt="Search Engine Optimization" /> Search Engine Optimization   </div>
                <div className="tabs_link"><img className="icon_seo" src={online.src} alt="Online Reputation Management" /> Online Reputation Management   </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="tabs_link"> <img className="icon_seo" src={social.src} alt="Social Media Management" /> Social Media Management   </div>
                  <div className="tabs_link"> <img className="icon_seo" src={social.src} alt="Social Media Management" /> Social Media Management   </div> 
                </div>
              </a>
          </li>
          <li className="nav-item mt-4" role="presentation">
            <a className="nav-link " id="pills-Commerce-tab" data-bs-toggle="pill" data-bs-target="#pills-Commerce" type="button" role="tab" aria-controls="pills-Commerce" aria-selected="false"> 
            <h2>ECOMMERCE</h2>
                <div className="d-flex justify-content-between">
                <div className="tabs_link"> <img className="icon_seo" src={seo.src} alt="Search Engine Optimization" /> Magneto Development   </div>
                <div className="tabs_link"><img className="icon_seo" src={online.src} alt="Online Reputation Management" /> Woo Commerce Development  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="tabs_link"> <img className="icon_seo" src={social.src} alt="Social Media Management" /> Shopify Development   </div>
                  <div className="tabs_link"> <img className="icon_seo" src={social.src} alt="Social Media Management" /> Open cart Development   </div> 
                </div>
            </a>
          </li>
          <li className="nav-item mt-4" role="presentation">
            <a className="nav-link " id="pills-Graphic-tab" data-bs-toggle="pill" data-bs-target="#pills-Graphic" type="button" role="tab" aria-controls="pills-Graphic" aria-selected="false"> 
            <h2>GRAPHIC DESIGN</h2>
                <div className="d-flex justify-content-between">
                <div className="tabs_link"> <img className="icon_seo" src={seo.src} alt="Search Engine Optimization" /> Website Redesign   </div>
                <div className="tabs_link"><img className="icon_seo" src={online.src} alt="Online Reputation Management" /> Video Animation </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="tabs_link"> <img className="icon_seo" src={social.src} alt="Social Media Management" /> Responsive Web Design   </div>
                  <div className="tabs_link"> <img className="icon_seo" src={social.src} alt="Social Media Management" /> Mobile app designing   </div> 
                </div>
            </a>
          </li>
          <li className="nav-item mt-4" role="presentation">
            <a className="nav-link " id="pills-APP-tab" data-bs-toggle="pill" data-bs-target="#pills-APP" type="button" role="tab" aria-controls="pills-APP" aria-selected="false"> 
            <h2>APP DEVELOPMENT</h2>
                <div className="d-flex justify-content-between">
                <div className="tabs_link"> <img className="icon_seo" src={seo.src} alt="Search Engine Optimization" /> Android App Development   </div>
                <div className="tabs_link"><img className="icon_seo" src={online.src} alt="Online Reputation Management" />React Native Development </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="tabs_link"> <img className="icon_seo" src={social.src} alt="Social Media Management" />IOS App Development   </div>
                  <div className="tabs_link"> <img className="icon_seo" src={social.src} alt="Social Media Management" />Hybrid App Development   </div> 
                </div>
            </a>
          </li>
          </div> 
        </div>
        <div className="col-md-6"  >
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fades show active" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
  <img className="active_img w-100" src={digital.src} alt="Search Engine Optimization" />
  </div>
  <div className="tab-pane fades" id="pills-Commerce" role="tabpanel" aria-labelledby="pills-Commerce-tab">
  <img className="active_img w-75 m-auto" src={servicetab.src} alt="Search Engine Optimization" />

  </div>
  <div className="tab-pane fades" id="pills-Graphic" role="tabpanel" aria-labelledby="pills-Graphic-tab">
  <img className="active_img w-75 m-auto" src={servicetab1.src} alt="Search Engine Optimization" />

  </div>
  <div className="tab-pane fades" id="pills-APP" role="tabpanel" aria-labelledby="pills-APP-tab">
  <img className="active_img w-75 m-auto" src={servicetab2.src} alt="Search Engine Optimization" />

  </div>
  
</div>
        </div>
        </div>
        </div>
      </div> 
    </>
  )
}
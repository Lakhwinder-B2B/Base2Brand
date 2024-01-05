'use client'

import React from "react"; 
import About from "../../../public/about-img/about.png"   
import '../../../src/app/about/about.css'

export default function home() {
 
  return (
    <>  
      <div className="container-fluid p-5 pb-5"> 
          <div className="row"> 
            <div className="d-flex flex-wrap justify-center">
              <h1 className="fs-3 font-light">SMART IDEAS FOR YOUR BRAND ARE HERE.</h1>
              <p>We blend incredible Design and Development Skills with phenomenol Digital Marketing techniques to furnish your brand with the online solutions you deserve</p>
              <button className="btn btn-outline-primary m-0"> Request a Quote </button>
            </div>
            <div className="about-ig=mg">
              <img scr={About.src} alt="" />
            </div>
        </div>
      </div> 
    </>
  )
}

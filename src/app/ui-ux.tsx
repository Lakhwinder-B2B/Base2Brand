'use client'
import { useEffect } from 'react';

import React from "react";   

import UiUx from '../../public/UI-UX/UI-UX.png';

export default function graphicservices() {
 
  

  return (
    <>  
    <div className="p-5 graphic-services"> 
        <div className="graphic-ser-head text-white text-center" data-aos="fade-up">
            <h1    >How we deliver perfection with our UI & UX design services</h1>
            <p     className="w-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
        </div>
            <div className="inner-create mt-5 row text-white align-items-center justify-content-center" data-aos="fade-down">
                <div className="col-12 d-flex pt-5 justify-content-center"    >
                    <img src={UiUx.src} alt="" />
                </div>
            </div>
    </div>
</>
)
}
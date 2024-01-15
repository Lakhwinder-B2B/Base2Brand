"use client";

import React from "react";  
import banner from '../../../public/mobile/mobileimg.png';   

export default function marketing() {
 
  return (
    <> 
      <div className="container mt-5 mb-5" data-aos="zoom-in">
        <div className="text-center text-white">
            <h2 className="mb-5">Vast Mobile App Development Services <br /> We Offer</h2>
            <img src={banner.src} alt="" />
        </div>
      </div>
    </>
  );
}


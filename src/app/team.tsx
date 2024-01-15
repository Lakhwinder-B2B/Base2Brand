'use client'

import React from "react"; 
import Team1 from "../.././public/about-img/team1.png"
import Team2 from "../.././public/about-img/team2.png"
import Team3 from "../.././public/about-img/team3.png"
import Team4 from "../.././public/about-img/team4.png"
export default function home() {
   
  return (
    <>  
      <div className="container-fluid pb-2"> 
        <h1 className="text-white text-center fs-2 font-light">Our Cherished Teams</h1>
        <div className="row process bg-gray text-white mb-0 justify-content-center px-5 pb-0"> 
            <div className="justify-content-center d-flex flex-wrap align-items-center" data-aos="zoom-in">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 pb-5">
                    <img src={Team1.src} alt="" />
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3 pb-5">
                    <img src={Team2.src} alt="" />
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3 pb-5">
                    <img src={Team3.src} alt="" />
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3 pb-5">
                    <img src={Team4.src} alt="" />
                </div>

                
            </div>
        </div>
    </div>
    </>
  )
}

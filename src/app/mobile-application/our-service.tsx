"use client";

import React from "react";  
import mobile1 from '../../../public/mobile/mobile1.png';   
import mobile2 from '../../../public/mobile/mobile2.png';   
import mobile3 from '../../../public/mobile/mobile3.png';   
import Item from '../../../public/mobile/item.png';   
import Project from '../../../public/mobile/project.png';   

export default function marketing() {
 
  return (
    <> 
      <div className="container mt-5 mb-5">
         <div className="row text-white align-items-center">
            <div className="col-md-12 text-center text-white mb-5 pt-5">
                <h2>Our Services</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy tex</p>
            </div>
            <div className="col-md-6 mt-5">
                <img src={mobile1.src} className="w-75" alt="" />
            </div>
            <div className="col-md-6 mt-5">
                <h2 className="text_primary">IPHONE/IPAD APP DEVELOPMENT</h2>
                <p>Our army of developers and designers have demonstrated capabilities in iOS app development. Our creations are helping iPad and iPhone users with apps that automate every kind of job related to business and personnel lifestyle.</p>
            </div>

           
            <div className="col-md-6 mt-5">
                <h2 className="text_primary">ANDROID APP DEVELOPMENT</h2>
                <p>From social apps to large business applications, we are a team that has developed it all. Chances are you are already using an app built by us.</p>
                <p>From social apps to large business applications, we are a team that has developed it all. Chances are you are already using an app built by us.</p>
            </div>
            <div className="col-md-6 mt-5">
                <img src={mobile2.src}  className="w-75"  alt="" />
            </div>

            <div className="col-md-6 mt-5">
                <img src={mobile3.src}  className="w-50" alt="" />
            </div>
            <div className="col-md-6 mt-5">
                <h2 className="text_primary">HYBRID/HTML5 APP DEVELOPMENT</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
            </div>
            <div className="col-md-12 mt-5 mb-5">
            <button className="btn btn-outline-primary"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>

            </div>

            <div className="col-md-12 text-center mt-5">
                <h2 className="mb-5 mt-5">Mobile App Development Process</h2>
                <img src={Item.src} className="w-100 mt-5" alt="" />
            </div>
         </div>
      </div>
      <div className="ourProject text-center text-white mt-5">
        <h2 className="mt-5 pt-5">Our Cherished Projects</h2>
        <img src={Project.src} className="w-100" alt="" />
      </div>
      <div className="col-md-12 mt-5 mb-5">
            <button className="btn btn-outline-primary"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>

            </div>
    </>
  );
}


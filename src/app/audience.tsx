'use client'

import React from "react"; 
import Utube from "../../public/youtube-img/youtube.png"
export default function home() {
   
  return (
    <>  
      <div className="container-fluid pb-5"> 
        <div className="row process bg-gray text-white mb-5 justify-content-center px-5 pb-5"> 
              <div className="justify-content-between d-flex flex-wrap align-items-center">
                <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <h5 className="mb-2 font-light fs-5">Let Base2Brand do the hard work</h5>
                        <h1 className="digital-txt mb-4 font-light">Reach yourAudience with us</h1>
                        <p className="digital-para">We build Customized Strategies according to your Niche to target the exact audience you want your content to reach out to.</p>
                        <button className="btn btn-outline-primary m-0"> Request a Quote </button>
                    </div>
                  </div>

                <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                    <img src={Utube.src} alt=""/>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

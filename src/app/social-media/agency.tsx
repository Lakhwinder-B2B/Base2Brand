'use client'

import React from "react";  
import Revenue1 from "../../../public/social/agency.png"; 
import "../../app/seo/seo.css"

export default function socialmarketing() {
   
  return (
    <>  
      <div className="container-fluid p-5 mt-5"> 

        <div className="row text-white align-items-center">
            <div className="col-md-6">
                <h2 className="mb-4"> The most trusted agency in Mohali</h2>
                <p className="mb-5 lineheight">Social presence of your brand can only be as strong as the <br /> people behind it. Base2Brand has a highly skilled social media <br /> management team that can help you create the best strategy for your business.</p>
                <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
            </div>
            <div className="col-md-6">
                <img src={Revenue1.src} className="w-50 m-auto" alt="" />
            </div>
        </div>
     
      </div> 
    </>
  )
}
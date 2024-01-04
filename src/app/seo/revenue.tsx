'use client'

import React from "react"; 
import BestSeo from "../../../public/seo/best.png"
import Revenue1 from "../../../public/googlePPC-img/revenue1.png";
import Revenue2 from "../../../public/googlePPC-img/revenue2.png";
import Revenue3 from "../../../public/googlePPC-img/revenue3.png";
import Revenue4 from "../../../public/googlePPC-img/revenue4.png";

export default function revenue() {
   
  return (
    <>  
      <div className="container-fluid p-5 mt-5"> 
        <div className="row text-white mb-5"> 
          <div className="col-12 pb-5 text-center">
            <h1 className=" mb-3">Revenue growth through SEO</h1>
            <p className="col-12 col-sm-12 col-lg-7 ppc-para text-center m-auto d-flex flex-wrap">Assuming you are hoping to develop your business, a powerful Search Engine Optimization (SEO) strategy is one of the strongestROI driving inbound advanced techniques. Most of clients currently start the process by discovering items and administrations through the significant web search tools like Google, Yahoo, and Bing.</p>
          </div>
          
          <div className="col-md-3">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue1.src} alt="" />
                <h1 className="web-head">95%</h1>
                <p className="font-light">Of online experiences begin with a search engine</p>
          </div>
          </div>

          <div className="col-md-3">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue2.src} alt="" />
                <h1 className="web-head">60%</h1>
                <p className="font-light">Of people never scroll past the first search page</p>
          </div>
          </div>

          <div className="col-md-3">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue3.src} alt="" />
                <h1 className="web-head">75%</h1>
                <p className="font-light">Of clicks go to the first organic link on the page</p>
          </div>
          </div>

          <div className="col-md-3">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue4.src} alt="" />
                <h1 className="web-head">80%</h1>
                <p className="font-light">Of people with smartphones use a search engine daily</p>
          </div>
          </div>
            
        </div>

        <div className="row mt-5 pt-5">
            <div className="col-md-6 text-white mt-5">
                <h1 className="mb-5">Best SEO Executives in Mohali</h1>
                <p className="mt-4">We get that website search engine optimization (SEO) can be baffling, so at Base 2 Brand, <br /> we endeavor to make our SEO services simple.</p>
                <p className="mt-4">Our group of Mohali SEO specialists stir day by day to stay aware of the most recent <br /> patterns and procedures, just as we keep steady for over 600+ yearly updates <br /> Google makes to their inquiry calculation.</p>
                <p className="mt-4">We utilize this information to offer unsurprising and feasible development by following <br /> a very defined and straightforward interaction.</p>
                <div className="mt-5">
                <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>

                </div>
            </div>
            <div className="col-md-6 text-center">
                <img className="w-75 m-auto" src={BestSeo.src} alt="" />
            </div>
        </div>
      </div> 
    </>
  )
}

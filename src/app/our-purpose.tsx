'use client'

import React from "react"; 
import Strategy from '../../public/img/Strategy.png';   
import Execution from '../../public/img/Execution.png';   
import Optimization from '../../public/img/Optimization.png';   
import './our-project.css'

export default function home() {
 
  return (
    <>  
      <div className="container-fluid p-5 pb-5 mt-5"> 
          <div className="row text-white mb-5 pb-5"> 
          <div className="col-md-3">
            <h1>Our Purpose and Motive with Execution Techniques</h1>
          </div>
          <div className="col-md-3"   >
            <div className="purpose">
            <img className="icon_our" src={Strategy.src} alt="Product" /> 
              <h4>Our Strategy</h4>
              <p>To take ownership of any work, each team needs more than just information or inspiration – they need a specific and personal freedom to act on the results. We give attention to our clients;</p>
            </div>
          </div>

          <div className="col-md-3"   > 
            <div className="purpose">
            <img className="icon_our" src={Execution.src} alt="Product" /> 
              <h4>The Execution</h4>
              <p>To take ownership of any work, each team needs more than just information or inspiration – they need a specific and personal freedom to act on the results. We give attention to our clients;</p>
            </div>
          </div>

          <div className="col-md-3"   >
            <div className="purpose">
            <img className="icon_our" src={Optimization.src} alt="Product" /> 
              <h4>The Optimization</h4>
              <p>To take ownership of any work, each team needs more than just information or inspiration – they need a specific and personal freedom to act on the results. We give attention to our clients;</p>
            </div>
          </div>
        </div>
        <div className="row text-white mt-5 pt-5"  >
          <div className="col-md-4 text-left">
            <h1>Do not be wise in words</h1>
            <p className="mb-5 mt-4">Implementing the famous proverb “Do not be wise in words, be wise in deeds”, we believe that results speak for themselves!</p>
            <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
          </div>
          <div className="col borderLeft">
            <div className="borderGradiant position-relative">
              <h1>85%</h1>
              <p>INCREASE IN ORGANIC WEBSITE TRAFFIC</p>
            </div>
            </div> 
            <div className="col borderLeft">
            <div className="borderGradiant position-relative top-8">
              <h1>90%</h1>
              <p>MORE LEADS ONE-COMMERCE WEBSITE</p>
            </div>
            </div>
            <div className="col borderLeft">
            <div className="borderGradiant position-relative top-20">
              <h1>96%</h1>
              <p>INCREASE IN NO. OF VIEWS ON YOUTUBE</p>
            </div>
            </div>
        </div>
      </div> 
    </>
  )
}

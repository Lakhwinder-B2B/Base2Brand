'use client'
import { useEffect } from 'react';

import React from "react"; 
import work1 from '../../../public/marketing-img/w1.png';        
import work2 from '../../../public/marketing-img/w2.png';        
import work3 from '../../../public/marketing-img/w3.png';        
import work4 from '../../../public/marketing-img/w4.png';        
import '../digital-marketing/digital.css'


export default function designWork() {
 


  return (
    <>  
        <div className="p-5 "> 
    <div className="container"> 
<div className="row text-white">
    
    <div className="col-md-5 mb-4" data-aos="slide-left">
        <h2>Design that Works!</h2>
        <p className='mb-5 pr-5'>We at Base2Brand understand all aspects of eCommerce web design. The design of your website is critical to the success of selling products online.</p>
        <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
   
    </div>
    <div className="col-md-7" data-aos="slide-right">
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="workIdea">
                <img className='work mb-3' src={work1.src} alt="" />   
                    <h3 className='primary'>Idea</h3>
                    <p>An omnichannel marketing strategy is crucial to make the most of digital marketing opportunities. This will allow marketers to acquire and retain customers, and help them win more sales.</p>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="workIdea">
                <img className='work mb-3' src={work2.src} alt="" />   
                    <h3 className='primary'>Solving</h3>
                    <p>A business can be an influencer, a leader in their field who is respected by others by solving problems for their customers.</p>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="workIdea">
                <img className='work mb-3' src={work3.src} alt="" />   
                    <h3 className='primary'>Team</h3>
                    <p>What began as a small division of one man has grown to become a full-service digital marketing agency and creative service. Today, Base2Brand has a close-knit team of experts in all facets of Internet development.</p>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="workIdea">
                <img className='work mb-3' src={work4.src} alt="" />   
                    <h3 className='primary'>Research</h3>
                    <p>Research is a systematic investigation that involves the collection and documentation of information. It also includes analysis and interpretation according to appropriate methodologies.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
</>
)
}
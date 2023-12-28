'use client'
import { useEffect } from 'react';

import React from "react"; 
import logo1 from '../../../public/marketing-img/n1.png';       
import logo2 from '../../../public/marketing-img/n2.png';       
import logo3 from '../../../public/marketing-img/n3.png';       
import logo4 from '../../../public/marketing-img/n4.png';       
import logo5 from '../../../public/marketing-img/n5.png';       
import logo6 from '../../../public/marketing-img/n6.png';       
import '../digital-marketing/digital.css'


export default function needhere() {
 
  

  return (
    <>  
        <div className="p-5  "> 
    <div className="container"> 
<div className="row text-white align-items-center">
      <div className="col-md-9 mx-auto text-center">
        <h2>All You Need is Here!</h2>
        <p >To ensure that all of our digital marketing efforts are profitable, our agency uses asystematic approach. Base2Brand offers internet marketing services that can help youincrease customer acquisition and retention.</p>
      </div>
      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={logo1.src} alt="" />
            <div className="p-3 pb-5">
                <h4 className='mt-3 mb-3'>Search Engine Optimization </h4>
                <p className='font-weight-normal'>What’s the use of having a beautiful website if it can’t be discovered by the people looking for the services you offer?</p>
                <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={logo2.src} alt="" />
            <div className="p-3 pb-5">
                <h4 className='mt-3 mb-3'>YouTube Marketing </h4>
                <p className='font-weight-normal'>Your target audience spends a lot of their time watching videos on YouTube. YouTube marketing experts at our...</p>
                <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={logo3.src} alt="" />
            <div className="p-3 pb-5">
                <h4 className='mt-3 mb-3'>Content Writing</h4>
                <p className='font-weight-normal'>Content is the heart of your website. It's the basis for your SEO and why people visit it. Base2Brand will create...</p>
                <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>


      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={logo4.src} alt="" />
            <div className="p-3 pb-5">
                <h4 className='mt-3 mb-3'>PPC management</h4>
                <p className='font-weight-normal'>A data-driven PPC campaign will ensure that you reach your customers in a quick and précised manner...</p>
                <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={logo5.src} alt="" />
            <div className="p-3 pb-5">
                <h4 className='mt-3 mb-3'>Online Reputation Management</h4>
                <p className='font-weight-normal'>Our digital marketing agency in Chandigarh also offers Online Reputation Management services. We use various online reputation...</p>
                <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={logo6.src} alt="" />
            <div className="p-3 pb-5">
                <h4 className='mt-3 mb-3'>Social media Management</h4>
                <p className='font-weight-normal'>The best way to provide customer service to your existing customers and generate high quality leads for your business is by...</p>
                <a>Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
     </div> 
</div>
</div>
</>
)
}
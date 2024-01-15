'use client'

import React from "react"; 
import b1 from '../../public/img/b1.png';   
import b2 from '../../public/img/b2.png';   
import b3 from '../../public/img/b3.png';   
import b4 from '../../public/img/b4.png';   
import b5 from '../../public/img/b5.png';   
import b6 from '../../public/img/b6.png';   
import b7 from '../../public/img/b7.png';   
import b8 from '../../public/img/b8.png';      
import b9 from '../../public/img/b9.png';      
import './our-project.css'

export default function home() {
 
  return (  
    <>  
      <div className="container-fluid p-5 pb-5 mt-0 mt-md-5"> 
          <div className="row text-white  pb-5"> 
           <div className="col-md-12">
            <div className="bg_blackBrand" data-aos="fade-down">
              <h3>We work with market leaders and ambitious brands*</h3>
              <div className="logo_brand">
              <img className="logo_brand" src={b1.src} alt="Logo" /> 
              <img className="logo_brand" src={b2.src} alt="Logo" /> 
              <img className="logo_brand" src={b3.src} alt="Logo" /> 
              <img className="logo_brand" src={b4.src} alt="Logo" /> 
              <img className="logo_brand" src={b5.src} alt="Logo" />  
              </div>
              <div className="logo_brand">
              <img className="logo_brand" src={b6.src} alt="Logo" /> 
              <img className="logo_brand" src={b7.src} alt="Logo" /> 
              <img className="logo_brand" src={b8.src} alt="Logo" /> 
              <img className="logo_brand" src={b9.src} alt="Logo" />  
              </div>
            </div>
           </div>
        </div> 
      </div> 
    </>
  )
}

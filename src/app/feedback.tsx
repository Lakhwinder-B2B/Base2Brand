'use client'

import React from "react"; 
import banner from '../../public/img/feedback-banner.png';        
import name from '../../public/img/name.png';        
import blog3 from '../../public/img/blog3.png';        
import './our-project.css'

export default function home() {
 
  return (  
    <>  
      <div className="bgimg" style={{
      backgroundImage: `url(${banner.src})`,
      width: '100%',
      height: '600px',
      display:'flex',
      alignItems: 'center',
      backgroundSize: 'cover',
      position: 'relative',
    }}>
      <div className="container-fluid"> 
          <div className="row text-white"> 
              <div className="col-md-12 p-0">
     <div id="carouselExampleDark" className="carousel carousel-dark slide" > 
       <div className="carousel-inner">
        <div className="carousel-item active"  > 
        <div className="p-5 Mainslide">
         <div className="row">
          <div className="col-md-6 position-relative">
            <h2 className="feedback_heading mb-4">Cherished Feedback</h2>
            <p>Implementing the famous proverb “Do not be wise <br /> in words, be wise in deeds”, we believe that results <br /> speak for themselves!</p>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
          </div>
          <div className="col-md-6">
            <div className="bg_feedback">
              <p>B2B is fantastic! they understood our business and made <br /> great suggestions for improving our marketing plan. When you <br /> hire experts, its like having a marketing professional on staff <br /> that knows your company and product and does not need<br /> much supervision!</p>
                <div className="d-flex mt-4">
                <div className="left d-flex align-items-center">
                <img className="name_latter" src={name.src} alt="Product" />
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">John Rivera,</h3>
                    <p className="mb-0">Entrepreneur</p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        </div>
      </div>
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

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
          <div className="col-md-6 position-relative" data-aos="fade-left">
            <h2 className="feedback_heading mb-4">Cherished Feedback</h2>
            <p>Implementing the famous proverb “Do not be wise in words, be wise in deeds”, we believe that results speak for themselves!</p>
            <div className="d-flex flex-wrap justify-content-start gap-10">
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="bg_feedback">
              <p>Base2Brand has very professional developers, diligent <br /> and always tries  their best. I. Will continue to  work with them <br /> in the future and highly recommend their services <br />  to colleagues and friends.	</p>
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
    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
         <div className="row">
          <div className="col-md-6 position-relative" data-aos="fade-left">
            <h2 className="feedback_heading mb-4">Cherished Feedback</h2>
            <p>Implementing the famous proverb “Do not be wise in words, be wise in deeds”, we believe that results speak for themselves!</p>
            <div className="d-flex flex-wrap justify-content-start gap-10">
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="bg_feedback">
              <p>B2B is fantastic! they understood our business <br /> and made great suggestions for improving our marketing plan. <br /> When you hire experts, it&apos;s like having a marketing <br /> professional on staff that knows your company and product <br /> and doesn&apos;t need much supervision!	</p>
                <div className="d-flex mt-4">
                <div className="left d-flex align-items-center">
                <img className="name_latter" src={name.src} alt="Product" />
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">Spencer Tarring,</h3>
                    <p className="mb-0">CEO & amp: Founder at Vous Music Group Ltd </p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    
    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
         <div className="row">
          <div className="col-md-6 position-relative" data-aos="fade-left">
            <h2 className="feedback_heading mb-4">Cherished Feedback</h2>
            <p>Implementing the famous proverb “Do not be wise in words, be wise in deeds”, we believe that results speak for themselves!</p>
            <div className="d-flex flex-wrap justify-content-start gap-10">
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="bg_feedback">
              <p>B2B team is brilliant. Efficient and friendly, they <br /> recommended and tried out a few strategies that I had never <br /> thought about. At some point the strategies they set up were <br /> sending so much traffic my way, and it was so perfectly <br /> targeted, that I was not able to handle the resulting workload <br /> (a great problem to have as a new business).</p>
                <div className="d-flex mt-4">
                <div className="left d-flex align-items-center">
                <img className="name_latter" src={name.src} alt="Product" />
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">Sheila Janakos,</h3>
                    <p className="mb-0">CEO (Health Horizons) </p>
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

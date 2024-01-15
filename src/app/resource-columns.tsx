'use client'

import React from "react"; 
import Order1 from "../../public/youtube-img/order1.png"
import Order2 from "../../public/youtube-img/order2.png"
import ResourceImg from "../../public/resources/resource-bg.png"
export default function home() {
   
  return (
    <>  
        <div className="container-fluid py-0 py-md-5 pb-5"> 
            <div className="row resource text-white mb-5 justify-content-center pt-5 px-3 px-md-5"> 
                <div className="resource-col col-12 col-sm-12 col-md-12 col-lg-6 pb-5">
                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <h1 className="text-left col-12 col-sm-8 mb-5">Why Do We Stand Out From The Rest?</h1>
                        <ul className="order-list d-flex flex-wrap p-0 position-relative">
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order1.src} alt=""/>
                            <span>Our web development service costs are competitive for any project.</span></li>
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order2.src} alt=""/>
                            <span>Our developers simplify things for you to understand.</span></li>
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order2.src} alt=""/>
                            <span>Reliable and highly productive delivery of projects.</span></li>
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order2.src} alt=""/>
                            <span>24/7 customer service via phone, email, etc.</span></li>
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order2.src} alt=""/>
                            <span>Fully compatible with modern web technologies</span></li>
                        </ul>
                    </div>
                </div>

                <div className="resource-col col-12 col-sm-12 col-md-12 col-lg-6" data-aos="flip-left">
                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since 
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <img className="w-100" src={ResourceImg.src} alt="" />
                    </div>
                </div>    


      



            </div>
        </div> 
    </>
  )
}

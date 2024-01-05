'use client'

import React from "react"; 
import Order1 from "../../public/youtube-img/order1.png"
import Order2 from "../../public/youtube-img/order2.png"
import YouTube7 from "../../public/youtube-img/youtube7.png"
import ChooseOrder from "../../public/youtube-img/choose-service.png"
import Utube8 from "../../public/youtube-img/youtube8.png"
import Utube9 from "../../public/youtube-img/youtube9.png"
import Utube10 from "../../public/youtube-img/youtube10.png"
import Utube11 from "../../public/youtube-img/youtube11.png"
import Utube12 from "../../public/youtube-img/youtube12.png"
import Utube13 from "../../public/youtube-img/youtube13.png"
export default function home() {
   
  return (
    <>  
        <div className="container-fluid pb-5"> 
            <div className="row process bg-gray text-white mb-5 justify-content-center ps-5 pb-5"> 
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="d-flex flex-wrap justify-content-start">
                    <h1 className="fs-3 text-white font-light mb-3">We Deliver YouTube Services Instantly</h1>
                    <p className="text-white">Credit cards can be used to pay for our services through one of the most trusted and secure payment methods in the world.
                    To make your payment, you don&apos;t have to register.</p>
                    <ul className="order-list d-flex flex-wrap p-0 position-relative">
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order1.src} alt=""/>
                        <span>Our web development service costs are competitive for any project.</span></li>
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order2.src} alt=""/>
                        <span>Our developers simplify things for you to understand.</span></li>
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order2.src} alt=""/>
                        <span>Reliable and highly productive delivery of projects.</span></li>
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order2.src} alt=""/>
                        <span>24/7 customer service via phone, email, etc.</span></li>
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order2.src} alt=""/>
                        <span>Fully compatible with modern web technologies</span></li>
                    </ul>
                    <button className="btn btn-outline-primary m-0"> Request a Quote </button>
                </div>
                </div>
                <div className="d-flex flex-wrap justify-content-start col-12 col-sm-12 col-md-6 col-lg-6 p-0">
                    <img src={YouTube7.src} alt="" />
                </div>
    
            </div>

            <div className="row process bg-gray text-white mb-5 justify-content-center ps-5 pb-5"> 
                <div className="col-12 text-center">
                    <h1 className="fs-3 text-white font-light mb-3">Why choose our services ?</h1>
                    <p className=" col-12 col-sm-6 m-auto font-light mb-5">Many websites sell similar services to ours. “Why you should buy YouTube views or other services from Base2Brand? Here are some reasons.</p>
                    <img src={ChooseOrder.src} alt="" />
                </div>
            </div>

            <div className="row process bg-gray text-white mb-5 justify-content-center ps-5 pb-5"> 
                <h1 className="fs-3 font-light w-100 d-flex flex-wrap justify-content-center mb-5">Our Cherished Projects</h1>
                    <div className="mb-5 d-flex flex-wrap">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube8.src} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube9.src} alt="" />
                        </div>
                    </div>

                    <div className="mb-5 d-flex flex-wrap">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube10.src} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube11.src} alt="" />
                        </div>
                    </div>

                    <div className="mb-5 d-flex flex-wrap">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube12.src} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube13.src} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

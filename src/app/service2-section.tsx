'use client'

import React from "react"; 
import ServicesDigital from '../../public/services2-img/service-digital.png';
import Quote from "../../public/services2-img/quote-ico.png";
import Digital1 from "../../public/services2-img/digital1.png";
import Digital2 from "../../public/services2-img/digital2.png";
import Digital3 from "../../public/services2-img/digital3.png";
import Digital4 from "../../public/services2-img/digital4.png";
import Digital5 from "../../public/services2-img/digital5.png";
export default function home() {
   
  return (
    <>  
      <div className="container-fluid py-0 py-md-5 pb-5"> 
        <div className="row process text-white mb-5 justify-content-center pt-5 px-5"> 
          <div className="col-md-12 pb-5">
            <h1 className="text-left">OUR SERVICES</h1>
          </div>
          
          <div className="justify-content-between d-flex flex-wrap">
            <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5" data-aos="fade-left">
              <div className="d-flex flex-wrap justify-content-start align-items-center">
                <h2 className="digital-txt mb-4"><strong>01</strong><sub>Digital Marketing</sub></h2>
                <p className="digital-para">The right Digital / Internet Marketing strategy is the difference between brands that rule consumer minds and those that don’t. Promoting your business in the right places at the right time of the day is crucial to get maximum ROI on your budgets.</p>
                <button className="btn btn-outline-primary m-0"> View in details <img className="ico" src={Quote.src} alt="" /></button>
              </div>
            </div>

            <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-end d-flex flex-wrap"  data-aos="fade-right">
                  <img src={ServicesDigital.src} alt=""/>
            </div>
          </div>
       
        <div className="digital-row d-flex flex-wrap mb-5"  data-aos="zoom-in">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">PPC Management</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Search Engine Optimization</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Social Media Management</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">YouTube Marketing</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Online Reputation Management</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0"> Request a Quote <img className="ico" src={Quote.src} alt="" /></button>
          </div>
        </div>
      </div>


        <div className="row process bg-gray text-white mb-5 justify-content-center pt-5 px-5 pb-5"> 
          <div className="justify-content-between d-flex flex-wrap">
              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-start d-flex flex-wrap"  data-aos="fade-left">
                  <img src={ServicesDigital.src} alt=""/>
              </div>

              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-right">
                  <div className="d-flex flex-wrap justify-content-end align-items-center">
                    <h2 className="digital-txt mb-4"><strong>02</strong><sub>E-Commerce</sub></h2>
                    <p className="text-right w-100 digital-para">The right Digital / Internet Marketing strategy is the difference between brands that rule consumer minds and those that don’t. Promoting your business in the right places at the right time of the day is crucial to get maximum ROI on your budgets.</p>
                    <button className="btn btn-outline-primary m-0"> View in details <img className="ico" src={Quote.src} alt="" /></button>
                  </div>
              </div>
          </div>
        
        <div className="digital-row d-flex flex-wrap"  data-aos="zoom-in">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Magneto Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Woo Commerce Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Shopify Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Open cart Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Big Commerce Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0"> Request a Quote <img className="ico" src={Quote.src} alt="" /></button>
          </div>
        </div>
      </div>

      <div className="row process text-white mb-5 justify-content-center pt-5 px-5"> 
            <div className="justify-content-between d-flex flex-wrap">
              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-left">
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                  <h2 className="digital-txt mb-4"><strong>03</strong><sub>Graphic Design</sub></h2>
                  <p className="digital-para">The right Digital / Internet Marketing strategy is the difference between brands that rule consumer minds and those that don’t. Promoting your business in the right places at the right time of the day is crucial to get maximum ROI on your budgets.</p>
                  <button className="btn btn-outline-primary m-0"> View in details <img className="ico" src={Quote.src} alt="" /></button>
                </div>
              </div>

              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-end d-flex flex-wrap"  data-aos="fade-right">
                  <img src={ServicesDigital.src} alt=""/>
              </div>
            </div>
       
        <div className="digital-row d-flex flex-wrap mb-5"  data-aos="zoom-in">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Website Redesign</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Responsive Web Design</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Video Animation 2D/3D</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Banner Designing</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Mobile App designing</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0"> Request a Quote <img className="ico" src={Quote.src} alt="" /></button>
          </div>
        </div>
      </div>


      <div className="row process bg-gray text-white mb-5 justify-content-center pt-5 px-5 pb-5"  data-aos="fade-left"> 
          <div className="justify-content-between d-flex flex-wrap">
              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-start d-flex flex-wrap">
                  <img src={ServicesDigital.src} alt=""/>
              </div>

              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-right">
                  <div className="d-flex flex-wrap justify-content-end align-items-center">
                    <h2 className="digital-txt mb-4"><strong>04</strong><sub>Web development</sub></h2>
                    <p className="text-right w-100 digital-para">The right Digital / Internet Marketing strategy is the difference between brands that rule consumer minds and those that don’t. Promoting your business in the right places at the right time of the day is crucial to get maximum ROI on your budgets.</p>
                    <button className="btn btn-outline-primary m-0"> View in details <img className="ico" src={Quote.src} alt="" /></button>
                  </div>
              </div>
          </div>
        
        <div className="digital-row d-flex flex-wrap"  data-aos="zoom-in">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">PHP Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Mean Stack Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Mern Stack Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Asp.Net Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Python Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
            <button className="btn btn-outline-primary m-0"> Request a Quote <img className="ico" src={Quote.src} alt="" /></button>
          </div>
        </div>
      </div>


      <div className="row process text-white mb-5 justify-content-center pt-5 px-5"  data-aos="fade-left"> 
            <div className="justify-content-between d-flex flex-wrap">
              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5">
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                  <h2 className="digital-txt mb-4"><strong>05</strong><sub>Hiring Resources</sub></h2>
                  <p className="digital-para">The right Digital / Internet Marketing strategy is the difference between brands that rule consumer minds and those that don’t. Promoting your business in the right places at the right time of the day is crucial to get maximum ROI on your budgets.</p>
                  <button className="btn btn-outline-primary m-0"> View in details <img className="ico" src={Quote.src} alt="" /></button>
                </div>
              </div>

              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-end d-flex flex-wrap"  data-aos="fade-right">
                  <img src={ServicesDigital.src} alt=""/>
              </div>
            </div>
       
        <div className="digital-row d-flex flex-wrap mb-5"  data-aos="zoom-in">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Digital Marketer</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Graphic Designer</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Web Developer</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Full Stack Developer</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">App Developer</p>
          </div>
        </div>
      </div>


      <div className="row process bg-gray text-white mb-5 justify-content-center pt-5 px-5 pb-5"  data-aos="fade-left"> 
          <div className="justify-content-between d-flex flex-wrap">
              <div className="ser-digital col-12 col-sm-6 col-md-6 pb-5 justify-content-start d-flex flex-wrap">
                  <img src={ServicesDigital.src} alt=""/>
              </div>

              <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-5"  data-aos="fade-right">
                  <div className="d-flex flex-wrap justify-content-end align-items-center">
                    <h2 className="digital-txt mb-4"><strong>06</strong><sub>App Development</sub></h2>
                    <p className="text-right w-100 digital-para">The right Digital / Internet Marketing strategy is the difference between brands that rule consumer minds and those that don’t. Promoting your business in the right places at the right time of the day is crucial to get maximum ROI on your budgets.</p>
                    <button className="btn btn-outline-primary m-0"> View in details <img className="ico" src={Quote.src} alt="" /></button>
                  </div>
              </div>
          </div>
        
        <div className="digital-row d-flex flex-wrap"  data-aos="zoom-in">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital1.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Android App Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital2.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">IOS App Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital3.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">React Native Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital4.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">Native Mobile App Development</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-5 text-white digital-column justify-content-center align-items-center d-flex flex-wrap">
              <img src={Digital5.src} alt=""/>
              <p className="m-0 p-0 fs-4 pt-3 display-4 w-100 text-center">React Native Development</p>
          </div>

        </div>
      </div>



    </div> 
    </>
  )
}

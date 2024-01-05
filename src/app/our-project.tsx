'use client'

import React from "react"; 
import pro1 from '../../public/img/our_project.png';  
import arrow from '../../public/img/arrow.png';  
import pro2 from '../../public/img/our_product2.png'; 
import digital from '../../public/img/digital.png'; 

import './our-project.css'

export default function home() {
 
  return (
    <>  
      <div className="container-fluid p-5 pb-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5"   >
            <h2 className="heading">Our Cherished Projects</h2>
          </div>
          
          <div className="row"> 
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist"   >
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Marketing</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Branding</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-Web-tab" data-bs-toggle="pill" data-bs-target="#pills-Web" type="button" role="tab" aria-controls="pills-Web" aria-selected="false">Mobile Application</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-App-tab" data-bs-toggle="pill" data-bs-target="#pills-App" type="button" role="tab" aria-controls="pills-App" aria-selected="false">Website</button>
  </li>
</ul>
<div className="tab-content pillPadding" id="pills-tabContent">
  <div className="tab-pane fades show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div className="row">
      {/* <div className="col-md-4">
        <div className="main_box_product">
          <h3>RH Studio</h3>
          <div className="d-flex align-items-center mb-4">
          <img className="icon_net mr-2" src={net.src} alt=" " />
          <p className="mb-0"> rh-studio.net</p>
          </div>
          <img className="w-100" src={pro1.src} alt="Product" />
          <div className="desc_data mt-5">
            <h2>85% <span className="sub_title"> INCREASE IN ORGANIC WEBSITE TRAFFIC</span></h2>
            <h2>91% <span className="sub_title"> NICHE’ BASED KEYWORDS RANKING</span></h2>
            <h2>88% <span className="sub_title"> SOCIAL MEDIA GROWTH</span></h2>
          </div>
          <div className="text-center mt-5 mb-4">
            <button className="btn btn-outline-primary">View in details</button>
          </div>
        </div>
      </div> */}
      <div className="col-md-6"  >
      <img className="w-100" src={pro1.src} alt="Product" />
      
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      <div className="col-md-6"  >
      <img className="w-100" src={pro2.src} alt="Product" /> 
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
    </div>
  </div>
  <div className="tab-pane fades" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="row"> 
  
  <div className="col-md-6"  >
      <img className="w-100" src={pro1.src} alt="Product" />
      
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      <div className="col-md-6"  >
      <img className="w-100" src={pro2.src} alt="Product" /> 
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      </div>
  </div>
  <div className="tab-pane fades" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="row"> 
  <div className="col-md-6"  >
      <img className="w-100" src={pro1.src} alt="Product" />
      
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      <div className="col-md-6"  >
      <img className="w-100" src={pro2.src} alt="Product" /> 
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      </div>
  </div>
  <div className="tab-pane fades" id="pills-Web" role="tabpanel" aria-labelledby="pills-Web-tab">
    <div className="row">
  <div className="col-md-6"  >
      <img className="w-100" src={pro1.src} alt="Product" />
      
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      <div className="col-md-6"  >
      <img className="w-100" src={pro2.src} alt="Product" /> 
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      </div>
  </div>
  <div className="tab-pane fades" id="pills-App" role="tabpanel" aria-labelledby="pills-App-tab">
    <div className="row"> 
  <div className="col-md-6"  >
      <img className="w-100" src={pro1.src} alt="Product" />
      
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
      </div>
      <div className="col-md-6"  >
      <img className="w-100" src={pro2.src} alt="Product" /> 
      <a className="name_project">Project Name  <img className="arrow" src={arrow.src} alt="Product" /></a>
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

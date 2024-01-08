"use client";

import React from "react";
import Header from "../../../component/header";  
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import Contact from "../../../public/contact-us/contact.png";
import Wanna from "../../../public/contact-us/wanna.png";
import "../../../src/app/contact-us/contact.css";

 

export default function marketing() {
  return (
    <>
      <Header />
      <div className="bg-black pt-5 pb-5">
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center text-white">
                <h2 className="text_primary">Let's Meet Together</h2>
                <p>We will be obliged to have a word with you, if there is anything that you want to ask or <br /> know about, feel free to contact us. Our details are given below:</p>
            </div>
            <div className="bgWhite mt-5">
            <div className="row">
            <div className="col-md-6">
             <div className="bgImg text-white" style={{
      backgroundImage: `url(${Contact.src})`,
      width: '100%',
      height: '750px',   
    }}>
                <h2>Contact Information</h2>
                <p className="mb-5 pb-5">Say something to start a live chat!</p>
                <div className="d-flex mt-5 pt-4">
             <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                <div className="contact ml-4">
                    <a>+91 9041700209</a> <br />
                    <a>+91 8360116967</a>
                </div>
             </div>
             <div className="d-flex mt-5">
             <i className="fa fa-envelope" aria-hidden="true"></i>
                <div className="conatct ml-4">
               <a> hello@base2brand.com</a>
                </div>
             </div>
             <div className="d-flex mt-5">
             <i className="fa fa-map-marker" aria-hidden="true"></i>
                <div className="conatact ml-4">
                <p className="mb-1">F-209, Industrial area</p>
                <p>Phase 8-B, Sector 74, Mohali, 160074</p>
                </div>
             </div>
                    <div className="icons mt-5 pt-5">
                <a className="social"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a className="social"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a className="socialFacebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
             </div>
             </div>
            
            </div>
            <div className="col-md-6">
            <form className="p-5">
            <div className="mb-5">
                <label className="form-label">Name</label>
                <input type="text" className="form-control removeBorder"   aria-describedby="emailHelp" /> 
            </div>
            <div className="mb-5">
                <label className="form-label">Phone No.</label>
                <input type="number" className="form-control removeBorder"   />
            </div>
            <div className="mb-5">
                <label className="form-label">Email</label>
                <input type="email" className="form-control removeBorder"   />
            </div>
            <div className="mb-5">
                <label className="form-label">Select Services</label>
                <select name="" className="form-control removeBorder" id=""> 
                    <option value="">Web Development</option>
                    <option value="">Web Design</option>
                    <option value="">Graphic</option>
                </select>
            </div>
            <div className="mb-5">
                <label className="form-label">Message</label>
                <textarea name="" className="form-control removeBorder" id=""></textarea>
            </div>
            <div className="text-right"> 
            <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
            </form>
            </div>
           
            </div>
            </div>  
            <div className="col-md-12 mt-5 pt-4">
                <h1 className="text-center text-white">Wanna Hire Us?</h1>
                <img src={Wanna.src} className="w-100" alt="" />
            </div>
            </div>
        </div>
 
        <Quote/>
        <Footer />
       
      </div>
    </>
  );
}


'use client'

import React from "react"; 
import blog1 from '../../public/img/blog1.png';        
import blog2 from '../../public/img/blog2.png';        
import blog3 from '../../public/img/blog3.png';        
import './our-project.css'

export default function home() {
 
  return (  
    <>  
      <div className="container-fluid p-5 pb-5"> 
          <div className="row text-white mb-5 pb-5"> 
          <div className="col-md-12 text-center">
            <h1>Our Recent Blogs</h1>
            <p className="blob_sub">The latest in IT Trends, Strategies and Tips.</p>
          </div>
          <div className="col-md-4">
            <div className="blog_section">
            <img className="blog" src={blog1.src} alt="Blog" />
            <div className="p-4 pb-5">
              <p className="blog_desc mb-5">The Power of Typography in Web Design: Choosing the Right Fonts for Your Business Website</p>
              <button className="btn btn-outline-primary m-0">Read More</button>
            </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="blog_section">
            <img className="blog" src={blog2.src} alt="Blog" />
            <div className="p-4 pb-5">
              <p className="blog_desc mb-5">The Power of Typography in Web Design: Choosing the Right Fonts for Your Business Website</p>
              <button className="btn btn-outline-primary m-0">Read More</button>
            </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="blog_section">
            <img className="blog" src={blog3.src} alt="Blog" />
            <div className="p-4 pb-5">
              <p className="blog_desc mb-5">The Power of Typography in Web Design: Choosing the Right Fonts for Your Business Website</p>
              <button className="btn btn-outline-primary m-0">Read More</button>
            </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
          <button className="btn btn-outline-primary">More Blog</button>

          </div>
        </div> 
      </div> 
    </>
  )
}

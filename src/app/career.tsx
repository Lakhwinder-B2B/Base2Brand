'use client'

import React from "react"; 
import c1 from '../../public/img/c1.png';        
import c2 from '../../public/img/c2.png';        
import c3 from '../../public/img/c3.png';        
import c4 from '../../public/img/c4.png';        
import './our-project.css'

export default function home() {
 
  return (  
    <>  
      
      <div className="container-fluid p-5 mt-5"> 
          <div className="row text-white"> 
              <div className="col-md-4">
              <img className="carrerImg" src={c1.src} alt="Product" />
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
              <img className="carrerImg" src={c2.src} alt="Product" /> 
              </div>
              <div className="col-md-9 mx-auto text-center">
                  <h2>For Career</h2>
                  <h1 className="mt-4 mb-4">WHAT WE&apos;RE <span className="graydiant_text">LOOKING</span> FOR ?</h1>
                  <p className="mb-5 line-height">A career at Base2Brand is more than just a job — it’s an opportunity to shape the future. <br /> Our company was built on a set of four core values which make that possible: trust, <br /> customer success, innovation, and equality. Join us to discover a future of opportunities.</p>
                  <button className="btn btn-outline-primary"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> We are Hiring </button>
              </div>
              <div className="col-md-4">
              <img className="carrerImgs" src={c3.src} alt="Product" />
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
              <img className="carrerImgs" src={c4.src} alt="Product" /> 
              </div>
        </div> 
      </div> 
    </>
  )
}

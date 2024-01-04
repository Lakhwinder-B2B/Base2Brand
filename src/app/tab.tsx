"use client";
import { useEffect } from 'react';

import React from "react";




export default function marketing() {
 
  return (
    <>
   
      <div className="bg_home pt-5 pb-5">
        <h1 className="text-white text-center font-light fs-3 mb-5">Professional SEO  agency services</h1>
        <div className="tabs ">
        <ul className="nav nav-tabs tabs-heading d-flex flex-wrap justify-content-center gap-10">
            <li className="active"><a data-toggle="tab" href="#home">PPC Channels</a></li>
            <li><a data-toggle="tab" href="#menu1">PPC Audits (SEM)</a></li>
            <li><a data-toggle="tab" href="#menu2">Social Advertising</a></li>
            <li><a data-toggle="tab" href="#menu3">Google AdWords</a></li>
        </ul>

        <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
            <h3>HOME</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div id="menu1" className="tab-pane fade">
            <h3>Menu 1</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="menu2" className="tab-pane fade">
            <h3>Menu 2</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="menu3" className="tab-pane fade">
            <h3>Menu 3</h3>
            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </div>
 
        </div>
        
      </div>
    </>
  );
}

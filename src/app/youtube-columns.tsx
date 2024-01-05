'use client'

import React from "react"; 
import Utube1 from "../../public/youtube-img/youtube1.png"
import Utube2 from "../../public/youtube-img/youtube2.png"
import Utube3 from "../../public/youtube-img/youtube3.png"
import Utube4 from "../../public/youtube-img/youtube4.png"
import Utube5 from "../../public/youtube-img/youtube5.png"
import Utube6 from "../../public/youtube-img/youtube6.png"
export default function home() {
   
  return (
    <>  
        <div className="container-fluid pb-5"> 
            <div className="row process bg-gray text-white mb-5 justify-content-center px-5 pb-5"> 
                    <h1 className="d-flex flex-wrap justify-content-center font-light fs-2 mb-5"> How We Grow YourYouTube Video Fast</h1>
                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-4 web-head">Channel Creation and Optimization</h3>
                            <p className="digital-para">For your content to be successful, you need a perfect strategy for your audience to find you. If you are looking to create a fresh YouTube channel or grow an existing channel, we can help you build a perfect venue for your videos.<br/><br/>
                            At Base2Brand, we have a team of specialists specializing in creating effective channels, visuals, and unique supportive content for your target audience. This will make sure that you make the right first impression, and the supporting content will help in growing your organic results, and you will make it easy for your audience to find your videos.</p>
                        </div>
                    </div>

                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                        <img src={Utube1.src} alt=""/>
                    </div>
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                        <img src={Utube1.src} alt=""/>
                    </div>
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-4 web-head">Video Optimization</h3>
                            <p className="digital-para">We build a creative strategy to help your content be found by your target audience and improve its performance organically.<br/><br/>
                            We also provide video editing services in addition to video optimization, if required, to help you make your content up to mark in comparison to your competitors.</p>
                        </div>
                    </div> 
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-4 web-head">Keyword Strategy</h3>
                            <p className="digital-para">Applying a perfect keyword strategy and supporting content plays a vital role in showcasing your video content to your audience, eliminating the gap between you and your competitors, and winning the race to gather maximum viewership.</p>
                        </div>
                    </div>

                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                        <img src={Utube3.src} alt=""/>
                    </div>
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                        <img src={Utube4.src} alt=""/>
                    </div>
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-4 web-head">Social Engagement Strategy</h3>
                            <p className="digital-para">We build the perfect strategy to identify the right distribution channel for your videos to reduce the investment & improve playback performance. Our strategies are proved to provide the best results in the form of Views and Subscribers on our customer’s YouTube channels.</p>
                        </div>
                    </div> 
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-4 web-head">Viewer Engagement</h3>
                            <p className="digital-para">Building a strategy of having different ways to engage with your viewers results in bringing back and ensuring better search performance for your YouTube channel and individual videos.</p>
                        </div>
                    </div>

                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                        <img src={Utube5.src} alt=""/>
                    </div>
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                        <img src={Utube6.src} alt=""/>
                    </div>
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-4 web-head">Competitive Analysis</h3>
                            <p className="digital-para">We analyze your competitor’s strategies to find the loopholes in them to build our strategies more effectively to defeat them in the game.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

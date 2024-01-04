'use client'

import React from "react";
import Brand from '../../../public/online/brand.png';
import Tag from '../../../public/online/tag.png';
import '../online-reputation/online.css'
export default function onlinereputation() {

    return (
        <>
            <div className="bg-black">
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-md-6 text-white">
                            <h2>Save Your Brand from Negative Publicity</h2>
                            <p>Credit cards can be used to pay for our services through one of the <br /> most trusted and secure payment methods in the world.<br />
                                To make your payment, you don't have to register.</p>
                            <div className="row mt-5">
                                <div className="col-md-1">
                                    <img src={Tag.src} className="tag_line" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <ul className="publicity_data">
                                        <li>Online reviews are trusted by 85% customers as much as personal recommendations.</li>
                                        <li>60% of customers say that negative reviews stopped them from using a business.</li>
                                        <li>49% of customers look for at least a four-star rating before choosing a business.</li>
                                        <li>86% of prospective customers do not covert after seeing a 1 or 2-star review on a business page.</li>
                                    </ul>
                                    <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <img src={Brand.src} alt="" className="w-75" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

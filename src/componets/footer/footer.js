import React from 'react';
import './footer.scss';
import {Link } from "react-router-dom";


const Footer= (props)=>{
        return (
            <footer>              
                <div className="footer2">
                    <div className="row">
                        <div className="block-40">
                            <ul className="float-right float-none">
                                <li> <Link to="/">About us </Link> </li>
                                <li> <Link to="/">Delivery Information </Link> </li>
                                <li> <Link to="/">Returns &amp; Exchange</Link> </li>
                                <li> <Link to="/">Technical &amp; Privacy</Link> </li>
                                <li> <Link to="/">Order Status</Link> </li>
                            </ul>
                        </div>
                        <div className="block-40 pt-20">
                            <Link to="/">
                                <label className="logo mt-20 mb-20">MADE UP</label>
                            </Link>

                            <div className="social-media">
                                <label> Stay in touch with us </label>
                                <br />
                                <span><i className="fab fa-facebook"></i> </span>
                                <span><i className="fab fa-instagram "></i> </span>
                                <span><i className="fab fa-youtube "></i> </span>
                            </div>

                        </div>
                        <div className="block-40  pt-20  text-left text-none">
                            <div className="mb-20">
                                <label className=" mt-20"><b>Our Corporate Office</b></label>
                                <br></br>
                                <p>No: 7,A2B road, Adayar Rajpuram, <br />
                                 T-Nagar, Chennai - 642002.</p>
                            </div>
                            <div className="contact">
                                <span><i className="fa fa-envelope"></i> sales@madeup.com </span>
                                <br />
                                <span><i className="fa fa-phone "></i> 044 9999 9999 </span>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }


export default Footer;

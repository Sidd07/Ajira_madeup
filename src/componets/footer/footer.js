import React, { Component } from 'react';
import './footer.scss';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer1">
                    <div className="text-block">
                        <div>
                            <p className="intro-text">GET COUPONS &amp; STYLE GUIDES</p>
                          
                            <p className="intro-text-paaragraph"> Subscribe to our Newsletter</p>
                            <br />
                                <input type="email" placeholder="Email id" required/><button className="btn btn-orange mt-20"> Subscribe </button>
                        </div>
                    </div>
                    <div className="locate-us"> <i class="fas fa-map-marker-alt"></i>  LOCATE US </div>
                </div>
                <div className="footer2">
                    <div class="row">
                        <div className="block">
                            <ul className="float-right float-none">
                                <li> <a>About us </a> </li>
                                <li> <a>Delivery Information </a> </li>
                                <li> <a>Returns &amp; Exchange</a> </li>
                                <li> <a>Technical &amp; Privacy</a> </li>
                                <li> <a>Order Status</a> </li>
                            </ul>
                        </div>
                        <div className="block pt-20">
                            <a>
                                <label className="logo mt-20 mb-20">MADE UP</label>
                            </a>

                            <div className="social-media">
                                <label> Stay in touch with us </label>
                                <br />
                                <span><i className="fab fa-facebook"></i> </span>
                                <span><i className="fab fa-instagram "></i> </span>
                                <span><i className="fab fa-youtube "></i> </span>
                            </div>

                        </div>
                        <div className="block  pt-20  text-left text-none">
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

}

export default Footer;

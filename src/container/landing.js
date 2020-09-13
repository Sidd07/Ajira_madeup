import React, { Component } from 'react';
import Footer from '../componets/footer/footer';
import Products from '../componets/productSlider/products';


class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="site-blocks-cover">
                    <div className="text-block">
                        <div>
                            <p className="display-1">Clothes that <span className="text-orange">respire</span></p>
                            <p className="display-1"> for man that <span className="text-orange">aspire</span></p>
                            <br />
                            <button className="btn btn-orange mt-20"> Browse Collection </button>
                        </div>
                    </div>
                </div>

                <div className="row mt-10 mb-10">
                    <div className="block-50 mt-10 pr-10 sm-p-0">
                        <div className="site-block-1" >
                            <div className="text-block">
                                <div>
                                    <p className="display-1"> <span className="text-orange">Summer</span> is here and</p>
                                    <p className="display-1"> So is our <span className="text-orange">collection</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-50 mt-10">
                        <div className="image-gallery-1" >
                            <div className="text-block">
                                <div>
                                    <p className="display-1"><span className="text-orange">wrinkle-free </span>t-shirts</p>
                                </div>
                            </div>
                        </div>
                        <div className="image-gallery-2 mt-10" >
                            <div className="text-block">
                                <div>
                                    <p className="display-1"><span className="text-orange">Stain-free </span>Denim shirts</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <hr className="hr-text" data-content="LATEST COLLECTIONS" />
                <Products />
                <div className="footer1">
                    <div className="text-block">
                        <div>
                            <p className="intro-text">GET COUPONS &amp; STYLE GUIDES</p>
                          
                            <p className="intro-text-paaragraph"> Subscribe to our Newsletter</p>
                            <br />
                                <input type="email" placeholder="Email Id" required/><button className="btn btn-orange mt-20"> Subscribe </button>
                        </div>
                    </div>
                    <div className="locate-us"> <i className="fas fa-map-marker-alt"></i>  LOCATE US </div>
                </div>
                <Footer />
            </div>
        )

    }
}

export default LandingPage;
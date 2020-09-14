import React, { Component } from 'react';
import Footer from '../componets/footer/footer';
import Products from '../componets/productSlider/products';
import Subscribe from '../componets/subscribeUs/subscribeUs';
import SiteCover from '../componets/sitecover/siteCover';
import Gallery from '../componets/gallery/gallery';
import MobileNav from '../componets/navigation/mobileNav';


class LandingPage extends Component {
    render() {
        return (
            <div>    
                <MobileNav />            
                <SiteCover/>
                <Gallery/>
                <hr className="hr-text" data-content="LATEST COLLECTIONS" />
                <Products />
                <Subscribe/>               
                <Footer />
            </div>
        )

    }
}

export default LandingPage;
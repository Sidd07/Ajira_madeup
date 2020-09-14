import React from 'react';

const Subscribe = (props) => {
    return(
    <div className="footer1">
        <div className="text-block">
            <div>
                <p className="intro-text">GET COUPONS &amp; STYLE GUIDES</p>

                <p className="intro-text-paaragraph"> Subscribe to our Newsletter</p>
                <br />
                <input type="email" placeholder="Email Id" required /><button className="btn btn-orange mt-20"> Subscribe </button>
            </div>
        </div>
        <div className="locate-us"> <i className="fas fa-map-marker-alt"></i>  LOCATE US </div>
    </div>)
}

export default Subscribe;
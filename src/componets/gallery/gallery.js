import React from 'react';

const Gallery = (props) => {
    return (
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
    )
}
export default Gallery;
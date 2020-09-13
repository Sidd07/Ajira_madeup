import React from 'react';
import './profileBox.scss'


const ProfileBox = (props) => {
    return (
        <div className="profile">
            <div className="profile-image float-left "> </div>
            <div>
                <h3 className="float-left mt-20 ml-20 mb-0">Grishk</h3>
                <br /><br />
                <p className="profile-email text-left">griiskaim@gmail.com </p>
            </div>
        </div>)
}

export default ProfileBox;
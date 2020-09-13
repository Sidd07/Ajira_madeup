import React from 'react';
import './sidebar.scss'
import ProfileBox from '../profileBox/profileBox';


const ProfileBar = (props) => {
    return (

        <div>
            <div className={props.activeTab ? "row border-bottom sm-border-none" : "row"}>
                <div className="width-300">
                    <div className="mt-20pt">
                        <h3 className="text-left cursor-pointer" onClick={() => props.handleAction(true)}>My Profile<span className="float-right"><i className="fas fa-angle-right"></i></span></h3>
                        <label className="float-left"> Notifications, Password</label>
                    </div>
                </div>
            </div>
            <div className={props.activeTab ? "row" : "row border-bottom sm-border-none"} >
                <div className="width-300">
                    <div className="mt-20">
                        <h3 className="text-left cursor-pointer" onClick={() => props.handleAction(false)}>My Orders<span className="float-right"><i className="fas fa-angle-right"></i></span></h3>
                        <label className="float-left"> Already have 12 orders</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="width-300">
                    <div className="mt-20">
                        <h3 className="text-left">Shipping addresses<span className="float-right"><i className="fas fa-angle-right"></i></span></h3>
                        <label className="float-left"> 3 Addresses </label>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ProfileBar;

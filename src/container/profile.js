import React, { Component } from 'react';
import "./css/landing.scss"
import Footer from '../componets/footer/footer';
import ProfileForm from '../componets/profileForm/profileForm';
import Orders from '../componets/orders/orders';
import pData from '../componets/orders/orderData.json';
import ProfileBar from '../componets/sidebar/sidebar';
import { Link } from "react-router-dom";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleAction = this.handleAction.bind(this);
    }
    state = {
        action: true,
    }
    handleAction(status) {      
        this.setState({
            action: status,
        })      
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-20 p-20 pl-40  sm-display-none">
                    <label><Link to="/" className="cursor-pointer">Home</Link> / My Profile</label>
                </div>
                <div className="row">
                    <div className="block-40 pl-20">
                        <ProfileBar handleAction= {this.handleAction}  activeTab={this.state.action} />
                    </div>
                    <div className="block-80">
                        {this.state.action ? <ProfileForm /> : <Orders data={pData} />}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile;
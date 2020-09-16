import React, { Component } from 'react';
import Footer from '../componets/footer/footer';
import ProfileForm from '../componets/profileForm/profileForm';
import Orders from '../componets/orders/orders';
import pData from '../componets/orders/orderData.json';
import ProfileBar from '../componets/sidebar/sidebar';
import { Link } from "react-router-dom";
import Accordion from '../componets/accordion/accordion';
import ProfileBox from '../componets/profileBox/profileBox'


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
            <div>
                <div className="container sm-display-none">
                    <div className="row mt-20 p-20 pl-40  sm-display-none">
                        <label><Link to="/" className="cursor-pointer">Home</Link> / My Profile</label>
                    </div>
                    <div className="row">
                        <div className="block-40 p-20 pr-0">
                            <ProfileBox />
                            <ProfileBar handleAction={this.handleAction} activeTab={this.state.action} />
                        </div>
                        <div className="block-80">
                            {this.state.action ? <ProfileForm /> : <Orders data={pData} />}
                        </div>
                    </div>

                </div>
                <div>
                    <div className="container mt-20  pr-0">
                        <div className="p-20">
                            <ProfileBox />
                        </div>
                        <div class="row">
                            <Accordion
                                title="My Profile"
                                content="Notifications, password">
                                <ProfileForm />

                            </Accordion>
                            <Accordion
                                title="My Orders"
                                content="Already have 12 orders">
                                <Orders data={pData} />
                            </Accordion>

                            <Accordion
                                title="Shipping Address"
                                content="3 Address">
                                <div className="sm-border-top">
                                    <h3 className="float-left">Address section</h3>
                                </div>
                            </Accordion>

                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }

}

export default Profile;
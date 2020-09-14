import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navbar.scss';
import data from './links.json';

const MobileNav = () => {
    const itemList = data[0];
    return (<div className="row lg-display-none">
        <i className="fas fa-angle-left mt-10pt float-left"></i>
        <div className="slider width-90pt">
            {itemList.itemTypes.map((value, index) => {
                return (
                    <div className="block-20 mt-20 mb-20 ml-10 mr-10" key={index}>
                        <div className="circle">
                            <img src={require(`../../assets/images/${value.image}.png`)}></img>
                        </div>
                        <p className="font-sm-10 text-grey" > <Link to={value.link} className={value.active === true ? "active" : ""} >{value.title}</Link></p></div>
                )
            })
            }
        </div>
        <i className="fas fa-angle-right mt-10pt float-right"></i>
    </div>)
}

export default MobileNav;
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navbar.scss';
import LandingPage from '../../container/landing';
import Profile from '../../container/profile';
import data from './links.json';

const Navigation = () => {
    var [setActive, setActiveState] = useState(false);

    const [itemList, mobileList1, mobileList2] = [data[0], data[1], data[2]];
    return (
        <Router>
            <div className="container">
                <header>
                    <div className="nav">
                        <input type="checkbox" id="check" onChange={(e) => setActiveState(setActive = !setActive)} />
                        <label htmlFor="check" className="checkbtn">
                            <i className={setActive ? "fa fa-times" : "fas fa-bars"}></i>
                        </label>

                        <Link to="/"> <label className="logo float-left cursor-pointer">MADE UP</label> </Link>
                        <ul className="left-nav sm-display-none">
                            {itemList.itemTypes.map((value, index) => {
                                return (
                                    <li> <Link to="/" className={value.active === true ? "active" : ""} >{value.title}</Link></li>
                                )
                            })
                            }
                        </ul>

                        <ul className="right-nav">
                            <li>   <Link to="/"> <i className="fas fa-search"></i>   </Link> </li>
                            <li>   <Link to="/"> <i className="fas fa-shopping-cart"></i>   </Link>  </li>
                            <li className="display-none">   <Link to="/"> <i className="fas fa-heart"></i>   </Link>  </li>
                            <li className="display-none"> <Link to="/profile"> <i className="fas fa-user"></i>   </Link>  </li>

                        </ul>

                        <ul className={setActive ? "mobile-nav left-nav lg-display-none " :
                            "mobile-nav left-nav lg-display-none sm-display-none"}>
                            {mobileList1.mobileSite1.map((value, index) => {
                                return (
                                    <li onClick={(e) => setActiveState(setActive = !setActive)} key={index}>
                                        <Link to={value.link} className={value.active === true ? "active" : ""}>{value.title}</Link>
                                    </li>
                                )
                            })}

                            <li><hr /></li>

                            {mobileList2.mobileSite2.map((value, index) => {
                                return (
                                    <li onClick={(e) => setActiveState(setActive = !setActive)} key={index}>
                                        <Link to={value.link} className={value.active === true ? "active" : ""} >{value.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </header>               
            </div>

            <Route path="/" exact component={LandingPage} />
            <Route path="/profile" exact component={Profile} />


        </Router >
    )
}



export default Navigation;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navbar.scss';
import LandingPage from '../../container/landing';
import Profile from '../../container/profile';


class Navigation extends Component {
    constructor(props) {
        super(props);
        
    }
    state={
        openMenu:false
    }

    render() {
        return (
            <Router>
                <div className="nav">
                    <input type="checkbox" id="check" onChange={(e)=>{this.setState({openMenu: !this.state.openMenu})}}/>
                    <label className="checkbtn">
                        <i className={ this.state.openMenu? "fa fa-times":"fas fa-bars" }></i>
                    </label>

                    <Link to="/"> <label className="logo float-left cursor-pointer">MADE UP</label> </Link>

                    <ul className="left-nav">
                        <li><Link to="/" className="active">For Me  </Link> </li>
                        <li>  <Link to="/"> Jeans  </Link> </li>
                        <li>  <Link to="/"> Shirts  </Link> </li>
                        <li>  <Link to="/"> T-Shirts  </Link> </li>
                        <li>  <Link to="/"> Trousers  </Link> </li>
                        <li>  <Link to="/"> Joggers  </Link> </li>
                        <li>  <Link to="/"> Shorts  </Link> </li>

                    </ul>
                    <ul className="right-nav">
                        <li>   <Link to="/"> <i className="fas fa-search"></i>   </Link> </li>
                        <li className="display-none">   <Link to="/"> <i className="fas fa-shopping-cart"></i>   </Link>  </li>
                        <li className="display-none">   <Link to="/"> <i className="fas fa-heart"></i>   </Link>  </li>
                        <li> <Link to="/profile"> <i className="fas fa-user"></i>   </Link>  </li>

                    </ul>
                </div>

                <Route path="/" exact component={LandingPage} />
                <Route path="/profile" exact component={Profile} />


            </Router>
        )
    }

}

export default Navigation;

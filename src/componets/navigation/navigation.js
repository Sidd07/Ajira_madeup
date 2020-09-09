import React, { Component } from 'react';
import './navbar.scss';


class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <input type="checkbox" id="check"/>
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                
                    <label className="logo float-left">MADE UP</label>
                   
                    <ul className="left-nav">
                        <li><a className="active" href="#">For Me</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">T-Shirts</a></li>
                        <li><a href="#">Trousers</a></li>
                        <li><a href="#">Joggers</a></li>
                        <li><a href="#">Shorts</a></li>
                          
                    </ul>
                    <ul  className="right-nav"> 
                        <li> <a href="#"><i className="fas fa-search"></i> </a></li>
                        <li> <a href="#"><i className="fas fa-shopping-cart"></i> </a> </li>
                        <li className="display-none"> <a href="#"><i className="fas fa-heart"></i> </a> </li>
                        <li className="display-none"> <a href="#"><i className="fas fa-user"></i> </a> </li>
                        
                    </ul>
          </div>
        )
    }

}

export default Navigation;

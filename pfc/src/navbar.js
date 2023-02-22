import React from "react";
import {Link} from "react-router-dom";
import logo from './img/logo.jpg';
function navbar() {
    return (
        <div className="home">               
           
            <ul>
            <li>
                <img className="log" src={logo} alt="logo"  /></li>
            <li><h1>| WELCOME - INFINTY GROUP |</h1></li>
                <Link to="/home"><li>home</li></Link>
                <Link to="/features" ><li>features</li></Link>
               <Link to="/Track" ><li>Track</li></Link>
               <Link to="/dashboard" ><li>dashboard</li></Link>
               <Link to="/Login" ><li>Login</li></Link>
               <Link to="/register" ><li>Signup</li></Link> 
              
               
               
               
              
            </ul>
           
        </div>
    )
}

export default navbar

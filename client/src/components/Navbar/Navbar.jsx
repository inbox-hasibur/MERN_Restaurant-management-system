import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home");

    const scrollToFoodDisplay = () => {
        const foodDisplay = document.getElementById('food-display');
        if (foodDisplay) {
            foodDisplay.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setMenu("menu");
    };

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <Link to="/" onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>Home</Link>
                <a href='#food-display' 
                   onClick={(e)=>{
                       e.preventDefault();
                       scrollToFoodDisplay();
                   }} 
                   className={menu=="menu"?"active":""}>
                    Menu
                </a>
                <a href='#' onClick={()=>setMenu("find-us")} className={menu=="find-us"?"active":""}>Find-us</a>
                <a href='#' onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
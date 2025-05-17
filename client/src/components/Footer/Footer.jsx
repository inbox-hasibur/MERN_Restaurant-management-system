import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Fast food cafeteria and restaurant <br />service inside the IUBAT Campus <br />near Kamarpara, Uttara, Dhaka.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h3>Quick Links</h3>
                    <p>Home</p>
                    <p>Menu</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
                <div className="footer-content-right">
                    <h3>Contact</h3>
                    <p>Phone: +880 1234-567890</p>
                    <p>Email: info@lemonlime.com</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

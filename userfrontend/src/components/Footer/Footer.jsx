import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return ( 
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img className='logo' src={assets.logo_bottom} alt="" />
                <p>Food Prep is a full-stack project designed for hands-on teaching, helping students learn full-stack development. It's used by FACEPrep, an ed-tech company focused on equipping students with the skills to achieve their career aspirations.</p>
    <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
    </div>
            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
<li>Home</li>
<li>About Us</li>
<li>Courses</li>
<li>Reviews</li>


                </ul>
                
                
                
                </div>    
            <div className="footer-right">
<h2>Get in Touch</h2>
<ul>
    <li>+91 9014916621</li>
    <li>shaiktareqtaj01@gmail.com</li>
</ul>



            </div>
            
    </div>
    <hr />
    <p className='footer-copyright'>
        copyright 2025 © Shaik Tareq Ahamed.All rights Reserved
    </p>
    </div>
  )
}

export default Footer
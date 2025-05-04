import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      
      <h2 className='admin-title'>Admin Panel</h2>  {/* ✅ Title added here */}

      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar

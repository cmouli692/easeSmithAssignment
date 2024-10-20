import React from 'react'
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import "./Header.css"

const Header = () => {
  return (
    <div className='header-container'>
        <div className='logo-chaperone-text'>
            <img src='Group 59.png'/>
           {/* <p>Logo</p> 
           <h1>Chaperone</h1> */}
        </div>
        <div className='controllers-text-container'>
            <p>Home  </p>
            <p>Plants & Pots  </p>
            <div className='tools-down-arrow-container'>
                  <p>Tools </p>
                  <IoIosArrowDown/>
            </div>

            <div className='tools-down-arrow-container'>
                  <p>Our Services </p>
                  <IoIosArrowDown/>
            </div>
            <p>Blog  </p>
            <p>Our Stroy  </p>
            <p>FAQs  </p>
        </div>

        <div className='profile-logo-and-cart-logo-container'>
          <div>
            <div className='profile-icon-container'>
            <GoPerson/>  
            </div>
            
            <p className='profile-text'>Profile</p>
          </div>
          <div className='cart-icon-container'>
            <BsCart3/>
          </div>
          
            
        </div>
        
        
     
    </div>
  )
}

export default Header

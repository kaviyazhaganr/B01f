import React from 'react'
import image from '/Assigner Project/assigner-p/public/theASSignerlogo 2.png'
import './Menu.css'



const Menu = () => {
  return (
   

    <>
    
      <div id='Img-c'>

          <div className='img-l'>
            <img src= {image} alt="" />
          </div>
         
         <div id='menu'>

            <a href="" className='Line_none'>Home</a>
            <a href="" className='Line_none'>About Us</a>
            <a href="" className='Line_none'>Blog</a>
            <a href="" className='Line_none'>Our Services</a>
            <a href="" className='Line_none'>IELTS & PTE</a>
            <a href="" className='Line_none'>Contact Us</a>

         </div>

         <div className="btn-menu">

            <a href="" className='btn-menu-a'>Login</a>

        
         </div>
        
    

      </div>
    </>
  )
}

export default Menu
import React from 'react'
import './nav.css'
import insta from '/Assigner Project/assigner-p/public/insta.png'
import img2 from '/Assigner Project/assigner-p/public/Img (2).png'
import img3 from '/Assigner Project/assigner-p/public/Img (3).png'
import img4 from '/Assigner Project/assigner-p/public/Img (4).png'
import img5 from '/Assigner Project/assigner-p/public/Img (5).png'
import img6 from '/Assigner Project/assigner-p/public/Img (6).png'



const nav = () => {
  return (
    
    <>

    <div id='nav'>

        <div className='icon-l'>
        
        <img src={insta} className='icon-l'  alt="" />
        <img src={img2} className='icon-l' alt="" />
        <img src={img3} className='icon-l' alt="" />
        <img src={img4} className='icon-l' alt="" />
        <img src={img5} className='icon-l' alt="" />
        <img src={img6}  className='icon-l' alt="" />
       
        </div>

    </div>
    </>
  )
}

export default nav
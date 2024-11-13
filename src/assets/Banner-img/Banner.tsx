

import image from '/Assigner Project/assigner-p/public/image 1.png'

import './Banner.css'

const Banner = () => {
  return (
    <>
    
    <div className='img'>
    <img src= {image} alt="" id='banner-img' />
    </div>
     
     <div className='banner-m-content'>

        <h2 className='banner-m-content-h1' >Navigate Your</h2>
        <h2 className='banner-m-content-h2'>Academic Journey</h2>
        <h2 className='banner-m-content-h3'>with Confidence</h2>


        <p>Providing high-quality and comprehensive assistance with assignments and thesis writing for students at all academic levels.</p>


     </div>
    
    </>
  )
}

export default Banner
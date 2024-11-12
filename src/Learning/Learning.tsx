
import './Learning.css'

import image1 from '/Assigner Project/assigner-p/public/layer.png'
import image2 from '/Assigner Project/assigner-p/public/Group 1984.png'

const Learning = () => {
  return (
    <>
      <div className='learning'>

        <div className='learn-1'>

          <h1 className='learn-1-h'>IELTS Preparation</h1>

          <h1 className='learn-1-h1'>Online Best Learning</h1>
          <h1 className='learn-1-h2'>opportunities in The World</h1>

        </div>

        <div className='learn-2'>
          <p className='learn-2-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
           <p className='learn-2-p'> Audax negotium, dicerem impudens, nisi hoc institut
           </p>

           <p className='learn-2-p'>translatum ad philosophos nostros esset.</p>
        </div>


        <div className='learn-3'>


          <a href="" className='learn-anchor'>Enroll Now</a>

        </div>

        <div className='learn-4'>
          <img src={image1} alt=""  className='learn-4-img'/>

        </div>

        <div className='learn-5'>

          <img src={image2} alt="" />
        </div>



      </div>

    </>
  )
}

export default Learning